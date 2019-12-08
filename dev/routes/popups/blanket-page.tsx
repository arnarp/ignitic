import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { Button } from '../../../src/core/button'
import { H2 } from '../../../src/core/text'
import { Blanket } from '../../../src/popups/blanket'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'

type Props = {} & RouteComponentProps

export function BlanketPage(props: Props) {
  const [show, setShow] = React.useState(false)
  return (
    <div className={cn(display.flex, flex.col, flex.alignStart)}>
      <H2 style={{ width: 'fit-content' }}>Popups / Blanket</H2>
      <div
        className={cn(
          display.flex,
          flex.col,
          flex.alignCenter,
          flex.justifyCenter
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
