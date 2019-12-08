import * as React from 'react'
import { H2 } from '../../../src/core/text'
import { RouteComponentProps } from '@reach/router'
import { display } from '../../../src/styles/display'
import { Surface } from '../../../src/surfaces/surface'

type Props = {} & RouteComponentProps

export function DisplayStylesPage(props: Props) {
  return (
    <>
      <H2>Styles / Display</H2>
      <Item className={display.none} />
      <Item className={display.xs_none} />
      <Item className={display.sm_none} />
    </>
  )
}

function Item({ className }: { className: string }) {
  return (
    <Surface
      color="neutral"
      className={className}
      style={{ height: '2rem', width: '3rem' }}
    ></Surface>
  )
}
