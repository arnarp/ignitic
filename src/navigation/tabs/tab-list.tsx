import * as React from 'react'
import { cn } from 'itils/dist/misc/cn'
import * as css from './tabs.css'

type Props = {
  children: React.ReactNode
  label:
    | { type: 'visible'; labelledby: string }
    | { type: 'hidden'; label: string }
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const TabList = React.forwardRef<HTMLDivElement, Props>(function TabList(
  { children, className, label, ...rest },
  ref
) {
  const ariaLabel: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > =
    label.type == 'hidden'
      ? {
          'aria-label': label.label
        }
      : {
          'aria-labelledby': label.labelledby
        }
  return (
    <div
      {...rest}
      {...ariaLabel}
      ref={ref}
      className={cn(css.tabList, className)}
      role="tablist"
    >
      {children}
    </div>
  )
})
