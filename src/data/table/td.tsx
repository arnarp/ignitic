import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import * as css from './Table.module.css'
import { TableCellProps } from './types'

type Props = TableCellProps &
  StyleProps &
  React.TdHTMLAttributes<HTMLTableCellElement>

export const TD = React.forwardRef<HTMLTableCellElement, Props>(function TD(
  props,
  ref
) {
  const { className, cellPadding, cellSize, overflow, ...rest } =
    extractStyleProps(props)

  return (
    <td
      {...rest}
      ref={ref}
      className={cn(
        css.tc,
        css.td,
        {
          [css.cellPaddingDense]: cellPadding == 'dense',
          [css.cellPaddingCheckbox]: cellPadding == 'checkbox',
          [css.cellPaddingNone]: cellPadding == 'none',
          [css.cellSizeSmall]: cellSize == 'small',
          [css.ellipsis]: overflow == 'ellipsis',
          [css.wrapEllipsis]: overflow == 'wrap-ellipsis',
        },
        styleClassValue(props),
        className
      )}
    />
  )
})
