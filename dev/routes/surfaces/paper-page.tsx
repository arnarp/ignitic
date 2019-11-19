import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { H2, P } from '../../../src/core/text'
import { flexStyles } from '../../../src/layout/flex'
import { Paper } from '../../../src/surfaces/paper'

type Props = {} & RouteComponentProps

export function PaperPage(props: Props) {
  return (
    <>
      <H2 marginBottom>Surfaces / Paper</H2>
      <Paper>
        <div
          className={cn(flexStyles.col, flexStyles.paddingMd)}
          style={{ minWidth: 300, minHeight: 300 }}
        >
          <P>This is a paper</P>
        </div>
      </Paper>
    </>
  )
}
