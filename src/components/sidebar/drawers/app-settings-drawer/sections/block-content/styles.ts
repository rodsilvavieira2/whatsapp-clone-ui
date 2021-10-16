import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AddBlockedContact = styled(Button)(({ theme }) => ({
  color: theme.text.primary,
  height: '5rem',
  textTransform: 'none',
  fontSize: '1.0625rem',
  fontWeight: 400,
  borderBottom: `1px solid ${theme.borderColor.secondary}`,
  ':hover': {
    backgroundColor: theme.primary
  },
  svg: {
    fontSize: '1.25rem !important',
    color: theme.icons.color.primary
  }
}))

export const Body = styled('div')({
  width: '100%',
  height: '100%',
  overflow: 'auto'
})
