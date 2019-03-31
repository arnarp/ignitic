import * as React from 'react'

import { BaseComponentProps } from '../../types/base-component-props'
import { cn } from '../../utils/cn'
import css from './text.css'

export type TextColor = 'primary'
export type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h6' | 'p' | 'span'

export type TextProps = {
  children: React.ReactNode
  as: TextElement
  variant?: TextElement
  color?: TextColor
} & BaseComponentProps

// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ))

export const defaultProps: Pick<TextProps, 'color'> = {
  color: 'primary'
}

export function Text({
  as,
  children,
  color = 'primary',
  variant,
  className,
  ...rest
}: TextProps) {
  return React.createElement(
    as,
    {
      className: cn(
        css.text,
        getColorClass(color),
        getVariantClass(as, variant),
        className
      ),
      ...rest
    },
    children
  )
}

Text.defaultProps = defaultProps

export function getColorClass(color: TextColor) {
  switch (color) {
    case 'primary':
    default:
      return css.colorPrimary
  }
}

export function getVariantClass(as: TextElement, variant?: TextElement) {
  switch (variant || as) {
    case 'h1':
      return css.h1
    case 'h2':
      return css.h2
    case 'h3':
      return css.h3
    case 'h4':
      return css.h4
    case 'p':
    default:
      return css.p
  }
}
