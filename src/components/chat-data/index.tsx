import {
  Block,
  Close,
  Delete,
  KeyboardArrowRight,
  ThumbDownAlt
} from '@mui/icons-material'
import { Avatar, IconButton, Typography, Box } from '@mui/material'

import { useUserActions } from '../../hooks'
import {
  CustomDrawer,
  Header,
  AvatarWrapper,
  Medias,
  CustomStack,
  LinkButton,
  EmptyMediasMessage,
  NotificationsAndMessages,
  MessagesButton,
  MessageAndPhoneNumber,
  MessageAndPhoneNumberItem,
  ActionsButton
} from './styles'

export const ChatData = (): JSX.Element => {
  const {
    state: { isContactDataDrawerOpen },
    dispatch
  } = useUserActions()

  return (
    <CustomDrawer
      open={isContactDataDrawerOpen}
      variant="persistent"
      anchor="right"
    >
      <Header>
        <IconButton
          aria-label="close contact data"
          onClick={ () => dispatch({ type: 'toggle-chat-data-drawer' })}
        >
          <Close />
        </IconButton>

        <Typography component="h1">Contact Data</Typography>
      </Header>

      <Box
        sx={{
          height: '100%'
        }}
      >
        <CustomStack spacing={2}>
          <AvatarWrapper>
            <Avatar
              sx={{
                height: '12.5rem',
                width: '12.5rem'
              }}
            />

            <Typography component="h2">Any User</Typography>
          </AvatarWrapper>

          <Medias>
            <LinkButton>
              Media, Links, Docs
              <KeyboardArrowRight />
            </LinkButton>

            <EmptyMediasMessage>
              <Typography component="small">
                No links, media files or documents
              </Typography>
            </EmptyMediasMessage>
          </Medias>

          <NotificationsAndMessages>
            <MessagesButton>
              Mute notifications <KeyboardArrowRight />
            </MessagesButton>

            <MessagesButton>
              Favorite messages <KeyboardArrowRight />
            </MessagesButton>

            <MessagesButton>
              Temporary messages <KeyboardArrowRight />
            </MessagesButton>
          </NotificationsAndMessages>

          <MessageAndPhoneNumber>
            <LinkButton>Message and Phone number</LinkButton>

            <MessageAndPhoneNumberItem>
              +55 92 8207-1015
            </MessageAndPhoneNumberItem>
          </MessageAndPhoneNumber>

          <ActionsButton>
            <Block /> Block
          </ActionsButton>

          <ActionsButton>
            <ThumbDownAlt /> Report contact
          </ActionsButton>

          <ActionsButton>
            <Delete /> Delete chat
          </ActionsButton>
        </CustomStack>
      </Box>
    </CustomDrawer>
  )
}
