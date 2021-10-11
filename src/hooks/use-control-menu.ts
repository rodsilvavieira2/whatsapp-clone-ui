import { useState } from 'react'

type UseControlMenuReturn = {
  handleMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleMenuClose: () => void
  isOpen: boolean
  anchorEl: HTMLElement | null
}

type USeControlMenusProps = {
  onClose?: () => void
}

type Rodrigo = {
  rodrigo: 'rodrigo',
  lara: 'rodrigo'
}

export const useControlMenu = ({
  onClose
}: USeControlMenusProps): UseControlMenuReturn => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isOpen = Boolean(anchorEl)

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    onClose?.()
    setAnchorEl(null)
  }

  return {
    handleMenuClick,
    handleMenuClose,
    isOpen,
    anchorEl
  }
}
