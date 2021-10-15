import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  backgroundColor: theme.chat.defaultColor,
  backgroundImage: `url(/assets/${theme.chat.defaultBackgroundImage})`,
  backgroundRepeat: 'repeat',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: theme.chat.defaultColor,
    opacity: 0.9
  }
}))
