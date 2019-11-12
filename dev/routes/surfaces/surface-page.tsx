import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { Button, ButtonVariant } from '../../../src/core/button'
import { H2, H3, H4, P } from '../../../src/core/text'
import { Label } from '../../../src/inputs/label'
import { Switch } from '../../../src/inputs/switch'
import { flexStyles } from '../../../src/layout/flex'
import { Surface } from '../../../src/surfaces/surface'

type Props = {} & RouteComponentProps

export function SurfacePage(props: Props) {
  return (
    <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
      <H2 marginBottom>Surfaces / Surface</H2>
      <H3>Default background</H3>
      <SurfaceContent />
      <H3>Color: 'paper'</H3>
      <Surface padding="md" color="paper">
        <SurfaceContent />
      </Surface>
      <H3>Color: 'neutral'</H3>
      <Surface padding="md" color="neutral">
        <SurfaceContent />
      </Surface>
      <H3>Color: 'default'</H3>
      <Surface padding="md" color="default">
        <SurfaceContent />
      </Surface>
      <H3>Color: 'primary'</H3>
      <Surface padding="md" color="primary">
        <SurfaceContent />
      </Surface>
      <H3>Color: 'secondary'</H3>
      <Surface padding="md" color="secondary">
        <SurfaceContent />
      </Surface>
    </div>
  )
}

export function SurfaceContent() {
  const [checked, setChecked] = React.useState(true)

  return (
    <div
      className={cn(flexStyles.row)}
      style={{ minWidth: 300, minHeight: 300 }}
    >
      <div className={cn(flexStyles.col)}>
        <H4>Text</H4>
        <P variant="p.lead" color="neutral">
          neutral color
        </P>
        <P variant="p.lead" color="default">
          default color
        </P>
        <P variant="p.lead" color="primary">
          primary color
        </P>
        <P variant="p.lead" color="secondary">
          secondary color
        </P>
        <H4>Buttons</H4>
        <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
          <ButtonPageRow variant="filled" />
          <ButtonPageRow variant="outlined" />
          <ButtonPageRow variant="text" />
        </div>
      </div>
      <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
        <H4>Inputs</H4>
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
      {/* <div
        style={{
          width: '100px',
          height: '100px',
          content: '',
          background: 'rgba(255, 255, 255, 0.87)'
        }}
      /> */}
    </div>
  )
}

function ButtonPageRow({ variant }: { variant: ButtonVariant }) {
  return (
    <>
      <div className={cn(flexStyles.row, flexStyles.spacingMd)}>
        <Button variant={variant} color="neutral">
          neutral
        </Button>
        <Button variant={variant} color="neutral" disabled>
          disabled
        </Button>
        <Button variant={variant} color="default">
          default
        </Button>
        <Button variant={variant} color="default" disabled>
          disabled
        </Button>
      </div>
      <div className={cn(flexStyles.row, flexStyles.spacingMd)}>
        <Button variant={variant} color="primary">
          primary
        </Button>
        <Button variant={variant} color="primary" disabled>
          disabled
        </Button>
        <Button variant={variant} color="secondary">
          secondary
        </Button>
        <Button variant={variant} color="secondary" disabled>
          disabled
        </Button>
      </div>
    </>
  )
}
