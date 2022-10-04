import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'

type Props = {
  children: React.ReactNode
  label:
    | { type: 'visible'; labelledby: string }
    | { type: 'hidden'; label: string }
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  StyleProps

export const TabList = React.forwardRef<HTMLDivElement, Props>(function TabList(
  props,
  ref
) {
  const { children, className, label, ...rest } = extractStyleProps(props)
  const ariaLabel: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > =
    label.type == 'hidden'
      ? {
          'aria-label': label.label,
        }
      : {
          'aria-labelledby': label.labelledby,
        }
  return (
    <div
      {...rest}
      {...ariaLabel}
      ref={ref}
      className={cn(styleClassValue(props), className)}
      role="tablist"
    >
      {children}
    </div>
  )
})
