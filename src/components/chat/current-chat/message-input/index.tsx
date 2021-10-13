import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { KeyboardVoice, Send } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import {
  CameraPin,
  ClipBoard,
  ContactPin,
  FilePin,
  HappyEmoji,
  PhotoPin
} from '../../..'
import { containerVariants, childrenVariants } from './framer-motion.config'
import {
  Container,
  Actions,
  Input,
  InputWrapper,
  PinOptions,
  PinButton
} from './styles'

export const MessageInput = (): JSX.Element => {
  const [message, setMessage] = useState('')
  const [isPinOptionsVisible, setIsPinOptionsVisible] = useState(false)
  const clipBoardButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isPinOptionsVisible) {
      clipBoardButtonRef.current?.focus()
    } else {
      clipBoardButtonRef.current?.blur()
    }
  }, [isPinOptionsVisible])

  return (
    <Container>
      <Actions>
        <IconButton>
          <HappyEmoji />
        </IconButton>

        <IconButton
          onClick={() => setIsPinOptionsVisible((prev) => !prev)}
          sx={{
            marginLeft: '0.5rem'
          }}
          ref={clipBoardButtonRef}
        >
          <ClipBoard />
        </IconButton>
      </Actions>

      <AnimatePresence>
        {isPinOptionsVisible && (
          <PinOptions
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.li variants={childrenVariants}>
              <PinButton>
                <PhotoPin />
              </PinButton>
            </motion.li>

            <motion.li variants={childrenVariants}>
              <PinButton>
                <CameraPin />
              </PinButton>
            </motion.li>

            <motion.li variants={childrenVariants}>
              <PinButton>
                <FilePin />
              </PinButton>
            </motion.li>

            <motion.li variants={childrenVariants}>
              <PinButton>
                <ContactPin />
              </PinButton>
            </motion.li>
          </PinOptions>
        )}
      </AnimatePresence>

      <InputWrapper>
        <Input
          placeholder="type a message"
          inputProps={{
            onChange: (event) => setMessage(event.currentTarget.value)
          }}
        />
      </InputWrapper>

      {message
        ? (
        <IconButton>
          <Send />
        </IconButton>
          )
        : (
        <IconButton>
          <KeyboardVoice />
        </IconButton>
          )}
    </Container>
  )
}
