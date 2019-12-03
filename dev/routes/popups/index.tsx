import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { TooltipPage } from './tooltip-page'
import { BlanketPage } from './blanket-page'
import { ActionSheetPage } from './action-sheet-page'

type Props = {} & RouteComponentProps

export function Popups(props: Props) {
  return (
    <Router>
      <TooltipPage path="tooltip" />
      <ActionSheetPage path="action-sheet" />
      <BlanketPage path="blanket" />
    </Router>
  )
}
