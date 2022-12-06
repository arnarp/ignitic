import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { FontProps } from '.'
import { extractStyleProps, StyleProps, styleClassValue } from '../styles'

export const Span = React.forwardRef<
  HTMLHeadingElement,
  StyleProps & FontProps & React.HTMLAttributes<HTMLSpanElement>
>(function H1(props, ref) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <span
      ref={ref}
      className={cn(
        styleClassValue(props, {
          color: 'inherit',
          fontVariant: 'inherit',
        }),
        className
      )}
      {...rest}
    />
  )
})
