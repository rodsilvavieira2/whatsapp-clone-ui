import { useState } from 'react'

import { KeyboardArrowDown } from '@mui/icons-material'
import { Typography, Menu } from '@mui/material'

import { CustomMenuItem } from '../..'
import { useControlMenu } from '../../../hooks'
import {
  Container,
  ContactAvatar,
  Data,
  LastMessageTemp,
  MenuButton,
  LastMessageWrapper,
  ContactActions
} from './styles'

type ContactCardProps = {
  id: string
  contactName: string
  lastMessage: string
  avatarUrl: string
}

export const ContactCard = ({
  avatarUrl,
  contactName,
  lastMessage
}: ContactCardProps): JSX.Element => {
  const [shouldShowActionsBox, setShouldShowActionsBox] = useState(false)

  const { handleMenuClick, handleMenuClose, isOpen, anchorEl } = useControlMenu(
    {
      onClose: () => setShouldShowActionsBox(false)
    }
  )

  const onMouseEnter = () => {
    setShouldShowActionsBox(true)
  }

  const onMouseLeave = () => {
    setShouldShowActionsBox(false)
  }

  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ContactAvatar src={avatarUrl} alt={contactName} />

      <Data>
        <Typography>
          {contactName}
          <LastMessageTemp>12:58</LastMessageTemp>
        </Typography>

        <LastMessageWrapper isInFocus={shouldShowActionsBox}>
          <Typography component="small">{lastMessage}</Typography>

          <ContactActions isInFocus={shouldShowActionsBox}>
            <MenuButton
              aria-label="show contact options"
              aria-controls="contact-menu-options"
              aria-haspopup="true"
              aria-expanded={isOpen ? 'true' : undefined}
              onClick={handleMenuClick}
            >
              <KeyboardArrowDown />
            </MenuButton>
          </ContactActions>
        </LastMessageWrapper>
      </Data>

      <Menu
        id="contact-menu-options"
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
      >
        <CustomMenuItem onClick={handleMenuClose}>Archive</CustomMenuItem>

        <CustomMenuItem onClick={handleMenuClose}>
          Silence notifications
        </CustomMenuItem>

        <CustomMenuItem onClick={handleMenuClose}>
          Delete conversation
        </CustomMenuItem>

        <CustomMenuItem onClick={handleMenuClose}>
          Pin conversation
        </CustomMenuItem>
      </Menu>
    </Container>
  )
}
