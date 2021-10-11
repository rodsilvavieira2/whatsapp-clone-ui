import { Avatar, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.title,
  overflow: 'hidden',
  height: '4.5rem',
  paddingRight: '0.5rem',
  cursor: 'pointer',
  transition: 'background 0.3s',
  ':hover': {
    backgroundColor: theme.primary
  }
}))

export const ContactAvatar = styled(Avatar)({
  width: '3.0625rem',
  height: '3.0625rem',
  margin: '0 1rem'
})

export const Data = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,

  height: '100%',
  borderTop: `1px solid ${theme.borderColor.secondary}`,
  lineHeight: '21px !important',
  overflow: 'hidden',

  '> *': {
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },

  small: {
    display: 'inline-block',
    color: theme.text.secondary,
    fontSize: '0.875rem',
    maxWidth: '100%',
    fontWeight: 400,
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  p: {
    display: 'flex',
    fontSize: '1.0625rem'
  }
}))

export const LastMessageTemp = styled('time')(({ theme }) => ({
  color: theme.text.secondary,
  fontSize: '0.8125rem',
  marginLeft: 'auto'
}))

export const MenuButton = styled(IconButton)({
  width: '1.5rem',
  height: '1.5rem'
})

export const LastMessageWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})
