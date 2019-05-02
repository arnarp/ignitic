import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text.css'
import { TextProps, getColorClass, getVariantClass } from '.'

export const Span = React.forwardRef<HTMLHeadingElement, TextProps>(
  function Span(
    { color = 'neutral', variant, className, style, marginBottom, ...rest },
    ref
  ) {
    return (
      <span
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
  }
)
