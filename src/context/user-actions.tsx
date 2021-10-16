import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { localStorageKeys } from '../@types'
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
    InitialUserActionState,
    (initial) => {
      const currentTheme = localStorage.getItem(localStorageKeys.user_theme)

      if (currentTheme) {
        return {
          ...initial,
          currentTheme
        } as UserActionsInitialState
      }

      let systemTheme = 'light'

      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

      if (darkThemeMq) {
        systemTheme = 'dark'
      }

      return {
        ...initial,
        currentTheme: systemTheme
      } as UserActionsInitialState
    }
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
