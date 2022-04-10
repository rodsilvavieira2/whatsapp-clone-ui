import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { Sidebar, Chat, ChatData } from './components'
import { Container } from './container'
import { useUserActions } from './hooks'
import { getTheme } from './styles/theme'

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
