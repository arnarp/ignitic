import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { ButtonPage } from './button-page'
import { IconButtonPage } from './icon-button-page'
import { TextPage } from './text-page'
import { LinkPage } from './link-page'

type Props = {} & RouteComponentProps

export function Core(props: Props) {
  return (
    <Router>
      <TextPage path="text" />
      <IconButtonPage path="icon-button" />
      <ButtonPage path="button" />
      <LinkPage path="link" />
    </Router>
  )
}
