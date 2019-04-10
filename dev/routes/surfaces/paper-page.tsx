import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { H2 } from '../../../src/core/text'
import { Paper } from '../../../src/surfaces/paper'

type Props = {} & RouteComponentProps

export function PaperPage(props: Props) {
  return (
    <>
      <H2>Surfaces / Paper</H2>
      <Paper>
        <div style={{ minWidth: 300, minHeight: 300, padding: 24 }}>
          <p>This is a paper</p>
        </div>
      </Paper>
    </>
  )
}
