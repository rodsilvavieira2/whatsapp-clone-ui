import { Collapse, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ArchivedContactList = styled('div')({
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden'
})

export const ArchivedAlertCollapse = styled(Collapse)({
  position: 'relative',
  flexShrink: 0
})

export const ArchiveAlertWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  lineHeight: 2,
  width: '100%',
  ' > svg': {
    color: theme.highlight.primary,
    margin: '1rem 0'
  },
  ' > h1, p': {
    width: '72%'
  },
  '> p': {
    margin: '1rem 0',
    color: theme.text.secondary
  },
  '> h1': {
    fontSize: '1.3rem',
    color: theme.title,
    fontWight: 600
  }
}))

export const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '1rem',
  right: '1rem'
})
