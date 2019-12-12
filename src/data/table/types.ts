export type CellPadding = 'none' | 'checkbox' | 'dense' | 'normal'
export type CellSize = 'small' | 'normal'

export type TableCellProps = {
  cellPadding?: CellPadding
  cellSize?: CellSize
  ellipsis?: boolean
}

export type SortDirection = false | 'desc' | 'asc'
