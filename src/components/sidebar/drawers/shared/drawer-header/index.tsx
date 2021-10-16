import { cloneElement, ReactElement } from 'react'

import { ArrowBack, MoreVert } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { CustomMenu } from '../../../..'
import { useControlMenu } from '../../../../../hooks'
import { Container, Actions } from './styles'

type MenuItem = {
  id: number
  element: ReactElement
}

type MenuConfig = {
  id: string
  menuItems: MenuItem[]
  menuAriaLabel: string
}

type HeaderProps = {
  onRequestBack: () => void
  moreOptionsMenuConfig?: MenuConfig | null
  textLabel: string
}

export const Header = ({
  onRequestBack,
  moreOptionsMenuConfig = null,
  textLabel
}: HeaderProps): JSX.Element => {
  const {
    anchorEl,
    handleMenuClick,
    handleMenuClose,
    isOpen: IsMenuOpen
  } = useControlMenu({})

  return (
    <Container>
      <Actions>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <IconButton
            aria-label="go back to my last step"
            onClick={onRequestBack}
            sx={{
              marginRight: '1rem'
            }}
          >
            <ArrowBack />
          </IconButton>

          <Typography component="h1" fontSize="1.1875rem">
            {textLabel}
          </Typography>
        </Box>

        {moreOptionsMenuConfig && (
          <IconButton
            onClick={handleMenuClick}
            aria-label={moreOptionsMenuConfig.menuAriaLabel}
            aria-controls={moreOptionsMenuConfig.id}
            aria-haspopup="true"
            aria-expanded={IsMenuOpen ? 'true' : undefined}
          >
            <MoreVert />
          </IconButton>
        )}
      </Actions>

      {moreOptionsMenuConfig && (
        <CustomMenu
          id={moreOptionsMenuConfig.id}
          open={IsMenuOpen}
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
          {moreOptionsMenuConfig.menuItems.map(({ element, id }) => {
            return cloneElement(element, {
              key: id
            })
          })}
        </CustomMenu>
      )}
    </Container>
  )
}
