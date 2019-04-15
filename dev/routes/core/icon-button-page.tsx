import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { MdDelete } from 'react-icons/md'

import { IconButton } from '../../../src/core/icon-button'
import { H2, H3 } from '../../../src/core/text'

type Props = {} & RouteComponentProps

export function IconButtonPage(props: Props) {
  return (
    <>
      <H2>IconButton</H2>
      <H3 variant="h5">Small / Medium / Large fontSize</H3>
      <IconButton fontSize="small" aria-label="Delete">
        <MdDelete />
      </IconButton>
      <IconButton aria-label="Delete">
        <MdDelete />
      </IconButton>
      <IconButton fontSize="large" aria-label="Delete">
        <MdDelete />
      </IconButton>
      <H3 variant="h5">Disabled state</H3>
      <IconButton disabled aria-label="Delete">
        <MdDelete />
      </IconButton>
    </>
  )
}
