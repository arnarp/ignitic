import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { BaseComponentProps } from '../../types/base-component-props'
import css from './text.css'

export type TextColor = 'primary'
export type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
export type Variant = TextElement | 'p.lead' | 'p.small'

export type TextProps = {
  children: React.ReactNode
  variant?: Variant
  color?: TextColor
  marginBottom?: boolean
} & BaseComponentProps

export function getColorClass(color: TextColor) {
  switch (color) {
    case 'primary':
    default:
      return css.colorPrimary
  }
}

export function getVariantClass(as: TextElement, variant?: Variant) {
  switch (variant || as) {
    case 'h1':
      return css.h1
    case 'h2':
      return css.h2
    case 'h3':
      return css.h3
    case 'h4':
      return css.h4
    case 'h5':
      return css.h5
    case 'h6':
      return css.h6
    case 'p.lead':
      return cn(css.p, css.lead)
    case 'p.small':
      return cn(css.p, css.small)
    case 'p':
    case 'span':
    default:
      return css.p
  }
}
