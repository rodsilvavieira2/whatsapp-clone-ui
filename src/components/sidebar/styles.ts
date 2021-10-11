import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '25.625rem',
  height: '100%',
  borderRight: `1px solid ${theme.borderColor.primary}`
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

export const ContactMessageList = styled(Box)(({ theme }) => ({
  flex: '1',
  backgroundColor: theme.buttonColor,
  overflow: 'auto',
  paddingBottom: '1rem',
  scrollbarColor: 'rgba(0,0,0,.2) hsla(0,0%,100%,.1)',
  scrollbarWidth: 'thin'
}))

export const ArchivedButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.buttonColor,
  fontFamily: 'inherit',
  border: 0,
  color: theme.title,
  fontSize: '17px',
  fontWeight: 400,
  padding: '0.5rem 0.5rem 0 2rem ',
  cursor: 'pointer',
  width: '100%',
  svg: {
    color: theme.highlight.primary,
    fontSize: '1.4rem',
    marginRight: '2rem',
    marginBottom: '0.5rem'
  },
  span: {
    width: '100%',
    padding: '0.5rem 0 1rem',
    textAlign: 'left'
  }
}))
