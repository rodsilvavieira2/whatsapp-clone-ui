import { AnimatePresence } from 'framer-motion'
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from 'react'

import { Search, ArrowBack } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import { arrowBackVariants, searchIconVariants } from './framer-motion.config'
import { Label, Input, SearchWrapper, CustomIconButton } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChangeValue :(value: string) => void
}

const Base: ForwardRefRenderFunction<HTMLInputElement, SearchInputProps> = (
  {
    onChangeValue,
    value,
    ...rest
  },
  ref
): JSX.Element => {
  const [isOnFocus, setIsOnFocus] = useState(false)

  const {
    background,
    card: { colors }
  } = useTheme()

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
            <CustomIconButton
              key={1}
              variants={arrowBackVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              aria-label="cancel search"
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
            >
              <Search />
            </CustomIconButton>
              )}
        </AnimatePresence>

        <Input
          placeholder="Search or start a new conversation"
          inputRef={ref}
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

export const SidebarSearchInput = forwardRef(Base)
