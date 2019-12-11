import { MotionProps, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

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
    >
      {children}
    </motion.div>
  )
}
