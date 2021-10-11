import { styled } from '@mui/material/styles'

export const ConfigWrapper = styled('div')(({ theme }) => ({
  margin: '28px 24px 20px 25px',
  label: {
    display: 'flex',
    alignItems: 'center',
    span: {
      marginBottom: 'auto'
    },
    '.sub-text': {
      color: theme.text.primary
    }
  }
}))
