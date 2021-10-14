import { Drawer, Stack, ButtonBase, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '24rem',
    backgroundColor: theme.primary,
    overflow: 'hidden'
  }
}))

export const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  zIndex: 999,
  backgroundColor: theme.primary,
  height: '3.6875rem',
  color: theme.title,
  padding: '0 1rem',
  '> button': {
    marginRight: '0.5rem',
    color: theme.text.primary
  }
}))

export const AvatarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '19.875rem',
  h2: {
    marginTop: '1rem',
    fontSize: '1.1875rem',
    alignSelf: 'flex-start',
    marginLeft: '2rem'
  }
})

export const Medias = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '7.4375rem',
  padding: theme.utils.covertPxToRem([14, 28, 10])
}))

export const CustomStack = styled(Stack)(({ theme }) => ({
  maxHeight: '90%',
  overflow: 'auto',
  paddingBottom: theme.utils.covertPxToRem(32),
  '> *': {
    backgroundColor: theme.card.colors.primary,
    boxShadow: theme.card.shadows[1],
    flexShrink: 0
  }
}))

export const LinkButton = styled(ButtonBase)(({ theme }) => ({
  color: theme.highlight.primary,
  fontSize: theme.utils.covertPxToRem(14),
  textALing: 'left',
  justifyContent: 'flex-start',
  width: '100%',
  svg: {
    color: theme.text.primary,
    marginLeft: 'auto'
  }
}))

export const EmptyMediasMessage = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  small: {
    color: theme.text.secondary,
    fontSize: theme.utils.covertPxToRem(14)
  }
}))

export const NotificationsAndMessages = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: theme.utils.covertPxToRem(199),
  '> * + *': {
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: theme.utils.covertPxToRem(30),
      right: 0,
      height: '1px',
      backgroundColor: theme.borderColor.primary
    }
  }
}))

export const MessagesButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  justifyContent: 'flex-start',
  textAlign: 'left',
  fontSize: '1rem',
  height: theme.utils.covertPxToRem(60),
  padding: theme.utils.covertPxToRem([0, 30]),
  svg: {
    color: theme.text.primary,
    marginLeft: 'auto'
  }
}))

export const MessageAndPhoneNumber = styled('div')(({ theme }) => ({
  height: theme.utils.covertPxToRem(182),
  padding: theme.utils.covertPxToRem([14, 30]),
  '> p + p': {
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: theme.utils.covertPxToRem(30),
      right: 0,
      height: '1px',
      backgroundColor: theme.borderColor.primary
    }
  }
}))

export const MessageAndPhoneNumberItem = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: theme.utils.covertPxToRem(61),
  fontSize: '1rem'
}))

export const ActionsButton = styled(ButtonBase)(({ theme }) => ({
  justifyContent: 'flex-start',
  backgroundColor: theme.card.colors.primary,
  color: theme.error.primary,
  fontSize: '1rem',
  height: theme.utils.covertPxToRem(60),
  padding: theme.utils.covertPxToRem([0, 30]),
  svg: {
    marginRight: '2rem'
  }
}))
