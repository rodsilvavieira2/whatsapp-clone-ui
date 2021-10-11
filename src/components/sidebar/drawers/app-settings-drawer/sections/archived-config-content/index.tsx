import { Box, Typography } from '@mui/material'

import { CustomCheckBox } from '../../../../..'
import { Header, getSecondaryContentAnimation, Container } from '../../../shared'
import { ConfigWrapper } from './styles'

type ArchivedConfigContentProps = {
  onRequestBack: () => void
}

export const ArchivedConfigContent = ({
  onRequestBack
}: ArchivedConfigContentProps): JSX.Element => {
  return (
    <Container {...getSecondaryContentAnimation()}>
      <Header
        onRequestBack={onRequestBack}
        textLabel="
          Archive settings"
      />
      <ConfigWrapper>
        <label htmlFor="keep-archived">
          <CustomCheckBox id="keep-archived" />

          <Box
            sx={{
              lineHeight: '1.25rem',
              marginLeft: '0.5rem',
              '> *': {
                fontSize: '0.875rem'
              }
            }}
          >
            <Typography>Keep conversations archived</Typography>

            <Typography className="sub-text">
              Conversations will remain archived when you receive new messages.
            </Typography>
          </Box>
        </label>
      </ConfigWrapper>
    </Container>
  )
}
