import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { H2 } from '../../../src/core/text'
import { Label } from '../../../src/inputs/label'
import { TextArea } from '../../../src/inputs/text-area'
import { flex } from '../../../src/styles/flex'
import { display } from '../../../src/styles/display'

type Props = {} & RouteComponentProps

export function TextAreaPage(props: Props) {
  const [value, setValue] = React.useState('')
  return (
    <div className={cn(display.flex, flex.col, flex.spacingLg)}>
      <H2>TextArea</H2>
      <Label direction="col">
        <span>Hvernig ávöxt vilt þú?</span>
        <TextArea
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </Label>
    </div>
  )
}
