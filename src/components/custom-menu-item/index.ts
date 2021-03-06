import { MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '0.9375rem',
  color: theme.text.primary,
  minWidth: '13.625rem !important',
  lineHeight: 2.3,
  ':hover': {
    backgroundColor: theme.menu.colors.hover
  }
}))
