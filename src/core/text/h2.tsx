import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { getColorClass, getVariantClass, TextProps } from '.'
import * as css from './text.module.css'

export const H2 = React.forwardRef<HTMLHeadingElement, TextProps>(function H2(
  { color = 'neutral', variant, className, style, marginBottom, ...rest },
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
