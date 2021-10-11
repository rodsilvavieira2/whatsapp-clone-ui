import { Box, styled } from '@mui/material'

import { Sidebar, Chat } from './components'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.background,
  '*': {
    scrollbarColor: 'rgba(0,0,0,.2) hsla(0,0%,100%,.1)',
    scrollbarWidth: 'thin'
  }
}))

export const App = (): JSX.Element => {
  return (
    <Container>
      <Sidebar />
      <Chat />
    </Container>
  )
}
