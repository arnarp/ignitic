import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import * as css from './text.module.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const P = React.forwardRef<HTMLHeadingElement, TextProps>(function P(
  { color = 'neutral', variant, className, style, marginBottom, ...rest },
  ref
) {
  return (
    <p
      ref={ref}
      className={cn(
        css.text,
        getColorClass(color),
        getVariantClass('p', variant),
        { [css.marginBottom]: marginBottom },
        className
      )}
      style={style}
      {...rest}
    />
  )
})
