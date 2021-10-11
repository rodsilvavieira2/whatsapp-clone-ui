import { Button, Modal, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
    backgroundColor: theme.modal.overlay
  }
}))

export const Content = styled(Paper)(({ theme }) => ({
  width: '25rem',
  padding: '1.25rem 1.5rem',
  h1: {
    color: theme.text.primary,
    marginBottom: '1.25rem'
  }
}))

export const ButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem'
})

export const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.buttons.color,
  borderColor: theme.borderColor.primary,
  ':hover': {
    boxShadow: theme.shadows[1],
    borderColor: theme.borderColor.primary
  }
}))

export const OkayButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.buttons.color,
  color: theme.buttonColor,
  ':hover': {
    backgroundColor: theme.buttons.color,
    color: theme.buttonColor,
    boxShadow: theme.shadows[1]
  }
}))
