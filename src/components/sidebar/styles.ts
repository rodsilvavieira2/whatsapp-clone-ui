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
  overflow: 'hidden'
}))

export const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.utils.covertPxToRem([10, 16]),
  backgroundColor: theme.primary,
  svg: {
    color: theme.text.primary
  }
}))

export const Actions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& > * + * ': {
    marginLeft: '0.5rem !important'
  }
})

export const ContactMessageList = styled('div')(({ theme }) => ({
  backgroundColor: theme.card.colors.primary,
  maxWidth: '100%',
  flex: 1,
  overflow: 'auto',
  paddingBottom: '1rem'
}))

export const ArchivedButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.card.colors.primary,
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
