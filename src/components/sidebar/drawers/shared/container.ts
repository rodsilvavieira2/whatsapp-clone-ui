import { motion } from 'framer-motion'

import { styled } from '@mui/material/styles'

export const Container = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  position: 'absolute',
  inset: 0
})
