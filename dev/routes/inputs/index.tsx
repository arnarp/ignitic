import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { SwitchPage } from './switch-page'
import { RadioPage } from './radio-page'

type Props = {} & RouteComponentProps

export function Inputs(props: Props) {
  return (
    <Router>
      <SwitchPage path="switch" />
      <RadioPage path="radio" />
    </Router>
  )
}
