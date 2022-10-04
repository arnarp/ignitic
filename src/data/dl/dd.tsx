import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { getColorClass, TextColor } from '../../core/text'
import * as css from './dl.module.css'
import { DlContext } from './DlContext'

type Props = {
  children: React.ReactNode
  color?: TextColor
  numeric?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function Dd({ children, className, color, numeric, ...rest }: Props) {
  const context = React.useContext(DlContext)

  return (
    <dd
      className={cn(
        css.dd,
        getColorClass(color || context.ddColor || 'neutral'),
        {
          [css.numeric]: numeric,
        },
        className
      )}
      {...rest}
    >
      {children}
    </dd>
  )
}
