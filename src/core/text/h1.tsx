import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const H1 = React.forwardRef<HTMLHeadingElement, TextProps>(function H1(
  { color = 'primary', variant, className, style, ...rest },
  ref
) {
  return (
    <h1
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('h1', variant),
        className
      )}
      style={style}
      {...rest}
    />
  )
})
