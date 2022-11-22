import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { FontProps } from '.'
import { extractStyleProps, StyleProps, styleClassValue } from '../styles'

export const H6 = React.forwardRef<
  HTMLHeadingElement,
  StyleProps & FontProps & React.HTMLAttributes<HTMLHeadingElement>
>(function H6(props, ref) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <h6
      ref={ref}
      className={cn(
        styleClassValue(props, {
          color: 'neutral',
          fontVariant: 'h6',
        }),
        className
      )}
      {...rest}
    />
  )
})
