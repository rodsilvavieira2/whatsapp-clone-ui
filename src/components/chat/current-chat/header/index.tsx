import { MoreVert, Search } from '@mui/icons-material'
import { Avatar, IconButton, Typography } from '@mui/material'

import { useUserActions } from '../../../../hooks'
import { Container, ContactData, Actions } from './styles'

type HeaderProps = {
  contactName: string
}

export const Header = ({ contactName }: HeaderProps): JSX.Element => {
  const { toggleChatDataDrawer } = useUserActions()

  return (
    <Container>
      <IconButton
        aria-label="open current chat  data"
        onClick={toggleChatDataDrawer}
      >
        <Avatar
          sx={{
            flexShrink: 0
          }}
        />
      </IconButton>

      <ContactData>
        <Typography>{contactName}</Typography>
      </ContactData>

      <Actions>
        <IconButton>
          <Search />
        </IconButton>

        <IconButton
          sx={{
            marginLeft: '0.5rem'
          }}
        >
          <MoreVert />
        </IconButton>
      </Actions>
    </Container>
  )
}
