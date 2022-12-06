import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { ButtonColor } from './Button'
import * as css from './IconButton.module.css'

export type ButtonFontSize = 'small' | 'medium' | 'large'

type Props = {
  children: React.ReactNode
  'aria-label': string
  className?: string
  pressedDownEffect?: boolean
  fontSize?: ButtonFontSize
  color?: ButtonColor
} & React.ButtonHTMLAttributes<HTMLElement>

export const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  function IconButton(
    {
      children,
      className,
      pressedDownEffect,
      disabled,
      type = 'button',
      fontSize = 'medium',
      color = 'neutral',
      ...rest
    },
    ref
  ) {
    return (
      <button
        {...rest}
        ref={ref}
        disabled={disabled}
        type={type}
        className={cn(
          css.button,
          {
            [css.sizeLarge]: fontSize == 'large',
            [css.sizeSmall]: fontSize == 'small',
            [css.colorDefault]: color == 'default',
            [css.colorPrimary]: color == 'primary',
            [css.colorSecondary]: color == 'secondary',
            [css.colorNeutral]: color == 'neutral',
          },
          className
        )}
      >
        {children}
      </button>
    )
  }
)
