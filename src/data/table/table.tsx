import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import * as css from './Table.module.css'
import { CellPadding, CellSize } from './types'

type Props = {
  cellPadding?: CellPadding
  cellSize?: CellSize
  layout?: 'auto' | 'fixed'
} & StyleProps &
  React.TableHTMLAttributes<HTMLElement>

export const Table = React.forwardRef<HTMLTableElement, Props>(function Table(
  props,
  ref
) {
  const {
    className,
    cellPadding = 'normal',
    cellSize = 'normal',
    layout,
    ...rest
  } = extractStyleProps(props)
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
        styleClassValue(props, { w: '100p' }),
        className
      )}
    />
  )
})
