import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/system'

import { ConvertPxToRem } from '../util'

export const lithTheme = {
  primary: '#EDEDED',
  secondary: '#ffff',
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
  menu: {
    primary: '#fff',
    colors: {
      hover: '#EDEDED'
    }
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
    defaultColor: 'rgb(229, 221, 213)',
    defaultBackgroundImage: 'default-chat-background-light.png'
  },
  utils: {
    covertPxToRem: ConvertPxToRem
  },
  card: {
    shadows: {
      1: '0 1px 3px rgba(0, 0, 0, 0.08)'
    },
    colors: {
      primary: '#ffff',
      secondary: '#f0f0f0',
      main: '#ffff',
      dark: '#ededed'
    }
  },
  error: {
    primary: '#df3838'
  },
  icons: {
    color: {
      primary: '#51585c'
    }
  },
  scrollbar: {
    backgroundColor: 'rgba(0,0,0,.2) hsla(0,0%,100%,.1)'
  }
}

export const darkTheme = {
  primary: '#2a2f32',
  secondary: '#131c21',
  highlight: {
    primary: '#00bfa5',
    secondary: '#06D755',
    main: '#00af9c'
  },
  text: {
    primary: 'rgba(241, 241, 242, 0.92)',
    secondary: 'rgba(241, 241, 242, 0.63)'
  },
  title: '#030303',
  borderColor: {
    primary: '#323739',
    secondary: '#323739'
  },
  info: '#57c6f4',
  menu: {
    primary: '#2a2f32',
    colors: {
      hover: '#242b2f'
    }
  },
  modal: {
    overlay: 'rgba(9, 14, 17, 0.85)'
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
    defaultColor: '#0d1418',
    defaultBackgroundImage: 'default-chat-background-dark.png'
  },
  utils: {
    covertPxToRem: ConvertPxToRem
  },
  card: {
    shadows: {
      1: '0 1px 3px rgba(0, 0, 0, 0.08)'
    },
    colors: {
      primary: '#131c21',
      secondary: '#1e2428',
      main: '#33383b',
      dark: '#0d1418'
    }
  },
  error: {
    primary: '#ef697a'
  },
  icons: {
    color: {
      primary: '#b1b3b5'
    }
  },
  scrollbar: {
    backgroundColor: 'hsla(0,0%,100%,.16) transparent'
  }
}

export const getTheme = (theme: string): Theme => {
  return createTheme({ ...(theme === 'dark' ? darkTheme : lithTheme) })
}
