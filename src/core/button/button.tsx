import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './button.css'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'text' | 'filled' | 'outlined'
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'neutral'

type Props = {
  children: React.ReactNode
  onClick: () => void
  className?: string
  pressedDownEffect?: boolean
  size?: ButtonSize
  variant: ButtonVariant
  color?: ButtonColor
} & React.ButtonHTMLAttributes<HTMLElement>

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  function Button(
    {
      children,
      className,
      pressedDownEffect,
      disabled,
      size = 'medium',
      color = 'neutral',
      variant,
      ...rest
    },
    ref
  ) {
    return (
      <button
        {...rest}
        ref={ref}
        disabled={disabled}
        className={cn(
          css.button,
          {
            [css.sizeLarge]: size == 'large',
            [css.sizeSmall]: size == 'small',
            [css.variantText]: variant == 'text',
            [css.variantFilled]: variant == 'filled',
            [css.variantOutlined]: variant == 'outlined',
            [css.colorDefault]: color == 'default',
            [css.colorPrimary]: color == 'primary',
            [css.colorSecondary]: color == 'secondary',
            [css.colorNeutral]: color == 'neutral'
          },
          className
        )}
      >
        {children}
      </button>
    )
  }
)