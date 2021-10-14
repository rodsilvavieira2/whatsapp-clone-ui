import { useState } from 'react'

import { Archive } from '@mui/icons-material'

import { ContactCard } from '../..'
import { useContactsManager } from '../../../hooks'
import { SidebarSearchInput } from '../sidebar-search-input'
import { Container, ArchivedButton } from './styles'

type ContactMessageListProps = {
  onRequestOpenArchivedDrawer: () => void
}

export const ContactMessageList = ({
  onRequestOpenArchivedDrawer
}: ContactMessageListProps): JSX.Element => {
  const { contacts } = useContactsManager()
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <SidebarSearchInput
        value={searchValue}
        onChangeValue={(value) => setSearchValue(value)}
      />
      <Container>
        <ArchivedButton
          aria-label="open archived contactList"
          onClick={onRequestOpenArchivedDrawer}
        >
          <Archive />

          <span>Archived</span>
        </ArchivedButton>

        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </Container>
    </>
  )
}
