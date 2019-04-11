import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { H2, P } from '../../../src/core/text'
import { Paper } from '../../../src/surfaces/paper'

type Props = {} & RouteComponentProps

export function PaperPage(props: Props) {
  return (
    <>
      <H2>Surfaces / Paper</H2>
      <Paper>
        <div style={{ minWidth: 300, minHeight: 300, padding: 24 }}>
          <P>This is a paper</P>
        </div>
      </Paper>
    </>
  )
}
