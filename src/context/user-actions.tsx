import { createContext, ReactNode, useCallback, useState } from 'react'

import { Contact } from '../@types'

export type UserActionsContextData = {
  loadBlockedContact: (contact: Contact) => void
  currentLoadedContactBlocked: Contact | null
  toggleUnblockModal: () => void
  toggleChatDataDrawer: () => void
  isUnblockModalOpen: boolean
  isContactDataDrawerOpen: boolean
}

export const UserActionsContext = createContext<UserActionsContextData>(
  {} as any
)

type UserActionsProviderProps = {
  children: ReactNode
}

export const UserActionsProvider = ({
  children
}: UserActionsProviderProps): JSX.Element => {
  const [currentLoadedContactBlocked, setCurrentLoadedContactBlocked] =
    useState<Contact | null>(null)

  const [isContactDataDrawerOpen, setIsContactDataDrawerOpen] = useState(true)

  const [isUnblockModalOpen, setIsUnblockModalOpen] = useState(false)

  const loadBlockedContact = useCallback((contact: Contact) => {
    setCurrentLoadedContactBlocked(contact)
  }, [])

  const toggleUnblockModal = useCallback(() => {
    setIsUnblockModalOpen((prev) => !prev)
  }, [])

  const toggleChatDataDrawer = useCallback(() => {
    setIsContactDataDrawerOpen((prev) => !prev)
  }, [])

  return (
    <UserActionsContext.Provider
      value={{
        isContactDataDrawerOpen,
        toggleChatDataDrawer,
        currentLoadedContactBlocked,
        loadBlockedContact,
        isUnblockModalOpen,
        toggleUnblockModal
      }}
    >
      {children}
    </UserActionsContext.Provider>
  )
}
