import { Search, ArrowBack } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { Label, Input, SearchWrapper } from './styles'
import { arrowBackVariants, searchIconVariants } from './framer-motion.config'

export const SearchInput = (): JSX.Element => {
  const [isOnFocus, setIsOnFocus] = useState(false)

  return (
    <SearchWrapper>
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
                <ArrowBack />
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
