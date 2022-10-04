import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../core'

import * as css from './Label.module.css'

type Props = {
  children?: React.ReactNode
  className?: string
  direction: 'col' | 'row'
} & React.LabelHTMLAttributes<HTMLElement> &
  Omit<StyleProps, 'display'>

export function Label(props: Props) {
  const { className, direction, ...rest } = extractStyleProps(props)
  return (
    <label
      className={cn(
        css.label,
        {
          [css.row]: direction == 'row',
          [css.col]: direction == 'col',
        },
        styleClassValue(props),
        className
      )}
      {...rest}
    />
  )
}
