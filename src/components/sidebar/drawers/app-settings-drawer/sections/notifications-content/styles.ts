import { styled } from '@mui/material/styles'

export const ConfigsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '100%',
  padding: '0.5rem 1.2rem',
  backgroundColor: 'inherit',
  '> label': {
    'p, small': {
      color: theme.text.primary,
      fontSize: '0.875rem'
    },
    display: 'flex',
    alignItems: 'center',
    '> span': {
      marginBottom: 'auto',
      marginRight: '0.5rem'
    },
    small: {
      display: 'block',
      color: theme.text.secondary
    }
  }
}))
