import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import { DlContext } from './DlContext'

type Props = React.HTMLAttributes<HTMLElement> & StyleProps

export function Dd(props: Props) {
  const { className, ...rest } = extractStyleProps(props)

  const context = React.useContext(DlContext)

  return (
    <dd
      className={cn(
        styleClassValue(props, {
          color: context.ddColor,
          fontVariant: 'p',
          mA: 'o',
          pA: 'o',
          textAlign:
            context.variant == 'grid' && context.align == 'centered'
              ? 'left'
              : undefined,
        }),
        className
      )}
      {...rest}
    />
  )
}
