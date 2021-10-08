import { Avatar, IconButton } from '@mui/material'
import { MoreVert, Message } from '@mui/icons-material'

import { Container, Header, Actions, ContactMessageList } from './styles'
import { StoriesIcon } from '../customIcons'
import { SearchInput } from '../form'

export const Sidebar = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <Avatar />

        <Actions>
          <IconButton>
            <StoriesIcon />
          </IconButton>

          <IconButton>
            <Message />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </Actions>
      </Header>

      <SearchInput />

      <ContactMessageList></ContactMessageList>
    </Container>
  )
}
