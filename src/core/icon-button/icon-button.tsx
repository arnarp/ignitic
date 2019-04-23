import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './icon-button.css'

export type ButtonFontSize = 'small' | 'medium' | 'large'

type Props = {
  children: React.ReactNode
  'aria-label': string
  className?: string
  pressedDownEffect?: boolean
  fontSize?: ButtonFontSize
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
          css.btn,
          {
            [css.large]: fontSize == 'large',
            [css.small]: fontSize == 'small'
          },
          className
        )}
      >
        {children}
      </button>
    )
  }
)
