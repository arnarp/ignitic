import { AnimatePresence, MotionProps } from 'framer-motion'
import * as React from 'react'
import { Surface } from '../../surfaces/surface'

type Props = {
  children: React.ReactNode
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>

export function TabPanelContainer({ children, className, id, ...rest }: Props) {
  return (
    <Surface {...rest} padding="md" rounded color="neutral">
      <AnimatePresence exitBeforeEnter initial={false}>
        {children}
      </AnimatePresence>
    </Surface>
  )
}
