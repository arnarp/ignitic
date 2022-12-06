import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import * as css from './Table.module.css'
import { SortDirectionContext } from './TH'

type Props = { align: 'right' | 'left' } & StyleProps &
  React.ButtonHTMLAttributes<HTMLElement>

export const THSortButton = React.forwardRef<HTMLButtonElement, Props>(
  function THSortButton(props, ref) {
    const { children, className, align, ...rest } = extractStyleProps(props)
    const context = React.useContext(SortDirectionContext)
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          css.sortButton,
          {
            [css.sortDirectionAsc]: context.sortDirection == 'asc',
            [css.sortDirectionDesc]: context.sortDirection == 'desc',
          },
          styleClassValue(props, {
            w: '100p',
            color: 'inherit',
            borderA: 'none',
            background: 'transparent',
            direction: 'row',
            crossAxisAlignment: 'center',
            mainAxisAlignment: align == 'left' ? 'start' : 'end',
          }),
          className
        )}
      >
        {align == 'left' && children}
        <SortArrowIcon />
        {align == 'right' && children}
      </button>
    )
  }
)

function SortArrowIcon() {
  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation"
    >
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
    </svg>
  )
}
