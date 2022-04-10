import { Box, styled } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
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
