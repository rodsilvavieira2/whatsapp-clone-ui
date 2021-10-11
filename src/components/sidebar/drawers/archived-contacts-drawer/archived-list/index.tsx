import { useState } from 'react'

import { Close } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { CustomMenuItem, ArchivedAlert, ContactCard } from '../../../..'
import { ContactsMocked } from '../../../../../mock/contact-data'
import { Header, getPrimaryContentAnimation, Container } from '../../shared'
import {
  ArchivedContactList,
  ArchivedAlertCollapse,
  ArchiveAlertWrapper,
  CloseButton
} from './styles'

type ArchivedListProps = {
  onRequestCloseDrawer: () => void
  onRequestShowArchivedConfig: () => void
}

export const ArchivedList = ({
  onRequestCloseDrawer,
  onRequestShowArchivedConfig
}: ArchivedListProps): JSX.Element => {
  const [isArchivedAlertCollapsed, setIsArchivedAlertCollapsed] = useState(true)
  return (
    <Container
      {...getPrimaryContentAnimation()}
    >
      <Header
        textLabel="Archived"
        onRequestBack={onRequestCloseDrawer}
        moreOptionsMenuConfig={{
          id: 'archive-config',
          menuAriaLabel: 'show archive config',
          menuItems: [
            {
              id: 1,
              element: (
                <CustomMenuItem onClick={onRequestShowArchivedConfig}>
                  Archiving settings
                </CustomMenuItem>
              )
            }
          ]
        }}
      />

      <ArchivedContactList>
        <Box
          sx={{
            maxHeight: '100%',
            width: '100%',
            overflow: 'auto',
            '> *': {
              maxWidth: '100%'
            }
          }}
        >
          <ArchivedAlertCollapse in={isArchivedAlertCollapsed}>
            <ArchiveAlertWrapper>
              <ArchivedAlert />

              <Typography component="h1">
                Archived conversations will remain archived
              </Typography>

              <Typography component="p">
                To avoid interruptions, archived conversations will remain in
                this folder, and you will not receive notifications of new
                messages. You can change this option in Settings {'>'} Archived
                Conversations
              </Typography>

              <CloseButton
                aria-label="close archive alert"
                onClick={() => setIsArchivedAlertCollapsed((prev) => !prev)}
              >
                <Close />
              </CloseButton>
            </ArchiveAlertWrapper>
          </ArchivedAlertCollapse>

          {ContactsMocked.map((data) => (
            <ContactCard key={data.id} {...data} />
          ))}
        </Box>
      </ArchivedContactList>
    </Container>
  )
}
