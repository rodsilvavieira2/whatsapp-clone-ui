import { Close } from '@mui/icons-material'
import { Avatar, Typography } from '@mui/material'

import { Container, ContactDataWrapper, CloseButton } from './styles'

type BlockedContactProps = {
  contactName: string
  lastMessage: string
  avatarUrl: string
}

export const BlockedContact = ({
  contactName,
  lastMessage,
  avatarUrl
}: BlockedContactProps): JSX.Element => {
  return (
    <Container>
      <Avatar
        src={avatarUrl}
        alt={contactName}
        sx={{
          height: '3.0625rem',
          width: '3.0625rem',
          margin: '0 1rem'
        }}
      />

      <ContactDataWrapper>
        <Typography fontSize="1.0625rem">{contactName}</Typography>

        <Typography fontSize="0.875rem" component="small">
          {lastMessage}
        </Typography>
      </ContactDataWrapper>

      <CloseButton>
        <Close />
      </CloseButton>
    </Container>
  )
}
