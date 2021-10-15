import { motion } from 'framer-motion'

import { styled } from '@mui/material/styles'

export const Container = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  position: 'absolute',
  backgroundColor: theme.secondary,
  color: theme.text.primary,
  inset: 0
}))
