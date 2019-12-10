import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'
import { TabsPage } from './tabs-page'

type Props = {} & RouteComponentProps

export function Navigation(props: Props) {
  return (
    <Router>
      <TabsPage path="tabs" />
    </Router>
  )
}
