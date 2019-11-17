import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { TablePage } from './table-page'

type Props = {} & RouteComponentProps

export function Data(props: Props) {
  return (
    <Router>
      <TablePage path="table" />
    </Router>
  )
}
