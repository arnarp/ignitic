import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { H2 } from '../../../src/core/text'
import { useUUID } from '../../../src/hooks/use-uuid'
import { Tooltip, TooltipPlacement } from '../../../src/popups/tooltip'

type Props = {} & RouteComponentProps

export function TooltipPage(props: Props) {
  const h2Ref = React.useRef<HTMLHeadingElement>(null)
  const h2Id = useUUID()
  const [placement, setPlacement] = React.useState<TooltipPlacement>('bottom')
  return (
    <>
      <H2 style={{ width: 'fit-content' }} aria-describedby={h2Id} ref={h2Ref}>
        Popups / Tooltip
      </H2>
      <Tooltip id={h2Id} triggerRef={h2Ref} placement={placement}>
        This is a tooltip for 'Popups / Tooltip' header
      </Tooltip>
      <label>
        Placement
        <select
          value={placement}
          onChange={event =>
            setPlacement(event.target.value as TooltipPlacement)
          }
        >
          <option value="top">top</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
          <option value="right">right</option>
        </select>
      </label>
    </>
  )
}
