import { Menu } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomMenu = styled(Menu)(({ theme }) => ({
  ul: {
    backgroundColor: theme.menu.primary,
    color: theme.text.primary
  }
}))
