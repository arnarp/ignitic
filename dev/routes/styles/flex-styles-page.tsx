import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { H2, H3, H4, P } from '../../../src/core/text'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'
import { Surface } from '../../../src/surfaces/surface'

const items = [0, 1, 2]

type Props = {} & RouteComponentProps

export function FlexStylesPage(props: Props) {
  return (
    <>
      <H2>Layout / Flex</H2>
      <H3>Col</H3>
      <div className={cn(display.flex, flex.row, flex.spacingMd)}>
        <div>
          <H4>Spacing sm</H4>
          <div className={cn(display.flex, flex.col, flex.spacingSm)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing md</H4>
          <div className={cn(display.flex, flex.col, flex.spacingMd)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing lg</H4>
          <div className={cn(display.flex, flex.col, flex.spacingLg)}>
            <Items />
          </div>
        </div>
      </div>
      <H3>Row</H3>
      <div className={cn(display.flex, flex.col, flex.spacingMd)}>
        <div>
          <H4>Spacing sm</H4>
          <div className={cn(display.flex, flex.row, flex.spacingSm)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing md</H4>
          <div className={cn(display.flex, flex.row, flex.spacingMd)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing lg</H4>
          <div className={cn(display.flex, flex.row, flex.spacingLg)}>
            <Items />
          </div>
        </div>
      </div>
    </>
  )
}

function Items() {
  return (
    <React.Fragment>
      {items.map(i => (
        <Surface
          key={i}
          color="primary"
          style={{ width: '12rem', height: '4rem' }}
        />
      ))}
    </React.Fragment>
  )
}
