import { MoreVert, Search } from '@mui/icons-material'
import { Avatar, IconButton, Typography } from '@mui/material'

import { Container, ContactData, Actions } from './styles'

type HeaderProps = {
  contactName: string
}

export const Header = ({ contactName }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <Avatar
        sx={{
          flexShrink: 0
        }}
      />

      <ContactData>
        <Typography>{contactName}</Typography>
      </ContactData>

      <Actions>
        <IconButton>
          <Search />
        </IconButton>

        <IconButton
          sx={
            {
              marginLeft: '0.5rem'
            }
          }
        >
          <MoreVert />
        </IconButton>
      </Actions>
    </Container>
  )
}
