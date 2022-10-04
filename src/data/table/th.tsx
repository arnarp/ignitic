import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import * as css from './Table.module.css'
import { SortDirection, TableCellProps } from './types'
import { getColorClass } from '../../core/text'

type Props = {
  sortDirection?: SortDirection
} & TableCellProps &
  React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >

export const SortDirectionContext = React.createContext<{
  sortDirection: Props['sortDirection']
  align: Props['align']
}>({ sortDirection: undefined, align: undefined })

export const TH = React.forwardRef<HTMLTableHeaderCellElement, Props>(
  function TH(
    {
      children,
      className,
      cellPadding = 'normal',
      cellSize = 'normal',
      align = 'left',
      color = 'neutral',
      sortDirection,
      overflow,
      numeric,
      ...rest
    },
    ref
  ) {
    const providerValue = React.useMemo(() => {
      return {
        sortDirection,
        align,
      }
    }, [sortDirection, align])
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
          getColorClass(color),
          {
            [css.cellPaddingDense]: cellPadding == 'dense',
            [css.cellPaddingCheckbox]: cellPadding == 'checkbox',
            [css.cellPaddingNone]: cellPadding == 'none',
            [css.cellSizeSmall]: cellSize == 'small',
            [css.alignCenter]: align == 'center',
            [css.alignRight]: align == 'right',
            [css.alignJustify]: align == 'justify',
            [css.ellipsis]: overflow == 'ellipsis',
            [css.wrapEllipsis]: overflow == 'wrap-ellipsis',
            [css.numeric]: numeric,
          },
          className
        )}
      >
        <SortDirectionContext.Provider value={providerValue}>
          {children}
        </SortDirectionContext.Provider>
      </th>
    )
  }
)
