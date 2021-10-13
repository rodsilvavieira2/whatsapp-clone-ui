import { useUserActions } from '../../../hooks'
import { Header } from './header'
import { MessageInput } from './message-input'
import { Messages } from './messages'
import { Container } from './styles'

export const CurrentChat = (): JSX.Element => {
  const { isContactDataDrawerOpen } = useUserActions()
  return (
    <Container isContactDataOpen={isContactDataDrawerOpen}>
      <Header contactName="Rodrigo Silva" />

      <Messages />

      <MessageInput />
    </Container>
  )
}
