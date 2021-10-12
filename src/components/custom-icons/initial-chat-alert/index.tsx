import { Typography } from '@mui/material'

import { Container, Image, TextWrapper, SubTextWrapper } from './styles'

export const InitialChatAlert = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Image src="/assets/phone.jpg" alt="cell phone on wi-fi" />
      </div>

      <TextWrapper>
        <Typography component="h1">Keep your cell phone connected</Typography>

        <SubTextWrapper>
          <Typography>
            WhatsApp connects to your mobile to sync your messages.
          </Typography>

          <Typography>
            To reduce data usage, connect your phone to a Wi-Fi network.
          </Typography>
        </SubTextWrapper>
      </TextWrapper>
    </Container>
  )
}
