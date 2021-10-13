import { motion } from 'framer-motion'

import { IconButton, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: '3.875rem',
  backgroundColor: theme.primary,
  padding: '0 1rem'
}))

export const Actions = styled('div')({})

export const InputWrapper = styled('label')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  height: ' 2.625rem',
  padding: '0 1rem',
  margin: '0 0.5rem',
  backgroundColor: theme.buttonColor,
  borderRadius: '2rem'
}))

export const Input = styled(InputBase)(({ theme }) => ({
  color: theme.text.primary,
  width: '100%',
  fontSize: '0.9375rem'
}))

export const PinOptions = styled(motion.ul)({
  display: 'flex',
  flexDirection: 'column-reverse',
  position: 'absolute',
  bottom: '110%',
  backgroundColor: 'transparent',
  zIndex: 999,
  left: '20px',
  listStyle: 'none',
  '> li + li': {
    marginBottom: '1rem',
    transformOrigin: 'bottom top 0px'
  }
})

export const PinButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  padding: 0,
  height: 52,
  width: 52,
  '::after': {
    content: '""',
    boxShadow: theme.buttons.shadows[1],
    position: 'absolute',
    height: '49px',
    width: '50px',
    borderRadius: '50%'
  }
}))
