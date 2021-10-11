import { Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomCheckBox = styled(Checkbox)(({ theme }) => ({
  color: theme.highlight.primary,
  '&.Mui-checked': {
    color: theme.highlight.primary
  }
}))
