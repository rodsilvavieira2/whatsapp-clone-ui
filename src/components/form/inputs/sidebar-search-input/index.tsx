import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { Search, ArrowBack } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import { arrowBackVariants, searchIconVariants } from './framer-motion.config'
import { Label, Input, SearchWrapper } from './styles'

export const SearchInput = (): JSX.Element => {
  const [isOnFocus, setIsOnFocus] = useState(false)

  const { background, card: { colors } } = useTheme()

  return (
    <SearchWrapper
      sx={{
        backgroundColor: isOnFocus ? colors.primary : background,
        boxShadow: isOnFocus ? '0px 1px 1px rgba(0, 0, 0,0.3)' : 'unset'
      }}
    >
      <Label as="label">
        <AnimatePresence initial={false}>
          {isOnFocus
            ? (
            <motion.span
              key={1}
              variants={arrowBackVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ArrowBack className="arrow-back" />
            </motion.span>
              )
            : (
            <motion.span
              key={2}
              variants={searchIconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Search />
            </motion.span>
              )}
        </AnimatePresence>
        <Input
          inputProps={{
            onFocus: () => setIsOnFocus(true),
            onBlur: () => setIsOnFocus(false)
          }}
        />
      </Label>
    </SearchWrapper>
  )
}
