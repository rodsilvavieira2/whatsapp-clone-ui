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
        <IconButton aria-label="search a emoji">
          <HappyEmoji />
        </IconButton>

        <IconButton
          onClick={() => setIsPinOptionsVisible((prev) => !prev)}
          sx={{
            marginLeft: '0.5rem'
          }}
          aria-label="attach something"
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
              <PinButton aria-label="attach a photo">
                <PhotoPin />
              </PinButton>
            </motion.li>

            <motion.li variants={childrenVariants}>
              <PinButton aria-label="attach a photo taken by the camera">
                <CameraPin />
              </PinButton>
            </motion.li>

            <motion.li variants={childrenVariants}>
              <PinButton aria-label="attach a file">
                <FilePin />
              </PinButton>
            </motion.li>

            <motion.li variants={childrenVariants}>
              <PinButton aria-label="attach a contact">
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
        <IconButton aria-label="send message">
          <Send />
        </IconButton>
          )
        : (
        <IconButton aria-label="send voice message">
          <KeyboardVoice />
        </IconButton>
          )}
    </Container>
  )
}
