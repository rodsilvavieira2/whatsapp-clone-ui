import { PersonAdd } from '@mui/icons-material'

import { BlockedContact } from '../../../../..'
import { ContactsMocked } from '../../../../../../mock/contact-data'
import {
  Header,
  getSecondaryContentAnimation,
  Container
} from '../../../shared'
import { AddBlockedContact, Body } from './styles'

type BlockContentProps = {
  onRequestBack: () => void
}

export const BlockContent = ({
  onRequestBack
}: BlockContentProps): JSX.Element => {
  return (
    <Container {...getSecondaryContentAnimation()}>
      <Header onRequestBack={onRequestBack} textLabel="Blocked contacts" />

      <AddBlockedContact startIcon={<PersonAdd />}>
        add blocked contact
      </AddBlockedContact>

      <Body>
        {ContactsMocked.map((data) => (
          <BlockedContact key={data.id} {...data} />
        ))}
      </Body>
    </Container>
  )
}
