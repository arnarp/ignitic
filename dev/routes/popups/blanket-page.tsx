import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { cn } from 'itils/dist/misc/cn'
import { H2, Span } from '../../../src/core/text'
import { Blanket } from '../../../src/popups/blanket'
import { flexStyles } from '../../../src/layout/flex'
import { Button } from '../../../src/core/button'

type Props = {} & RouteComponentProps

export function BlanketPage(props: Props) {
  const [show, setShow] = React.useState(false)
  return (
    <div className={cn(flexStyles.col, flexStyles.alignStart)}>
      <H2 style={{ width: 'fit-content' }}>Popups / Blanket</H2>
      <div
        className={cn(
          flexStyles.col,
          flexStyles.alignCenter,
          flexStyles.justifyCenter
        )}
      >
        <Button
          variant="outlined"
          color="default"
          onClick={() => setShow(true)}
        >
          Show blanket
        </Button>
        <Blanket show={show} onClick={() => setShow(false)} />
      </div>
    </div>
  )
}
