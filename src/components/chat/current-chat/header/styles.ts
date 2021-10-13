import { styled } from '@mui/material/styles'

export const Container = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 1rem',
  backgroundColor: theme.primary,
  height: '3.75rem'
}))

export const ContactData = styled('div')(({ theme }) => ({
  flex: '1',
  marginLeft: '1rem',
  p: {
    color: theme.title
  }
}))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Actions = styled('div')(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center'
}))
