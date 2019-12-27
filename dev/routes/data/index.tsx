import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { TablePage } from './table-page'
import { DlPage } from './dl-page'

type Props = {} & RouteComponentProps

export function Data(props: Props) {
  return (
    <Router>
      <TablePage path="table" />
      <DlPage path="dl" />
    </Router>
  )
}
