import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const H1 = React.forwardRef<HTMLHeadingElement, TextProps>(function H1(
  { color = 'default', variant, className, style, marginBottom, ...rest },
  ref
) {
  return (
    <h1
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('h1', variant),
        { [css.marginBottom]: marginBottom },
        className
      )}
      style={style}
      {...rest}
    />
  )
})
