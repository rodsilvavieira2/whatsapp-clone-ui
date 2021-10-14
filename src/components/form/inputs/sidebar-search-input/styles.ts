import { InputBase, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Input = styled(InputBase)(({ theme }) => ({
  width: '100%',
  fontSize: '15px',
  color: theme.text.secondary
}))

export const Label = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  backgroundColor: theme.card.colors.primary,
  borderRadius: '1rem',
  padding: '0.1rem 0',
  paddingLeft: '4.0625rem',
  paddingRight: '2rem',
  svg: {
    fontSize: '1.275rem',
    color: theme.text.primary
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    position: 'absolute',
    left: '1rem'
  },
  '.arrow-back': {
    color: theme.info
  }
}))

export const SearchWrapper = styled(Box)(({ theme }) => ({
  padding: '0.5rem 0.9rem',
  backgroundColor: theme.secondary,
  transition: 'background 0.3s ease-in, box-shadow 0.2s ease-in',
  zIndex: 1
}))
