import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { PaperPage } from './paper-page'
import { SurfacePage } from './surface-page'

type Props = {} & RouteComponentProps

export function Surfaces(props: Props) {
  return (
    <Router>
      <SurfacePage path="surface" />
      <PaperPage path="paper" />
    </Router>
  )
}
