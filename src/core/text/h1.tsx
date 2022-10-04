import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { getColorClass, getVariantClass, TextProps } from '.'
import * as css from './text.module.css'

export const H1 = React.forwardRef<HTMLHeadingElement, TextProps>(function H1(
  { color = 'neutral', variant, className, style, marginBottom, ...rest },
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
