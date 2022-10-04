import { cn } from 'itils/dist/misc/cn'
import React from 'react'

import * as css from './TextArea.module.css'

type Props = {
  state: 'unset' | 'valid' | 'invalid'
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  function TextArea({ children, className, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          css.textarea,
          {
            [css.valid]: rest.state === 'valid',
            [css.invalid]: rest.state === 'invalid',
          },
          className
        )}
        {...rest}
      >
        {children}
      </textarea>
    )
  }
)
