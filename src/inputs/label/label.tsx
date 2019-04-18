import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './label.css'

type Props = {
  children?: React.ReactNode
  className?: string
} & React.LabelHTMLAttributes<HTMLElement>

export function Label({ children, className, ...rest }: Props) {
  return (
    <label className={cn(css.label, className)} {...rest}>
      {children}
    </label>
  )
}
