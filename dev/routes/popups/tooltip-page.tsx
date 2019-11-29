import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { cn } from 'itils/dist/misc/cn'
import { H2, Span } from '../../../src/core/text'
import { useUUID } from '../../../src/hooks/use-uuid'
import { TooltipPlacement, Tooltip } from '../../../src/popups/tooltip'
import { flexStyles } from '../../../src/layout/flex'
import { Button } from '../../../src/core/button'
import { justifyCenter } from '../../../src/layout/flex/flex.css'

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
  const [placement, setPlacement] = React.useState<TooltipPlacement>(
    'BOTTOM_CENTER'
  )
  const [enterDelay, setEnterDelay] = React.useState<number>(100)
  console.log('Tooltip page')
  return (
    <div className={cn(flexStyles.col, flexStyles.spacingSm)}>
      <H2
        style={{ width: '50vw', background: 'beige' }}
        aria-describedby={h2Id}
        ref={h2Ref}
      >
        Popups / Tooltip
      </H2>
      <Tooltip
        id={h2Id}
        triggerRef={h2Ref}
        enterDelay={enterDelay}
        placement={placement}
      >
        <Span>This is a tooltip for 'Popups / Tooltip' header</Span>
      </Tooltip>
      <label>
        placement
        <select
          value={placement}
          onChange={event =>
            setPlacement(event.target.value as TooltipPlacement)
          }
        >
          <option value="TOP_CENTER">top</option>
          <option value="BOTTOM_CENTER">BOTTOM_CENTER</option>
          <option value="LEFT_CENTER">left</option>
          <option value="RIGHT_CENTER">right</option>
        </select>
      </label>
      <label>
        enterDelay
        <input
          type="number"
          value={enterDelay}
          onChange={event => setEnterDelay(Number(event.target.value))}
        />
      </label>
      <div className={cn(flexStyles.col, flexStyles.spacingLg, justifyCenter)}>
        <Button
          style={{ width: '8rem' }}
          variant="outlined"
          color="default"
          aria-describedby={t1Id}
          ref={t1Ref}
        >
          Tooltip One
        </Button>
        <Button
          style={{ width: '8rem' }}
          variant="outlined"
          color="default"
          aria-describedby={t2Id}
          ref={t2Ref}
        >
          Tooltip Two
        </Button>
        <Button
          style={{ width: '8rem' }}
          variant="outlined"
          color="default"
          aria-describedby={t3Id}
          ref={t3Ref}
        >
          Tooltip Three
        </Button>
        <Button
          style={{ width: '8rem' }}
          variant="outlined"
          color="default"
          aria-describedby={t4Id}
          ref={t4Ref}
        >
          Tooltip Four
        </Button>
        <Tooltip
          id={t1Id}
          triggerRef={t1Ref}
          enterDelay={enterDelay}
          placement={placement}
        >
          <Span>Tooltip One</Span>
        </Tooltip>
        <Tooltip
          id={t2Id}
          triggerRef={t2Ref}
          enterDelay={enterDelay}
          placement={placement}
        >
          <Span>Tooltip Two</Span>
        </Tooltip>
        <Tooltip
          id={t3Id}
          triggerRef={t3Ref}
          enterDelay={enterDelay}
          placement={placement}
        >
          <Span>Tooltip Three</Span>
        </Tooltip>
        <Tooltip
          id={t4Id}
          triggerRef={t4Ref}
          enterDelay={enterDelay}
          placement={placement}
        >
          <Span>Tooltip Four</Span>
        </Tooltip>
      </div>
    </div>
  )
}
