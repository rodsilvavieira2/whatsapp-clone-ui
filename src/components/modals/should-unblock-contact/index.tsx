import { Typography } from '@mui/material'

import { useUserActions } from '../../../hooks'
import {
  CancelButton,
  CustomModal,
  DefaultPropsModal,
  OkayButton
} from '../shared'
import { ButtonWrapper } from '../shared'
import { UnblockContent } from './styles'

export const ShouldUnblockContactModal = ({
  isOpen,
  onRequestClose
}: DefaultPropsModal): JSX.Element => {
  const { currentLoadedContactBlocked } = useUserActions()

  return (
    <CustomModal open={isOpen}>
      <UnblockContent>
        <Typography component="h1">
          Unblock {currentLoadedContactBlocked?.contactName} ?
        </Typography>

        <ButtonWrapper>
          <CancelButton
            sx={{
              marginLeft: 'auto',
              marginRight: '0.5rem'
            }}
            variant="outlined"
            onClick={onRequestClose}
          >
            Cancel
          </CancelButton>

          <OkayButton onClick={onRequestClose}>Unblock</OkayButton>
        </ButtonWrapper>
      </UnblockContent>
    </CustomModal>
  )
}
