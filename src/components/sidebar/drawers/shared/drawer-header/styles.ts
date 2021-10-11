import { styled } from '@mui/material/styles'

export const Container = styled('header')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  backgroundColor: theme.highlight.primary,
  color: theme.buttonColor,
  height: '6.75rem',
  padding: '0 1.4375rem',
  width: '100%',
  svg: {
    color: theme.buttonColor
  }
}))

export const Actions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
  marginBottom: '0.5rem'
})
