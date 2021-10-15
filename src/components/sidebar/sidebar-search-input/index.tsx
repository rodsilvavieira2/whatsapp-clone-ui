import { AnimatePresence } from 'framer-motion'
import {
  InputHTMLAttributes,
  useRef,
  useState
} from 'react'

import { Search, ArrowBack } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import { arrowBackVariants, searchIconVariants } from './framer-motion.config'
import { Label, Input, SearchWrapper, CustomIconButton } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChangeValue :(value: string) => void
}

export const SidebarSearchInput = (
  { onChangeValue, value, ...rest }: SearchInputProps
): JSX.Element => {
  const [isOnFocus, setIsOnFocus] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    card: { colors }
  } = useTheme()

  const onRequestClearSearchValue = () => console.log('clear')

  const onRequestStartSearch = () => inputRef.current?.focus()

  return (
    <SearchWrapper
      sx={{
        backgroundColor: isOnFocus ? 'inherit' : colors.primary,
        boxShadow: isOnFocus ? '0px 1px 1px rgba(0, 0, 0,0.3)' : 'unset'
      }}
    >
      <Label as="label">
        <AnimatePresence initial={false}>
          {isOnFocus
            ? (
            <CustomIconButton
              key={1}
              variants={arrowBackVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              aria-label="clear search"
              onClick={onRequestClearSearchValue}
            >
              <ArrowBack className="arrow-back" />
            </CustomIconButton>
              )
            : (
            <CustomIconButton
              key={2}
              variants={searchIconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              aria-label="start search"
              onClick={onRequestStartSearch}
            >
              <Search />
            </CustomIconButton>
              )}
        </AnimatePresence>

        <Input
          placeholder="Search or start a new conversation"
          inputRef={inputRef}
          inputProps={{
            onFocus: () => setIsOnFocus(true),
            onBlur: () => setIsOnFocus(false),
            defaultValue: value,
            onChange: (event) => onChangeValue(event.currentTarget.value),
            ...rest
          }}
        />
      </Label>
    </SearchWrapper>
  )
}
