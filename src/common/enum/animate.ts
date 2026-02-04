import { easeInOut } from 'motion/react'

export const opacityAnimate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: easeInOut },
}

export const errorMsgAnimate = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.2, ease: easeInOut },
}

export const toastAnimate = {
  initial: { opacity: 0, x: '100%', scale: 0.4 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: '100%', scale: 0.9 },
  transition: { duration: 0.3, ease: easeInOut },
}

export const insuranceChildCategoryContentAnimate = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.4, ease: easeInOut },
}

export const toolTipAnimate = {
  initial: { opacity: 0, y: 10, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.9 },
  transition: { duration: 0.2, ease: easeInOut },
}

export const customModalAnimate = {
  initial: { opacity: 0, y: '30%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '30%' },
  transition: { duration: 0.3, ease: easeInOut },
}

export const infiniteDataTableObserverAnimate = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: '50px' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.2, ease: easeInOut },
}
