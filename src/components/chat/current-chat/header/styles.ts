import { styled } from '@mui/material/styles'

export const Container = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.primary,
  height: '3.75rem'
}))

export const ContactData = styled('div')(({ theme }) => ({
  flex: '1 0 1',
  p: {
    color: theme.title
  }
}))

export const Actions = styled('div')(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center'
}))
