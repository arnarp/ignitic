import { Link, RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { linkStyles } from '../../../src/core/link'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'

type Props = {} & RouteComponentProps

export function LinkPage(props: Props) {
  return (
    <div className={cn(display.flex, flex.col, flex.spacingSm)}>
      <Link to="" className={linkStyles.neutral}>
        Neutral link
      </Link>
      <Link to="" className={cn(linkStyles.neutral, linkStyles.sizeSmall)}>
        Neutral small link
      </Link>
      <Link to="" className={cn(linkStyles.neutral, linkStyles.sizeLarge)}>
        Neutral large link
      </Link>
      <Link to="" className={linkStyles.primary}>
        primary link
      </Link>
      <Link to="" className={cn(linkStyles.primary, linkStyles.sizeSmall)}>
        primary small link
      </Link>
      <Link to="" className={cn(linkStyles.primary, linkStyles.sizeLarge)}>
        primary large link
      </Link>
    </div>
  )
}
