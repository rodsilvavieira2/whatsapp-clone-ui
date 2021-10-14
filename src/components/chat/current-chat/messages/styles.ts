import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  backgroundImage: 'url(/assets/default-chat-background.png)',
  backgroundRepeat: 'repeat',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: theme.chat.defaultColor,
    opacity: 0.9
  }
}))
