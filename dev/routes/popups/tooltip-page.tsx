import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { H2 } from '../../../src/core/text'
import { useUUID } from '../../../src/hooks/use-uuid'
import { Tooltip } from '../../../src/popups/tooltip'

type Props = {} & RouteComponentProps

export function TooltipPage(props: Props) {
  const h2Ref = React.useRef<HTMLHeadingElement>(null)
  const h2Id = useUUID()
  return (
    <>
      <H2 aria-describedby={h2Id} ref={h2Ref}>
        Popups / Tooltip
      </H2>
      <Tooltip id={h2Id} triggerRef={h2Ref}>
        This is a tooltip for 'Popups / Tooltip' header
      </Tooltip>
    </>
  )
}
