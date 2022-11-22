import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import { DlContext } from './DlContext'
import * as css from './Dl.module.css'

type Props = React.HTMLAttributes<HTMLElement> & StyleProps

export function Dt(props: Props) {
  const { className, ...rest } = extractStyleProps(props)

  const context = React.useContext(DlContext)

  return (
    <dt
      className={cn(
        css.dt,
        styleClassValue(props, {
          color: context.ddColor,
          fontVariant: 'p',
          fontWeight: 'medium',
          mA: 'o',
          pA: 'o',
          textAlign:
            context.variant == 'grid' && context.align == 'centered'
              ? 'right'
              : undefined,
          pR:
            context.variant == 'grid' && context.align == 'centered'
              ? 'md'
              : undefined,
        }),
        className
      )}
      {...rest}
    />
  )
}
