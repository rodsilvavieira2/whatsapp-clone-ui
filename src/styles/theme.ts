import { createTheme } from '@mui/material/styles'

import { ConvertPxToRem } from '../util'

export const LithTheme = {
  primary: '#EDEDED',
  secondary: '#f6f6f6',
  background: '#f8f9fa',
  highlight: {
    primary: '#00bfa5',
    secondary: '#06D755',
    main: '#0aa545'
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
  menuText: {
    primary: '#4a4a4a'
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
    shadows: {
      1: '0 1px 2px rgba(0,0,0,0.17),0 6px 8px rgba(0,0,0,0.29)'
    },
    hover: {
      1: 'rgba(0, 0, 0, 0.04)'
    }
  },
  chat: {
    defaultColor: 'rgb(229, 221, 213)'
  },
  utils: {
    covertPxToRem: ConvertPxToRem
  },
  card: {
    shadows: {
      1: '0 1px 3px rgba(0, 0, 0, 0.08)'
    },
    colors: {
      primary: '#ffff'
    }
  },
  error: {
    primary: '#df3838'
  }
}

export const theme = createTheme({
  ...LithTheme
})
