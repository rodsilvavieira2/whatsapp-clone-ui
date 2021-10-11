import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { App } from './App'
import { theme } from './styles/theme'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
