import { Radio } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomRadio = styled(Radio)(({ theme }) => ({
  '.MuiSvgIcon-root': {
    fontSize: '1.2rem'
  },
  '&.Mui-checked': {
    color: theme.inputs.radio.color
  }
}))
