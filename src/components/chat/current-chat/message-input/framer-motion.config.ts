import { Variants } from 'framer-motion'

export const containerVariants: Variants = {
  initial: {
    opacity: 0.5
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05
    },
    opacity: 0.5
  }
}

export const childrenVariants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.5
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1
  },
  exit: {
    y: 60,
    scale: 0.5,
    opacity: 0
  }
}
