import { Header } from './header'
import { MessageInput } from './message-input'
import { Messages } from './messages'
import { Container } from './styles'

export const CurrentChat = (): JSX.Element => {
  return (
    <Container>
      <Header contactName='Rodrigo Silva' />

      <Messages />

     <MessageInput />
    </Container>
  )
}
