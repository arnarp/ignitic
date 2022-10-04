import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { getColorClass, TextColor } from '../../core/text'
import * as css from './Dl.module.css'
import { DlContext } from './DlContext'

type Props = {
  children: React.ReactNode
  color?: TextColor
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function Dt({ children, className, color, ...rest }: Props) {
  const context = React.useContext(DlContext)
  return (
    <dt
      className={cn(
        css.dt,
        getColorClass(color || context.dtColor || 'neutral'),
        className
      )}
      {...rest}
    >
      {children}
    </dt>
  )
}
