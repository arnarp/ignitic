import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { TooltipPage } from './tooltip-page'

type Props = {} & RouteComponentProps

export function Popups(props: Props) {
  return (
    <Router>
      <TooltipPage path="tooltip" />
    </Router>
  )
}
