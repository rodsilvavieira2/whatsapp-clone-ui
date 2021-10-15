import { memo } from 'react'

import { Close } from '@mui/icons-material'
import { Avatar, Typography } from '@mui/material'

import { Contact } from '../../../@types'
import { useUserActions } from '../../../hooks'
import { Container, ContactDataWrapper, CloseButton } from './styles'

type BlockedContactProps = Contact

const Base = ({
  id,
  contactName,
  lastMessage,
  avatarUrl
}: BlockedContactProps): JSX.Element => {
  const { dispatch } = useUserActions()

  const onShouldUnblock = () => {
    dispatch({ type: 'toggle-unblock-modal' })
    dispatch({
      type: 'load-blocked-contact',
      payload: { id, contactName, lastMessage, avatarUrl }
    })
  }

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

      <CloseButton onClick={onShouldUnblock}>
        <Close />
      </CloseButton>
    </Container>
  )
}

export const BlockedContact = memo(Base)
