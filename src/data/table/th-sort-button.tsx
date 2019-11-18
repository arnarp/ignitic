import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import css from './table.css'
import { SortDirectionContext } from './th'

type Props = {} & React.ButtonHTMLAttributes<HTMLElement>

export const THSortButton = React.forwardRef<HTMLButtonElement, Props>(
  function THSortButton({ children, className, ...spreadDown }, ref) {
    const sortDirection = React.useContext(SortDirectionContext)
    return (
      <button
        ref={ref}
        {...spreadDown}
        className={cn(
          css.sortButton,
          {
            [css.sortDirectionAsc]: sortDirection == 'asc',
            [css.sortDirectionDesc]: sortDirection == 'desc'
          },
          className
        )}
      >
        {children}
        <SortArrowIcon />
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
