import { MotionProps, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import React from 'react'

type Props = {
  children: React.ReactNode
  id: string
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>

export function TabPanel({ children, className, id, ...rest }: Props) {
  return (
    <motion.div
      {...rest}
      className={cn(className)}
      role="tabpanel"
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      // initial={false}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
