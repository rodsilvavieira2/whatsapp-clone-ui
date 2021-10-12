import { styled } from '@mui/material/styles'

export const QrCode = styled('div')(({ theme }) => ({
  backgroundColor: theme.primary,
  height: '16.125rem',
  width: '16.125rem',
  backgroundImage: 'url(/assets/qr-code.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1600% auto',
  marginTop: '2rem',
  marginBottom: '1.75rem',
  '@keyframes qr-code-animation': {
    to: {
      backgroundPositionX: '100%'
    }
  },
  animation: 'qr-code-animation 1s steps(15) infinite'
}))

export const QrCodeWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: theme.primary,
  small: {
    marginBottom: '2rem',
    textAlign: 'center',
    color: theme.text.primary,
    fontSize: '0.875rem'
  }
}))

export const HelpLink = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.title,
  height: '3.75rem',
  textDecoration: 'none',
  transition: 'background 0.3s',
  padding: '0 1.875rem',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: theme.borderColor.secondary
  },
  verticalAlign: 'center',
  textAlign: 'center',
  borderTop: `1px solid ${theme.borderColor.secondary}`
}))
