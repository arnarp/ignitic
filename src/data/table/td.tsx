import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import css from './table.css'
import { TableCellProps } from './types'
import { getColorClass } from '../../core/text'

type Props = TableCellProps &
  React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >

export const TD = React.forwardRef<HTMLTableDataCellElement, Props>(function TD(
  {
    children,
    className,
    cellPadding = 'normal',
    cellSize = 'normal',
    align = 'left',
    color = 'neutral',
    overflow,
    numeric,
    ...rest
  },
  ref
) {
  return (
    <td
      {...rest}
      ref={ref}
      className={cn(
        css.tc,
        css.td,
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
          [css.numeric]: numeric
        },
        className
      )}
    >
      {children}
    </td>
  )
})
