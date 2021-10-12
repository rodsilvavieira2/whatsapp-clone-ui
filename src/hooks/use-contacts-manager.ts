import { useContext } from 'react'

import {
  ContactManagerContext,
  ContactManagerContextData
} from '../context/contacts-manager'

export const useContactsManager = (): ContactManagerContextData =>
  useContext(ContactManagerContext)
