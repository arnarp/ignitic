import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const H4 = React.forwardRef<HTMLHeadingElement, TextProps>(function H4(
  { color = 'primary', variant, className, style, ...rest },
  ref
) {
  return (
    <h4
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('h4', variant),
        className
      )}
      style={style}
      {...rest}
    />
  )
})
