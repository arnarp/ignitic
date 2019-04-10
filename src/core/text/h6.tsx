import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const H6 = React.forwardRef<HTMLHeadingElement, TextProps>(function H6(
  { color = 'primary', variant, className, style, ...rest },
  ref
) {
  return (
    <h6
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('h6', variant),
        className
      )}
      style={style}
      {...rest}
    />
  )
})
