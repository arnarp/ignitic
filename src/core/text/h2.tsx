import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { FontProps } from '.'
import { extractStyleProps, StyleProps, styleClassValue } from '../styles'

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  StyleProps & FontProps & React.HTMLAttributes<HTMLHeadingElement>
>(function H2(props, ref) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <h2
      ref={ref}
      className={cn(
        styleClassValue(props, {
          color: 'neutral',
          fontVariant: 'h2',
        }),
        className
      )}
      {...rest}
    />
  )
})
