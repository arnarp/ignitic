import { AnimatePresence, MotionProps } from 'framer-motion'
import { cn } from 'itils'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import { TabsContext } from './TabsContext'

type Props = {
  children: React.ReactNode
} & StyleProps &
  MotionProps &
  React.HTMLAttributes<HTMLDivElement>

export function TabPanelContainer(props: Props) {
  const { children, className, ...rest } = extractStyleProps(props)
  return (
    <div {...rest} className={cn(styleClassValue(props), className)}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {children}
      </AnimatePresence>
    </div>
  )
}
