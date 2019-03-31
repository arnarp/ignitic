import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { Text } from '../../../src/core/text'
import { Paper } from '../../../src/surfaces/paper'

type Props = {} & RouteComponentProps

export function PaperPage(props: Props) {
  return (
    <>
      <Text as="h2">Surfaces / Paper</Text>
      <Paper>
        <div style={{ minWidth: 300, minHeight: 300, padding: 24 }}>
          <p>This is a paper</p>
        </div>
      </Paper>
    </>
  )
}
