import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { FlexPage } from './flex-page'

type Props = {} & RouteComponentProps

export function Layout(props: Props) {
  return (
    <Router>
      <FlexPage path="flex" />
    </Router>
  )
}
