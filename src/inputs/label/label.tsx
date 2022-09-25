import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './label.css'

type Props = {
  children?: React.ReactNode
  className?: string
  /**
   * Default is 'row'
   */
  direction?: 'col' | 'row'
} & React.LabelHTMLAttributes<HTMLElement>

export function Label({
  children,
  className,
  direction = 'row',
  ...rest
}: Props) {
  return (
    <label
      className={cn(
        css.label,
        {
          [css.col]: direction == 'col',
        },
        className
      )}
      {...rest}
    >
      {children}
    </label>
  )
}
