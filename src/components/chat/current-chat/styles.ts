import { styled } from '@mui/material/styles'

type ContainerProps = {
  isContactDataOpen: boolean
}

export const Container = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open'
})<ContainerProps>(({ isContactDataOpen, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginRight: 0,
  ...(isContactDataOpen && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: '24rem'
  })
}))
