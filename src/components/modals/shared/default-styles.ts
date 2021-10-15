import { Modal, Button, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.highlight.main,
  borderColor: theme.borderColor.primary,
  ':hover': {
    boxShadow: theme.shadows[1],
    borderColor: theme.borderColor.primary
  }
}))

export const OkayButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.highlight.main,
  color: theme.card.colors.primary,
  ':hover': {
    backgroundColor: theme.highlight.main,
    color: theme.card.colors.primary,
    boxShadow: theme.shadows[10]
  }
}))

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
  background: theme.primary,
  h1: {
    color: theme.text.primary,
    marginBottom: '1.25rem'
  },
  color: theme.text.primary
}))

export const ButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem'
})
