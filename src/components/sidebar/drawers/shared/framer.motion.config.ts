import { Transition, Variants } from 'framer-motion'

type FramerMotionConfigReturn = {
  initial: string
  animate: string
  exit: string
  variants: Variants
  transition: Transition
}

const common = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  transition: {
    duration: 0.4
  }
}

export const getPrimaryContentAnimation = (): FramerMotionConfigReturn => {
  return {
    variants: {
      initial: {
        x: '-100%'
      },
      animate: {
        x: '0%'
      },
      exit: {
        x: '-100%'
      }
    },
    ...common
  }
}

export const getSecondaryContentAnimation = (): FramerMotionConfigReturn => {
  return {
    variants: {
      initial: {
        x: '100%'
      },
      animate: {
        x: '0%'
      },
      exit: {
        x: '100%'
      }
    },
    ...common
  }
}
