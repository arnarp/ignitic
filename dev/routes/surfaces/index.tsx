import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { PaperPage } from './paper-page'

type Props = {} & RouteComponentProps

export function Surfaces(props: Props) {
  return (
    <Router>
      <PaperPage path="paper" />
    </Router>
  )
}
