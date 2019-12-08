import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { MdDelete } from 'react-icons/md'
import { ButtonColor, IconButton } from '../../../src/core/icon-button'
import { H2, H3 } from '../../../src/core/text'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'

type Props = {} & RouteComponentProps

export function IconButtonPage(props: Props) {
  return (
    <div className={cn(display.flex, flex.col, flex.spacingLg)}>
      <H2>IconButton</H2>
      <H3 variant="h5">fontSize: small / medium / large fontSize</H3>
      <IconButtonPageRow color="neutral" />
      <IconButtonPageRow color="default" />
      <IconButtonPageRow color="primary" />
      <IconButtonPageRow color="secondary" />
    </div>
  )
}

function IconButtonPageRow({ color }: { color: ButtonColor }) {
  return (
    <div className={cn(display.flex, flex.row, flex.spacingMd, flex.alignEnd)}>
      <IconButton aria-label="Delete" color={color} fontSize="small">
        <MdDelete />
      </IconButton>
      <IconButton aria-label="Delete" color={color}>
        <MdDelete />
      </IconButton>
      <IconButton aria-label="Delete" color={color} fontSize="large">
        <MdDelete />
      </IconButton>
      <IconButton aria-label="Delete" color={color} disabled>
        <MdDelete />
      </IconButton>
    </div>
  )
}
