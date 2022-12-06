import React from 'react'
import { cn } from 'itils/dist/misc/cn'
import * as css from './TextInput.module.css'

type Props = {
  type: 'email' | 'text' | 'search' | 'tel'
  state: 'unset' | 'valid' | 'invalid'
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'type'
>
export const TextInput = React.forwardRef<HTMLInputElement, Props>(
  function Textinput({ className, ...rest }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          css.input,
          {
            [css.valid]: rest.state === 'valid',
            [css.invalid]: rest.state === 'invalid',
          },
          className
        )}
        {...rest}
      />
    )
  }
)
