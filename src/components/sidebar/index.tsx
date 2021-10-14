import { useState } from 'react'

import { MoreVert, Message, Archive } from '@mui/icons-material'
import { Avatar, IconButton, Menu } from '@mui/material'

import { StoriesIcon, SearchInput, ContactCard, CustomMenuItem } from '..'

import { useControlMenu, useUserActions } from '../../hooks'
import { ContactsMocked } from '../../mock/contact-data'
import { AppSettingsDrawer, ArchivedContactsDrawer } from './drawers'
import {
  Container,
  Header,
  Actions,
  ContactMessageList,
  ArchivedButton
} from './styles'

export const Sidebar = (): JSX.Element => {
  const { anchorEl, handleMenuClick, isOpen, handleMenuClose } = useControlMenu(
    {}
  )

  const {
    state: { isContactDataDrawerOpen }
  } = useUserActions()

  const [isArchivedDrawerOpen, setIsArchivedDrawerOpen] = useState(false)
  const [isAppSettingsDrawerOpen, setIsAppSettingsDrawerOpen] = useState(false)

  const onRequestShowSettings = () => {
    handleMenuClose()
    setIsAppSettingsDrawerOpen(true)
  }

  return (
    <Container isDataContactOpen={isContactDataDrawerOpen}>
      <Header>
        <Avatar />

        <Actions>
          <IconButton>
            <StoriesIcon />
          </IconButton>

          <IconButton>
            <Message />
          </IconButton>

          <IconButton
            aria-label="show contact options"
            aria-controls="archived-contacts-menu"
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
            onClick={handleMenuClick}
          >
            <MoreVert />
          </IconButton>
        </Actions>
      </Header>

      <SearchInput />

      <ContactMessageList>
        <ArchivedButton
          aria-label="open archived contactList"
          onClick={() => setIsArchivedDrawerOpen(true)}
        >
          <Archive />

          <span>Archived</span>
        </ArchivedButton>

        {ContactsMocked.map((data) => (
          <ContactCard key={data.id} {...data} />
        ))}
      </ContactMessageList>

      <Menu
        id="archived-contacts-menu"
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <CustomMenuItem onClick={handleMenuClose}>New group</CustomMenuItem>

        <CustomMenuItem onClick={handleMenuClose}>Favorites</CustomMenuItem>

        <CustomMenuItem onClick={onRequestShowSettings}>
          Settings
        </CustomMenuItem>

        <CustomMenuItem onClick={handleMenuClose}>Disconnect</CustomMenuItem>
      </Menu>

      <ArchivedContactsDrawer
        onRequestCloseDrawer={() => setIsArchivedDrawerOpen(false)}
        isOpen={isArchivedDrawerOpen}
      />

      <AppSettingsDrawer
        isOpen={isAppSettingsDrawerOpen}
        onRequestCloseDrawer={() => setIsAppSettingsDrawerOpen(false)}
      />
    </Container>
  )
}
