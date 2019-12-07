import * as React from 'react'
import css from './blanket.css'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'

type Props = {
  show: boolean
  onClick?: () => void
  className?: string
} & React.DOMAttributes<HTMLDivElement>

export const Blanket = React.forwardRef<HTMLDivElement, Props>(function Blanket(
  { show, onClick, className, ...rest },
  ref
) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="blanket"
          onClick={e => {
            e.stopPropagation()
            if (onClick) {
              onClick()
            }
          }}
          className={cn(css.blanket, className)}
          ref={ref}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
        />
      )}
    </AnimatePresence>
  )
})
