import { RouteComponentProps, Link } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { flexStyles } from '../../../src/layout/flex'
import { linkStyles } from '../../../src/core/link'

type Props = {} & RouteComponentProps

export function LinkPage(props: Props) {
  return (
    <div className={cn(flexStyles.col, flexStyles.spacingSm)}>
      <Link to="" className={linkStyles.neutral}>
        Neutral link
      </Link>
      <Link to="" className={cn(linkStyles.neutral, linkStyles.sizeSmall)}>
        Neutral small link
      </Link>
      <Link to="" className={cn(linkStyles.neutral, linkStyles.sizeLarge)}>
        Neutral large link
      </Link>
    </div>
  )
}
