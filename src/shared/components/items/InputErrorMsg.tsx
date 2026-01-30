import { AnimatePresence, motion } from 'framer-motion'
import { errorMsgAnimate } from '@/shared/enum/animate'
import { cn } from '@/lib/utils'

export const InputErrorMsg = ({ error, className }: { error?: string | boolean; className?: string }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {!!error && typeof error === 'string' && (
          <motion.div key={'errorMsg'} {...errorMsgAnimate} className={cn('caption12 text-etc-red mt-1 leading-[16px] whitespace-pre-line', className)}>
            * {error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

InputErrorMsg.displayName = 'InputErrorMsg'
