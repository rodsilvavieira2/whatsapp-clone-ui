import { Box, styled } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { Sidebar, Chat, ChatData } from './components'
import { useUserActions } from './hooks'
import { getTheme } from './styles/theme'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.background,
  color: theme.primary,
  '*': {
    scrollbarColor: theme.scrollbar.backgroundColor,
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
  const { state: { currentTheme } } = useUserActions()

  return (
    <ThemeProvider theme={getTheme(currentTheme)}>
      <Container>
        <CssBaseline />

        <Sidebar />

        <Chat />

        <ChatData />
      </Container>
    </ThemeProvider>
  )
}
