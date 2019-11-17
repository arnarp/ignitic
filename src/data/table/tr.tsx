import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import css from './table.css'

type Props = {
  hover?: boolean
} & React.HTMLAttributes<HTMLTableRowElement>

export const TR = React.forwardRef<HTMLTableRowElement, Props>(function TR(
  { children, className, hover, ...rest },
  ref
) {
  return (
    <tr
      {...rest}
      ref={ref}
      className={cn(
        css.tr,
        {
          [css.hover]: hover
        },
        className
      )}
    >
      {children}
    </tr>
  )
})
