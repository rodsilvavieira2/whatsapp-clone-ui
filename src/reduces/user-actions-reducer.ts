import { Contact, localStorageKeys } from '../@types'

type ThemeChoose = 'light' | 'dark' | 'system'

export type UserActionsInitialState = {
  isContactDataDrawerOpen: boolean
  isUnblockModalOpen: boolean
  currentLoadedContactBlocked: Omit<Contact, 'avatarUrl'> | null
  currentTheme: ThemeChoose
}

export const InitialUserActionState: UserActionsInitialState = {
  currentLoadedContactBlocked: null,
  isUnblockModalOpen: false,
  isContactDataDrawerOpen: false,
  currentTheme: 'light'
}

export type UserActionsActions =
  | {
      type: 'load-blocked-contact'
      payload: Contact
    }
  | {
      type: 'toggle-unblock-modal'
    }
  | {
      type: 'toggle-chat-data-drawer'
    }
  | {
      type: 'set-user-theme'
      payload: ThemeChoose
    }

export const UserActionsReducer = (
  state: UserActionsInitialState,
  actions: UserActionsActions
): UserActionsInitialState => {
  switch (actions.type) {
    case 'load-blocked-contact': {
      return {
        ...state,
        currentLoadedContactBlocked: actions.payload
      }
    }

    case 'toggle-chat-data-drawer': {
      return {
        ...state,
        isContactDataDrawerOpen: !state.isContactDataDrawerOpen
      }
    }

    case 'toggle-unblock-modal': {
      return {
        ...state,
        isUnblockModalOpen: !state.isUnblockModalOpen
      }
    }

    case 'set-user-theme': {
      localStorage.setItem(localStorageKeys.user_theme, actions.payload)

      return {
        ...state,
        currentTheme: actions.payload
      }
    }

    default: {
      return state
    }
  }
}
