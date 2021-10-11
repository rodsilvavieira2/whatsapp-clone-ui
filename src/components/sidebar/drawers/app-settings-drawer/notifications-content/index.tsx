import { Box, Typography } from '@mui/material'

import { CustomCheckBox } from '../../../..'
import { Container, getSecondaryContentAnimation, Header } from '../../shared'
import { ConfigsWrapper } from './styles'

type NotificationsContentProps = {
  onRequestBack: () => void
}

export const NotificationsContent = ({
  onRequestBack
}: NotificationsContentProps): JSX.Element => {
  return (
    <Container {...getSecondaryContentAnimation()}>
      <Header onRequestBack={onRequestBack} textLabel="Notifications" />
      <ConfigsWrapper>
        <label htmlFor="enable-songs">
          <CustomCheckBox id="enable-songs" />

          <Typography>Songs</Typography>
        </label>

        <label htmlFor="enable-notifications">
          <CustomCheckBox id="enable-notifications" />

          <Typography>Desktop Notifications</Typography>
        </label>

        <label htmlFor="show-review">
          <CustomCheckBox id="show-preview" />

          <Box
            sx={{
              p: {
                marginTop: '0.5rem'
              }
            }}
          >
            <Typography>Show preview</Typography>

            <Typography component="small">
              Show Desktop notifications
            </Typography>
          </Box>
        </label>

        <label htmlFor="disable-notifications">
          <CustomCheckBox id="disable-notifications" />

          <Typography>Disable desktop notifications</Typography>
        </label>
      </ConfigsWrapper>
    </Container>
  )
}
