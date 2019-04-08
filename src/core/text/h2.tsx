import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { Omit } from '../../types/omit'
import css from './text.css'
import { TextProps, defaultProps, getColorClass, getVariantClass } from '.'

export const H2 = React.forwardRef<HTMLHeadingElement, Omit<TextProps, 'as'>>(
  ({ color = 'primary', variant, className, ...rest }, ref) => {
    console.log('H2 render', { color, variant, className, ...rest })
    return (
      <h2
        ref={ref}
        className={cn(
          css.text,
          getColorClass(color),
          getVariantClass('h2', variant),
          className
        )}
        {...rest}
      />
    )
  }
)
