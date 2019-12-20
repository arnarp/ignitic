import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './fieldset.css'

type Props = {} & React.DetailedHTMLProps<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
>

export function FieldSet({ children, className, ...rest }: Props) {
  return (
    <fieldset className={cn(css.fieldset, className)} {...rest}>
      {children}
    </fieldset>
  )
}
