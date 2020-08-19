import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './text-area.css'

type Props = {} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export function TextArea({ children, className, ...rest }: Props) {
  return (
    <textarea className={cn(css.textarea, className)} {...rest}>
      {children}
    </textarea>
  )
}
