import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { H1, H2, H3, Text } from '../../../src/core/text'

type Props = {} & RouteComponentProps

export function TextPage(props: Props) {
  return (
    <>
      <Text as="h2">Core / Text</Text>
      <H1>h1. Heading</H1>
      <H2>h2. Heading</H2>
      <H3>h3. Heading</H3>
    </>
  )
}
