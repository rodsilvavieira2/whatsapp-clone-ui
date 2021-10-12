import { Typography } from '@mui/material'

import {
  Header,
  getSecondaryContentAnimation,
  Container
} from '../../../shared'
import { HelpLink, QrCode, QrCodeWrapper } from './styles'

type HelpContentProps = {
  onRequestBack: () => void
}

export const HelpContent = ({
  onRequestBack
}: HelpContentProps): JSX.Element => {
  return (
    <Container {...getSecondaryContentAnimation()}>
      <Header onRequestBack={onRequestBack} textLabel="Help" />

      <QrCodeWrapper>
        <QrCode />

        <Typography component="small">Version 2.2138.13</Typography>
      </QrCodeWrapper>

      <HelpLink>Help center</HelpLink>

      <HelpLink>Contact us</HelpLink>

      <HelpLink>Terms and privacy policy</HelpLink>
    </Container>
  )
}
