import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import * as css from './Table.module.css'
import { CellPadding, CellSize } from './types'

type Props = {
  cellPadding?: CellPadding
  cellSize?: CellSize
  layout?: 'auto' | 'fixed'
} & React.TableHTMLAttributes<HTMLElement>

export const Table = React.forwardRef<HTMLTableElement, Props>(function Table(
  {
    children,
    className,
    cellPadding = 'normal',
    cellSize = 'normal',
    layout,
    ...rest
  },
  ref
) {
  return (
    <table
      {...rest}
      ref={ref}
      className={cn(
        css.table,
        {
          [css.cellPaddingDense]: cellPadding == 'dense',
          [css.cellSizeSmall]: cellSize == 'small',
          [css.layoutFixed]: layout == 'fixed',
        },
        className
      )}
    >
      {children}
    </table>
  )
})
