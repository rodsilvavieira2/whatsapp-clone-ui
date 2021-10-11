import { Header, getSecondaryContentAnimation, Container } from '../../../shared'

type BlockContentProps = {
  onRequestBack: () => void
}

export const BlockContent = ({
  onRequestBack
}: BlockContentProps): JSX.Element => {
  return (
    <Container {...getSecondaryContentAnimation()}>
      <Header onRequestBack={onRequestBack} textLabel="Blocked contacts" />
    </Container>
  )
}
