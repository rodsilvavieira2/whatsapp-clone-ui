import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: theme.text.secondary
}))

export const Image = styled('img')({
  maxWidth: '15.625rem',
  maxHeight: '15.625rem'
})

export const TextWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
  h1: {
    fontSize: '2rem',
    marginTop: '1.75rem',
    color: theme.text.primary
  }
}))

export const SubTextWrapper = styled('div')({
  fontSize: '0.875rem',
  marginTop: '1.125rem',
  lineHeight: '1.25rem'
})
