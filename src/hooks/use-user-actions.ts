import { useContext } from 'react'

import {
  UserActionsContext,
  UserActionsContextData
} from '../context/user-actions'

export const useUserActions = (): UserActionsContextData =>
  useContext(UserActionsContext)
