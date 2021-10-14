import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import {
  InitialUserActionState,
  UserActionsReducer,
  UserActionsActions,
  UserActionsInitialState
} from '../reduces'

export type UserActionsContextData = {
  state: UserActionsInitialState
  dispatch: Dispatch<UserActionsActions>
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
  const [state, dispatch] = useReducer(
    UserActionsReducer,
    InitialUserActionState
  )

  return (
    <UserActionsContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </UserActionsContext.Provider>
  )
}
