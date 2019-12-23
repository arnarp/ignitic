import { TextColor } from '../../core/text'

export type CellPadding = 'none' | 'checkbox' | 'dense' | 'normal'
export type CellSize = 'small' | 'normal'

export type TableCellProps = {
  cellPadding?: CellPadding
  cellSize?: CellSize
  overflow?: 'wrap-ellipsis' | 'ellipsis'
  numeric?: boolean
  color?: TextColor
}

export type SortDirection = false | 'desc' | 'asc'
