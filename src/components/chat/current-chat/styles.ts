import { styled } from '@mui/material/styles'

type ContainerProps = {
  isDataContactOpen: boolean
}

export const Container = styled('main', {
  shouldForwardProp: (prop) => prop !== 'isDataContactOpen'
})<ContainerProps>(({ isDataContactOpen, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  flex: '70%',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginRight: 0,
  ...(isDataContactOpen && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: '24rem'
  })
}))
