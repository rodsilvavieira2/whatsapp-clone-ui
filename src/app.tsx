import { Box, styled } from '@mui/material'

import { Sidebar, Chat, ChatData } from './components'
import { ContactManagerProvider, UserActionsProvider } from './context'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.background,
  '*': {
    scrollbarColor: 'rgba(0,0,0,.2) hsla(0,0%,100%,.1)',
    scrollbarWidth: 'thin'
  },
  '*::-webkit-scrollbar': {
    width: '6px!important',
    height: '6px!important'
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.2)'
  },
  '::-webkit-scrollbar-track': {
    background: 'hsla(0,0%,100%,.1)'
  }
}))

export const App = (): JSX.Element => {
  return (
    <Container>
      <ContactManagerProvider>
        <UserActionsProvider>
          <Sidebar />

          <Chat />

          <ChatData />
        </UserActionsProvider>
      </ContactManagerProvider>
    </Container>
  )
}
