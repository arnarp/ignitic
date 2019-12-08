import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { cn } from 'itils/dist/misc/cn'
import { H2, Span } from '../../../src/core/text'
import { useUUID } from '../../../src/hooks/use-uuid'
import { Tooltip } from '../../../src/popups/tooltip'
import { flex } from '../../../src/styles/flex'
import { Button } from '../../../src/core/button'
import { display } from '../../../src/styles/display'

type Props = {} & RouteComponentProps

export function TooltipPage(props: Props) {
  const h2Ref = React.useRef<HTMLHeadingElement>(null)
  const t1Ref = React.useRef<HTMLButtonElement>(null)
  const t2Ref = React.useRef<HTMLButtonElement>(null)
  const t3Ref = React.useRef<HTMLButtonElement>(null)
  const t4Ref = React.useRef<HTMLButtonElement>(null)
  const h2Id = useUUID()
  const t1Id = useUUID()
  const t2Id = useUUID()
  const t3Id = useUUID()
  const t4Id = useUUID()
  const [enterDelay, setEnterDelay] = React.useState<number>(100)
  return (
    <div
      className={cn(display.flex, flex.col, flex.alignStart, flex.spacingSm)}
    >
      <H2 style={{ width: 'fit-content' }} aria-describedby={h2Id} ref={h2Ref}>
        Popups / Tooltip
      </H2>
      <Tooltip
        id={h2Id}
        triggerRef={h2Ref}
        enterDelay={enterDelay}
        placement="BOTTOM_CENTER"
      >
        <Span>This is a tooltip for 'Popups / Tooltip' header</Span>
      </Tooltip>
      <label>
        enterDelay
        <input
          type="number"
          value={enterDelay}
          onChange={event => setEnterDelay(Number(event.target.value))}
        />
      </label>
      <div
        className={cn(display.flex, flex.col, flex.spacingMd, flex.justifyCenter)}
      >
        <Button
          variant="outlined"
          color="default"
          aria-describedby={t1Id}
          ref={t1Ref}
        >
          TOP_CENTER
        </Button>
        <Tooltip
          id={t1Id}
          triggerRef={t1Ref}
          enterDelay={enterDelay}
          placement="TOP_CENTER"
        >
          <Span>TOP_CENTER</Span>
        </Tooltip>
        <Button
          variant="outlined"
          color="default"
          aria-describedby={t2Id}
          ref={t2Ref}
        >
          BOTTOM_CENTER
        </Button>
        <Tooltip
          id={t2Id}
          triggerRef={t2Ref}
          enterDelay={enterDelay}
          placement="BOTTOM_CENTER"
        >
          <Span>BOTTOM_CENTER</Span>
        </Tooltip>
        <Button
          variant="outlined"
          color="default"
          aria-describedby={t3Id}
          ref={t3Ref}
        >
          LEFT_CENTER
        </Button>
        <Tooltip
          id={t3Id}
          triggerRef={t3Ref}
          enterDelay={enterDelay}
          placement="LEFT_CENTER"
        >
          <Span>LEFT_CENTER</Span>
        </Tooltip>
        <Button
          variant="outlined"
          color="default"
          aria-describedby={t4Id}
          ref={t4Ref}
        >
          RIGHT_CENTER
        </Button>
        <Tooltip
          id={t4Id}
          triggerRef={t4Ref}
          enterDelay={enterDelay}
          placement="RIGHT_CENTER"
        >
          <Span>RIGHT_CENTER</Span>
        </Tooltip>
      </div>
    </div>
  )
}
