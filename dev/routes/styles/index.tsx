import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'
import { DisplayStylesPage } from './display-styles-page'
import { FlexStylesPage } from './flex-styles-page'

type Props = {} & RouteComponentProps

export function Styles(props: Props) {
  return (
    <Router>
      <DisplayStylesPage path="display" />
      <FlexStylesPage path="flex" />
    </Router>
  )
}
