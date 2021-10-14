import { Contact } from '../@types'

export type UserActionsInitialState = {
  isContactDataDrawerOpen: boolean
  isUnblockModalOpen: boolean
  currentLoadedContactBlocked: Omit<Contact, 'avatarUrl'> | null
}

export const InitialUserActionState: UserActionsInitialState = {
  currentLoadedContactBlocked: null,
  isUnblockModalOpen: false,
  isContactDataDrawerOpen: false
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

    default: {
      return state
    }
  }
}
