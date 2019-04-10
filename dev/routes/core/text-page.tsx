import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { H1, H2, H3, H4, H5, H6 } from '../../../src/core/text'

type Props = {} & RouteComponentProps

export function TextPage(props: Props) {
  return (
    <>
      <H2>Core / Text</H2>
      <H1>h1. Heading</H1>
      <H2>h2. Heading</H2>
      <H3>h3. Heading</H3>
      <H4>h3. Heading</H4>
      <H5>h3. Heading</H5>
      <H6>h3. Heading</H6>
    </>
  )
}
