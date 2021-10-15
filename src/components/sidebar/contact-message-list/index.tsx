import { useMemo, useState } from 'react'

import { Archive } from '@mui/icons-material'
import { Collapse } from '@mui/material'

import { ContactCard } from '../..'
import { useContactsManager } from '../../../hooks'
import { SidebarSearchInput } from '../sidebar-search-input'
import {
  Container,
  ArchivedButton,
  NoSearchResult,
  ConversationsTitle
} from './styles'

type ContactMessageListProps = {
  onRequestOpenArchivedDrawer: () => void
}

export const ContactMessageList = ({
  onRequestOpenArchivedDrawer
}: ContactMessageListProps): JSX.Element => {
  const { contacts } = useContactsManager()
  const [searchValue, setSearchValue] = useState('')

  const filteredContacts = useMemo(() => {
    return contacts.filter(({ contactName }) => {
      if (contactName) {
        if (
          contactName
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        ) {
          return true
        }

        return false
      }

      return true
    })
  }, [contacts, searchValue])

  return (
    <>
      <SidebarSearchInput
        value={searchValue}
        onChangeValue={(value) => setSearchValue(value)}
      />
      <Container>
        {filteredContacts.length
          ? (
          <>
            {!searchValue && (
              <ArchivedButton
                aria-label="open archived contactList"
                onClick={onRequestOpenArchivedDrawer}
              >
                <Archive />

                <span>Archived</span>
              </ArchivedButton>
            )}

            <Collapse in={!!searchValue}>
              <ConversationsTitle>conversations</ConversationsTitle>
            </Collapse>

            {filteredContacts.map((contact) => (
              <ContactCard key={contact.id} {...contact} />
            ))}
          </>
            )
          : (
          <NoSearchResult>
            No conversations, contacts or messages were found.
          </NoSearchResult>
            )}
      </Container>
    </>
  )
}
