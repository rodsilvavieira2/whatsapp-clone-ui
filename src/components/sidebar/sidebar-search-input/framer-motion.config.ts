import { Variants } from 'framer-motion'

export const searchIconVariants: Variants = {
  initial: {
    rotate: 60,
    opacity: 0.5
  },
  animate: {
    rotate: 0,
    opacity: 1
  },
  exit: {
    transition: {
      opacity: {
        duration: 0
      }
    },
    rotate: 60,
    opacity: 0
  }
}

export const arrowBackVariants: Variants = {
  initial: {
    rotate: -60
  },
  animate: {
    rotate: 0,
    opacity: 1
  },
  exit: {
    rotate: -60,
    opacity: 0
  }
}
