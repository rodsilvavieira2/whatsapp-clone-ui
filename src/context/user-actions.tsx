import { createContext, ReactNode, useCallback, useState } from 'react'

import { Contact } from '../@types'

export type UserActionsContextData = {
  loadBlockedContact: (contact: Contact) => void
  currentLoadedContactBlocked: Contact | null
  toggleUnblockModal: () => void
  isUnblockModalOpen: boolean
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

  const [isUnblockModalOpen, setIsUnblockModalOpen] = useState(false)

  const loadBlockedContact = useCallback((contact: Contact) => {
    setCurrentLoadedContactBlocked(contact)
  }, [])

  const toggleUnblockModal = useCallback(() => {
    setIsUnblockModalOpen((prev) => !prev)
  }, [])

  return (
    <UserActionsContext.Provider
      value={{
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
