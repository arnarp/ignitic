import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './icon-button.css'

export type ButtonFontSize = 'small' | 'medium' | 'large'
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'neutral'

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
