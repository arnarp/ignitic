import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { SwitchPage } from './switch-page'
import { RadioPage } from './radio-page'
import { TextAreaPage } from './text-area-page'
import { TextInputPage } from './text-input-page'

type Props = {} & RouteComponentProps

export function Inputs(props: Props) {
  return (
    <Router>
      <SwitchPage path="switch" />
      <RadioPage path="radio" />
      <TextAreaPage path="text-area" />
      <TextInputPage path="text-input" />
    </Router>
  )
}
