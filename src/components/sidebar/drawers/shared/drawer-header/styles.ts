import { styled } from '@mui/material/styles'

export const Container = styled('header')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  backgroundColor: theme.primary,
  color: theme.text.primary,
  height: '6.75rem',
  padding: '0 1.4375rem',
  width: '100%'
}))

export const Actions = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
  marginBottom: '0.5rem',
  'button > svg': {
    color: theme.icons.color.primary
  }
}))
