import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { H2, H3 } from '../../../src/core/text'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'
import { Dl, Dt, Dd } from '../../../src/data/dl'
import { Surface } from '../../../src/surfaces/surface'

type Props = {} & RouteComponentProps

export function DlPage(props: Props) {
  return (
    <>
      <H2>Description list</H2>
      <H3>Default</H3>
      <Dl variant="grid" align="spread" ratio="1:1">
        <Dt>Drink</Dt>
        <Dd>Coffee</Dd>
        <Dt>Fruit</Dt>
        <Dd>Mango</Dd>
        <Dt>Team</Dt>
        <Dd>Liverpool</Dd>
        <Dt>Age</Dt>
        <Dd numeric>99</Dd>
      </Dl>
      <H3>With semi</H3>
      <Dl semi variant="grid" align="spread" ratio="1:1">
        <Dt>Drink</Dt>
        <Dd>Coffee</Dd>
        <Dt>Fruit</Dt>
        <Dd>Mango</Dd>
        <Dt>Team</Dt>
        <Dd>Liverpool</Dd>
        <Dt>Age</Dt>
        <Dd numeric>99</Dd>
      </Dl>
      <H3>With semi 1:2</H3>
      <Dl semi variant="grid" align="spread" ratio="1:2">
        <Dt>Drink</Dt>
        <Dd>Coffee</Dd>
        <Dt>Fruit</Dt>
        <Dd>Mango</Dd>
        <Dt>Team</Dt>
        <Dd>Liverpool</Dd>
        <Dt>Age</Dt>
        <Dd numeric>99</Dd>
      </Dl>
      <H3>With semi 4:1</H3>
      <Dl semi variant="grid" align="spread" ratio="4:1">
        <Dt>Drink</Dt>
        <Dd>Coffee</Dd>
        <Dt>Fruit</Dt>
        <Dd>Mango</Dd>
        <Dt>Team</Dt>
        <Dd>Liverpool</Dd>
        <Dt>Age</Dt>
        <Dd numeric>99</Dd>
      </Dl>
      <H3>With semi and numeric data</H3>
      <Dl semi numericData variant="grid" align="spread" ratio="1:1">
        <Dt>Drink</Dt>
        <Dd>500</Dd>
        <Dt>Fruit</Dt>
        <Dd>897</Dd>
        <Dt>Team</Dt>
        <Dd>112</Dd>
        <Dt>Age</Dt>
        <Dd>99</Dd>
      </Dl>
      <H3>With semi, numeric data, primary dtColor and centered</H3>
      <Dl
        semi
        numericData
        variant="grid"
        align="centered"
        ratio="1:1"
        style={{ maxWidth: '10rem' }}
        dtColor="primary"
      >
        <Dt>Drink</Dt>
        <Dd>500</Dd>
        <Dt>Fruit</Dt>
        <Dd>897</Dd>
        <Dt>Team</Dt>
        <Dd>112</Dd>
        <Dt>Age</Dt>
        <Dd>99</Dd>
      </Dl>
      <H3>Vertival</H3>
      <Dl numericData variant="vertical">
        <Dt>Drink</Dt>
        <Dd>500</Dd>
        <Dt>Fruit</Dt>
        <Dd>897</Dd>
        <Dt>Team</Dt>
        <Dd>112</Dd>
        <Dt>Age</Dt>
        <Dd>99</Dd>
      </Dl>
    </>
  )
}
