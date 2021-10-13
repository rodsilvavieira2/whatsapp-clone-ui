import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  backgroundColor: theme.defaultChatBackgroundColor,
  backgroundImage: 'url(/assets/default-chat-background.png)',
  backgroundRepeat: 'repeat'
}))
