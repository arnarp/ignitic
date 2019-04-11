import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const P = React.forwardRef<HTMLHeadingElement, TextProps>(function H6(
  { color = 'primary', variant, className, style, marginBottom, ...rest },
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
