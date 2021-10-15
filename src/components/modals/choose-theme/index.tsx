import { useState } from 'react'

import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography
} from '@mui/material'

import { CustomRadio } from '../..'
import { useUserActions } from '../../../hooks'
import {
  CancelButton,
  CustomModal,
  DefaultPropsModal,
  OkayButton,
  Content,
  ButtonWrapper
} from '../shared'

export const ChooseThemeModal = ({
  isOpen,
  onRequestClose
}: DefaultPropsModal): JSX.Element => {
  const {
    state: { currentTheme },
    dispatch
  } = useUserActions()
  const [theme, setTheme] = useState(currentTheme)

  const onRequestSaveChoose = () => {
    onRequestClose()
    dispatch({
      type: 'set-user-theme',
      payload: theme
    })
  }

  return (
    <CustomModal open={isOpen}>
      <Content>
        <Typography component="h1" fontSize="1.23rem">
          Choose an theme
        </Typography>

        <FormControl component="div">
          <RadioGroup
            aria-label="chose a theme"
            defaultValue={currentTheme}
            name="theme"
            onChange={(event) => setTheme(event.currentTarget.value as any)}
          >
            <FormControlLabel
              value="light"
              control={<CustomRadio />}
              label=" light"
            />

            <FormControlLabel
              value="dark"
              control={<CustomRadio />}
              label="Dark"
            />

            <FormControlLabel
              value="system"
              control={<CustomRadio />}
              label="Automatic (system)"
            />
          </RadioGroup>
        </FormControl>

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

          <OkayButton onClick={onRequestSaveChoose}>Ok</OkayButton>
        </ButtonWrapper>
      </Content>
    </CustomModal>
  )
}
