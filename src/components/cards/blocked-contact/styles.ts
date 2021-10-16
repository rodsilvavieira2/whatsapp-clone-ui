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
  },
  'button > svg': {
    color: theme.icons.color.primary
  }
}))

export const ContactDataWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  maxHeight: '100%',
  overflow: 'hidden',
  p: {
    color: theme.text.primary
  },
  small: {
    display: 'inline-block',
    color: theme.text.secondary,
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
}))

export const CloseButton = styled(IconButton)({
  marginLeft: 'auto',
  marginRight: '1rem'
})
