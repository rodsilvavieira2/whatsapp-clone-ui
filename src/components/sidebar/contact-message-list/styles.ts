import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
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
