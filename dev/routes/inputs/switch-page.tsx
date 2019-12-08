import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { H2 } from '../../../src/core/text'
import { Label } from '../../../src/inputs/label'
import { Switch } from '../../../src/inputs/switch'
import { flex } from '../../../src/styles/flex'
import { display } from '../../../src/styles/display'

type Props = {} & RouteComponentProps

export function SwitchPage(props: Props) {
  const [checked, setChecked] = React.useState(false)
  console.log({ checked })
  return (
    <div className={cn(display.flex, flex.col, flex.spacingLg)}>
      <H2>Switch</H2>
      <Label>
        <span>Switch</span>
        <Switch
          onChange={() => setChecked(!checked)}
          color="neutral"
          checked={checked}
        />
      </Label>
      <Label>
        <span>Switch</span>
        <Switch
          onChange={() => setChecked(!checked)}
          color="default"
          checked={checked}
        />
      </Label>
      <Label>
        <span>Switch</span>
        <Switch
          onChange={() => setChecked(!checked)}
          color="primary"
          checked={checked}
        />
      </Label>
      <Label>
        <span>Switch</span>
        <Switch
          onChange={() => setChecked(!checked)}
          color="secondary"
          checked={checked}
        />
      </Label>
    </div>
  )
}
