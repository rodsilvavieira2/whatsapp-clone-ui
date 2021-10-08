import { styled } from '@mui/material/styles'
import { InputBase, Box } from '@mui/material'

export const Input = styled(InputBase)(({ theme }) => ({
  width: '100%',
  fontSize: '15px',
  color: theme.text.secondary
}))

export const Label = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  backgroundColor: '#ffff',
  borderRadius: '1rem',
  padding: '0.1rem 0',
  paddingLeft: '4.0625rem',
  paddingRight: '2rem',
  svg: {
    fontSize: '1.275rem',
    color: theme.text.primary
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    position: 'absolute',
    left: '1rem'
  }
}))

export const SearchWrapper = styled(Box)(({ theme }) => ({
  padding: '0.5rem 0.9rem',
  backgroundColor: theme.secondary
}))
