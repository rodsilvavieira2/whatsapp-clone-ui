import { Avatar, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.title,
  overflow: 'hidden',
  height: '4.5rem',
  paddingRight: '0.5rem',
  maxWidth: '100%',
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
  height: '100%',
  width: '100%',
  maxWidth: '100%',
  borderTop: `1px solid ${theme.borderColor.secondary}`,
  lineHeight: theme.utils.covertPxToRem(21),
  overflow: 'hidden',
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

type LastMessageWrapperProps = {
  isInFocus: boolean
}

export const LastMessageWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isInFocus'
})<LastMessageWrapperProps>(({ theme, isInFocus }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '100%',
  position: 'relative',
  '& > small': {
    display: 'inline-block',
    color: theme.text.secondary,
    fontSize: '0.875rem',
    fontWeight: 400,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: isInFocus ? '90%' : '100%',
    transition: 'all 0.3s ease-in'
  }
}))

type ContactActionsProps = {
  isInFocus: boolean
}

export const ContactActions = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isInFocus'
})<ContactActionsProps>(({ isInFocus }) => ({
  position: 'absolute',
  left: isInFocus ? '90%' : '100%',
  transition: 'all 0.3s ease-in'
}))
