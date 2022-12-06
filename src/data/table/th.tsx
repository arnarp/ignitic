import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import * as css from './Table.module.css'
import { SortDirection, TableCellProps } from './types'

type Props = {
  sortDirection?: SortDirection
} & TableCellProps &
  StyleProps &
  Omit<React.TdHTMLAttributes<HTMLTableCellElement>, 'align'>

export const SortDirectionContext = React.createContext<{
  sortDirection: Props['sortDirection']
}>({ sortDirection: undefined })

export const TH = React.forwardRef<HTMLTableCellElement, Props>(function TH(
  props,
  ref
) {
  const {
    children,
    className,
    cellPadding = 'normal',
    cellSize = 'normal',
    sortDirection,
    overflow,
    ...rest
  } = extractStyleProps(props)

  const providerValue = React.useMemo(() => {
    return {
      sortDirection,
    }
  }, [sortDirection])
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
          [css.ellipsis]: overflow == 'ellipsis',
          [css.wrapEllipsis]: overflow == 'wrap-ellipsis',
        },
        styleClassValue(props, { textAlign: 'left' }),
        className
      )}
    >
      <SortDirectionContext.Provider value={providerValue}>
        {children}
      </SortDirectionContext.Provider>
    </th>
  )
})
