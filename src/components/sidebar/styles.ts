import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '25.625rem',
  height: '100%',
  borderRight: `1px solid ${theme.borderColor}`
}))

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.625rem 1rem',
  backgroundColor: theme.primary,
  svg: {
    color: theme.text.primary
  }
}))

export const Actions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& > * + * ': {
    marginLeft: '0.5rem !important'
  }
})

export const ContactMessageList = styled(Box)({
  flex: '1',
  backgroundColor: '#ffff'
})
