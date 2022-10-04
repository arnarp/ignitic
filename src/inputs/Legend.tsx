import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import * as css from './Legend.module.css'

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLLegendElement>,
  HTMLLegendElement
>

export function Legend({ children, className, ...rest }: Props) {
  return (
    <legend className={cn(css.legend, className)} {...rest}>
      {children}
    </legend>
  )
}
