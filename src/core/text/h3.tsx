import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const H3 = React.forwardRef<HTMLHeadingElement, TextProps>(function H3(
  { color = 'primary', variant, className, style, ...rest },
  ref
) {
  return (
    <h3
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('h3', variant),
        className
      )}
      style={style}
      {...rest}
    />
  )
})
