import { MotionProps } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { Surface } from '../surface'
import css from './paper.css'

type Props = {
  children: React.ReactNode
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>

export function Paper({ children, className, ...rest }: Props) {
  return (
    <Surface {...rest} color="paper" rounded className={cn(css.p, className)}>
      {children}
    </Surface>
  )
}
