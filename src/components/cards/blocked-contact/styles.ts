import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
  height: '4.5rem',
  color: theme.title,
  cursor: 'pointer',
  transition: 'background 0.3s',
  ':hover': {
    backgroundColor: theme.primary
  }
}))

export const ContactDataWrapper = styled('div')(({ theme }) => ({
  small: {
    color: theme.text.primary
  }
}))

export const CloseButton = styled(IconButton)({
  marginLeft: 'auto',
  marginRight: '1rem'
})
