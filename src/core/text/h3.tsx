import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import * as css from './text.module.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const H3 = React.forwardRef<HTMLHeadingElement, TextProps>(function H3(
  { color = 'neutral', variant, className, style, marginBottom, ...rest },
  ref
) {
  return (
    <h3
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('h3', variant),
        { [css.marginBottom]: marginBottom },

        className
      )}
      style={style}
      {...rest}
    />
  )
})
