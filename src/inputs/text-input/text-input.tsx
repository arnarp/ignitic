import * as React from 'react'
import { cn } from 'itils/dist/misc/cn'
import css from './text-input.css'

type Props = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
  function Textinput({ className, ...rest }, ref) {
    return (
      <input
        type="text"
        ref={ref}
        className={cn(css.input, className)}
        {...rest}
      />
    )
  }
)
