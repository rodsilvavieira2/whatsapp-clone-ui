/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useCallback, useState } from 'react'

import { Contact } from '../@types'
import { ContactsMocked } from '../mock/contact-data'
import { DefaultProviderProps } from './shared'

export type ContactManagerContextData = {
  contacts: Contact[]
  findAContactsOnState: (id: string) => Contact | null
}

export const ContactManagerContext = createContext<ContactManagerContextData>(
  {} as any
)

export const ContactManagerProvider = ({
  children
}: DefaultProviderProps): JSX.Element => {
  const [contacts, setContacts] = useState<Contact[]>(ContactsMocked)

  const findAContactsOnState = useCallback(
    (id: string) => {
      const contact = contacts.find((current) => current.id === id)

      if (!contact) {
        return null
      }

      return contact
    },
    [contacts]
  )

  return (
    <ContactManagerContext.Provider
      value={{
        contacts,
        findAContactsOnState
      }}
    >
      {children}
    </ContactManagerContext.Provider>
  )
}
