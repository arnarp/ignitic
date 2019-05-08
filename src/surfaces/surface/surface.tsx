import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { BaseComponentProps } from '../../types/base-component-props'
import css from './surface.css'

type Props = {
  children: React.ReactNode
  color: 'paper' | 'neutral' | 'default' | 'primary' | 'secondary'
} & BaseComponentProps &
  React.DOMAttributes<HTMLDivElement>

export function Surface({ children, className, color, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={cn(
        {
          [css.paperColor]: color == 'paper',
          [css.neutralColor]: color == 'neutral',
          [css.defaultColor]: color == 'default',
          [css.primaryColor]: color == 'primary',
          [css.secondaryColor]: color == 'secondary'
        },
        className
      )}
    >
      {children}
    </div>
  )
}
