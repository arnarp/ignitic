import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './icon-button.css'

export type ButtonFontSize = 'small' | 'medium' | 'large'

type Props = {
  children: React.ReactNode
  onClick: () => void
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
