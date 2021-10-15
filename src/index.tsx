import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { App } from './app'
import { ContactManagerProvider, UserActionsProvider } from './context'

ReactDOM.render(
  <StrictMode>
    <ContactManagerProvider>
      <UserActionsProvider>
        <App />
      </UserActionsProvider>
    </ContactManagerProvider>
  </StrictMode>,
  document.getElementById('root')
)
