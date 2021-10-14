import { Contact } from '../@types'

export type UserActionsInitialState = {
  isContactDataDrawerOpen: boolean
  isUnblockModalOpen: boolean
  currentLoadedContactBlocked: Omit<Contact, 'avatarUrl'> | null
  searchValue: string
}

export const InitialUserActionState: UserActionsInitialState = {
  currentLoadedContactBlocked: null,
  isUnblockModalOpen: false,
  isContactDataDrawerOpen: false,
  searchValue: ''
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
      type: 'set-search-value'
      payload: string
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

    case 'set-search-value': {
      return {
        ...state,
        searchValue: actions.payload
      }
    }

    default: {
      return state
    }
  }
}
