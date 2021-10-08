import { createTheme } from '@mui/material/styles'

export const LithTheme = {
  primary: '#EDEDED',
  background: '#f8f9fa',
  secondary: '#f6f6f6',
  highlight: '#06D755',
  text: {
    primary: '#51585c',
    secondary: '#a4a4a4'
  },
  title: '#030303',
  borderColor: '#e4e5e6'
}

export const theme = createTheme({
  ...LithTheme
})
