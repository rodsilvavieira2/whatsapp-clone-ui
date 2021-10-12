import { createContext, ReactNode, useCallback, useState } from 'react'

import { Contact } from '../@types'

export type UserActionsContextData = {
  loadBlockedContact: (contact: Contact) => void
  currentLoadedContactBlocked: Contact | null
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

  const loadBlockedContact = useCallback((contact: Contact) => {
    setCurrentLoadedContactBlocked(contact)
  }, [])

  return (
    <UserActionsContext.Provider
      value={{
        currentLoadedContactBlocked,
        loadBlockedContact
      }}
    >
      {children}
    </UserActionsContext.Provider>
  )
}
