import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { H2, H3, H4, P } from '../../../src/core/text'
import { flexStyles } from '../../../src/layout/flex'
import { Paper } from '../../../src/surfaces/paper'
import { Surface } from '../../../src/surfaces/surface'

const items = [0, 1, 2]

type Props = {} & RouteComponentProps

export function FlexPage(props: Props) {
  return (
    <>
      <H2>Layout / Flex</H2>
      <H3>Col</H3>
      <div className={cn(flexStyles.row, flexStyles.spacingMd)}>
        <div>
          <H4>Spacing sm</H4>
          <div className={cn(flexStyles.col, flexStyles.spacingSm)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing md</H4>
          <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing lg</H4>
          <div className={cn(flexStyles.col, flexStyles.spacingLg)}>
            <Items />
          </div>
        </div>
      </div>
      <H3>Row</H3>
      <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
        <div>
          <H4>Spacing sm</H4>
          <div className={cn(flexStyles.row, flexStyles.spacingSm)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing md</H4>
          <div className={cn(flexStyles.row, flexStyles.spacingMd)}>
            <Items />
          </div>
        </div>
        <div>
          <H4>Spacing lg</H4>
          <div className={cn(flexStyles.row, flexStyles.spacingLg)}>
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
