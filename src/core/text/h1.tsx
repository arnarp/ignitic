import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { FontProps } from '.'
import { extractStyleProps, StyleProps, styleClassValue } from '../styles'

export const H1 = React.forwardRef<
  HTMLHeadingElement,
  StyleProps & FontProps & React.HTMLAttributes<HTMLHeadingElement>
>(function H1(props, ref) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <h1
      ref={ref}
      className={cn(
        styleClassValue(props, {
          color: 'neutral',
          fontVariant: 'h1',
        }),
        className
      )}
      {...rest}
    />
  )
})
