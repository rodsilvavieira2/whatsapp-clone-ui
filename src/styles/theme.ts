import { createTheme } from '@mui/material/styles'

export const LithTheme = {
  primary: '#EDEDED',
  background: '#f8f9fa',
  secondary: '#f6f6f6',
  highlight: {
    primary: '#00bfa5',
    secondary: '#06D755'
  },
  text: {
    primary: '#525252',
    secondary: '#a4a4a4'
  },
  title: '#030303',
  borderColor: {
    primary: '#e4e5e6',
    secondary: '#f2f2f2'
  },
  info: '#57c6f4',
  buttonColor: '#ffff',
  menuText: {
    primary: '#4a4a4a'
  },
  hover: {
    button: 'rgba(0, 0, 0, 0.04)'
  },
  modal: {
    overlay: 'hsla(0,0%,100%,0.85)'
  },
  inputs: {
    radio: {
      color: '#6d5890'
    }
  },
  buttons: {
    color: '#0aa545'
  }
}

export const theme = createTheme({
  ...LithTheme
})