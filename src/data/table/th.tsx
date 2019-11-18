import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import css from './table.css'
import { SortDirection, TableCellProps } from './types'

type Props = {
  sortDirection?: SortDirection
} & TableCellProps &
  React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >

export const SortDirectionContext = React.createContext<Props['sortDirection']>(
  undefined
)

export const TH = React.forwardRef<HTMLTableHeaderCellElement, Props>(
  function TH(
    {
      children,
      className,
      cellPadding = 'normal',
      cellSize = 'normal',
      align = 'left',
      sortDirection,
      ...rest
    },
    ref
  ) {
    return (
      <th
        aria-sort={
          sortDirection
            ? sortDirection == 'asc'
              ? 'ascending'
              : 'descending'
            : 'none'
        }
        {...rest}
        ref={ref}
        className={cn(
          css.tc,
          css.th,
          {
            [css.cellPaddingDense]: cellPadding == 'dense',
            [css.cellPaddingCheckbox]: cellPadding == 'checkbox',
            [css.cellPaddingNone]: cellPadding == 'none',
            [css.cellSizeSmall]: cellSize == 'small',
            [css.alignCenter]: align == 'center',
            [css.alignRight]: align == 'right',
            [css.alignJustify]: align == 'justify'
          },
          className
        )}
      >
        <SortDirectionContext.Provider value={sortDirection}>
          {children}
        </SortDirectionContext.Provider>
      </th>
    )
  }
)
