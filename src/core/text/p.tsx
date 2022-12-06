import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { FontProps } from '.'
import { extractStyleProps, StyleProps, styleClassValue } from '../styles'

export const P = React.forwardRef<
  HTMLHeadingElement,
  StyleProps & FontProps & React.HTMLAttributes<HTMLParagraphElement>
>(function H1(props, ref) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <p
      ref={ref}
      className={cn(
        styleClassValue(props, {
          color: 'neutral',
          fontVariant: 'p',
        }),
        className
      )}
      {...rest}
    />
  )
})
