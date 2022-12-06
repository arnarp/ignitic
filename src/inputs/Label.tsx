import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../core'

import * as css from './Label.module.css'

type Props = {
  variant?: 'row' | 'col'
} & React.LabelHTMLAttributes<HTMLElement> &
  StyleProps

const row: StyleProps = {
  fontVariant: 'p',
  color: 'neutral',
  d: 'flex',
  direction: 'row',
  spacing: 'sm',
}
const col: StyleProps = {
  fontVariant: 'p',
  color: 'neutral',
  d: 'flex',
  direction: 'col',
  spacing: 'xs',
}
const variants = {
  row,
  col,
}

export function Label(props: Props) {
  const { className, variant, ...rest } = extractStyleProps(props)
  return (
    <label
      className={cn(
        css.label,
        styleClassValue(props, variant && variants[variant]),
        className
      )}
      {...rest}
    />
  )
}
