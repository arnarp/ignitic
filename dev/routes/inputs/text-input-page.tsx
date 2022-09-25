import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { H2 } from '../../../src/core/text'
import { Label } from '../../../src/inputs/label'
import { TextInput, useTextInput } from '../../../src/inputs/text-input'
import { flex } from '../../../src/styles/flex'
import { display } from '../../../src/styles/display'

type Props = {} & RouteComponentProps

export function TextInputPage(props: Props) {
  const input = useTextInput({ initial: '' })
  return (
    <div className={cn(display.flex, flex.col, flex.spacingLg)}>
      <H2>TextInput</H2>
      <Label direction="col">
        <span>Hvernig ávöxt vilt þú?</span>
        <TextInput {...input.inputProps} placeholder="Placeholder" />
      </Label>
      <Label direction="row">
        <span>Hvernig ávöxt vilt þú?</span>
        <TextInput {...input.inputProps} />
      </Label>
    </div>
  )
}
