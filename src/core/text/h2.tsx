import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const H2 = React.forwardRef<HTMLHeadingElement, TextProps>(function H2(
  { color = 'primary', variant, className, style, marginBottom, ...rest },
  ref
) {
  return (
    <h2
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('h2', variant),
        { [css.marginBottom]: marginBottom },

        className
      )}
      style={style}
      {...rest}
    />
  )
})
