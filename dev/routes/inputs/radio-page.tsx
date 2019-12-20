import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { H2 } from '../../../src/core/text'
import { Label } from '../../../src/inputs/label'
import { FieldSet } from '../../../src/inputs/fieldset'
import { Legend } from '../../../src/inputs/legend'
import { RadioGroup, Radio } from '../../../src/inputs/radio-group'
import { flex } from '../../../src/styles/flex'
import { display } from '../../../src/styles/display'
import { useUUID } from '../../../src/hooks/use-uuid'

type Props = {} & RouteComponentProps
type Fruit = 'Orange' | 'Apple' | 'Mango' | 'Date'

const items: {
  enum: Fruit
  label: string
}[] = [
  {
    enum: 'Orange',
    label: 'Appelsína'
  },
  {
    enum: 'Apple',
    label: 'Epli'
  },
  {
    enum: 'Mango',
    label: 'Mangó'
  },
  {
    enum: 'Date',
    label: 'Daðla'
  }
]

export function RadioPage(props: Props) {
  const [checked, setChecked] = React.useState<Fruit | undefined>(undefined)
  const legendId = useUUID()
  console.log({ checked })
  return (
    <div className={cn(display.flex, flex.col, flex.spacingLg)}>
      <H2>Radio</H2>
      <FieldSet>
        <Legend id={legendId}>Hvaða ávöxt vilt þú?</Legend>
        <RadioGroup
          aria-labelledby={legendId}
          selectedValue={checked}
          setSelectedValue={value => setChecked(value)}
        >
          {items.map(i => (
            <Label key={i.enum}>
              <Radio value={i.enum} />
              <span>{i.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
