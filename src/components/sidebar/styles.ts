import { styled } from '@mui/material/styles'

type ContainerProps = {
  isDataContactOpen: boolean
}

export const Container = styled('aside', {
  shouldForwardProp: (prop) => prop !== 'isDataContactOpen'
})<ContainerProps>(({ theme, isDataContactOpen }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: isDataContactOpen ? '0 0 25%' : '30%',
  borderRight: `1px solid ${theme.borderColor.primary}`,
  overflow: 'hidden',
  backgroundColor: theme.secondary
}))

export const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.utils.covertPxToRem([10, 16]),
  backgroundColor: theme.primary,
  'button > svg': {
    color: theme.icons.color.primary
  }
}))

export const Actions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& > * + * ': {
    marginLeft: '0.5rem !important'
  }
})
