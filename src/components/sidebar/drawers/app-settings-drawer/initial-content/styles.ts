import { ButtonBase, ListItem } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ContactData = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  '> *': {
    textOverflow: 'ellipsis',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
    overflow: 'hidden'
  },
  small: {
    color: theme.text.secondary
  }
}))

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  height: '3.75rem',
  '& > div': {
    height: '100%',
    paddingLeft: '1.5rem'
  },
  svg: {
    color: theme.icons.color.primary
  },
  '> div': {
    ':hover': {
      backgroundColor: theme.primary
    }
  }
}))

export const AvatarButtonWrapper = styled(ButtonBase)(({ theme }) => ({
  justifyContent: 'unset',
  padding: '0.8rem 1rem',
  ':hover': {
    backgroundColor: theme.primary
  },
  transition: 'background 0.3s'
}))
