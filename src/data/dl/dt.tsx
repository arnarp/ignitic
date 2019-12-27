import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { getColorClass, TextColor } from '../../core/text'
import css from './dl.css'
import { DlContext } from './dl-context'

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
