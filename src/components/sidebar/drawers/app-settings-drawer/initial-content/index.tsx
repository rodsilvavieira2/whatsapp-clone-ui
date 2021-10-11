import {
  Notifications,
  BrightnessMedium,
  Block,
  BrightnessAuto,
  Archive,
  Help,
  Photo
} from '@mui/icons-material'
import {
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'

import { SecondaryContent } from '..'

import { Container, Header, getPrimaryContentAnimation } from '../../shared'
import { ContactData, CustomListItem, AvatarButtonWrapper } from './styles'

type InitialContentProps = {
  onRequestCloseDrawer: () => void
  onRequestShowSecondaryContent: (content: SecondaryContent) => void
}

export const InitialContent = ({
  onRequestCloseDrawer,
  onRequestShowSecondaryContent
}: InitialContentProps): JSX.Element => {
  return (
    <Container {...getPrimaryContentAnimation()}>
      <Header onRequestBack={onRequestCloseDrawer} textLabel="Settings" />

      <AvatarButtonWrapper>
        <Avatar
          sx={{
            height: '5.125rem',
            width: '5.125rem',
            marginRight: '1rem'
          }}
        />

        <ContactData>
          <Typography fontSize="1.1875rem" component="h1">
            Ay User
          </Typography>

          <Typography component="small" fontSize="0.9375rem">
            Available
          </Typography>
        </ContactData>
      </AvatarButtonWrapper>

      <List>
        <CustomListItem
          onClick={() => onRequestShowSecondaryContent('notifications')}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>

            <ListItemText>Notification</ListItemText>
          </ListItemButton>
        </CustomListItem>

        <CustomListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BrightnessMedium />
            </ListItemIcon>

            <ListItemText>Theming</ListItemText>
          </ListItemButton>
        </CustomListItem>

        <CustomListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Photo />
            </ListItemIcon>

            <ListItemText>Chat wallpaper</ListItemText>
          </ListItemButton>
        </CustomListItem>

        <CustomListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Archive />
            </ListItemIcon>

            <ListItemText>Archived</ListItemText>
          </ListItemButton>
        </CustomListItem>

        <CustomListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Block />
            </ListItemIcon>

            <ListItemText>Blocked</ListItemText>
          </ListItemButton>
        </CustomListItem>

        <CustomListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BrightnessAuto />
            </ListItemIcon>

            <ListItemText>Shortcuts</ListItemText>
          </ListItemButton>
        </CustomListItem>

        <CustomListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Help />
            </ListItemIcon>

            <ListItemText>Help</ListItemText>
          </ListItemButton>
        </CustomListItem>
      </List>
    </Container>
  )
}
