import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { FontProps } from '.'
import { extractStyleProps, StyleProps, styleClassValue } from '../styles'

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  StyleProps & FontProps & React.HTMLAttributes<HTMLHeadingElement>
>(function H3(props, ref) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <h3
      ref={ref}
      className={cn(
        styleClassValue(props, {
          color: 'neutral',
          fontVariant: 'h3',
        }),
        className
      )}
      {...rest}
    />
  )
})
