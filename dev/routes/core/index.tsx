import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { IconButtonPage } from './icon-button-page'
import { TextPage } from './text-page'

type Props = {} & RouteComponentProps

export function Core(props: Props) {
  return (
    <Router>
      <TextPage path="text" />
      <IconButtonPage path="icon-button" />
    </Router>
  )
}
