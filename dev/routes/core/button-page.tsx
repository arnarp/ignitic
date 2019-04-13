import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { Button, ButtonColor, ButtonVariant } from '../../../src/core/button'
import { H2, H3 } from '../../../src/core/text'
import { flexStyles } from '../../../src/layout/flex'

type Props = {} & RouteComponentProps

export function ButtonPage(props: Props) {
  return (
    <div className={cn(flexStyles.col, flexStyles.spacingLg)}>
      <H2>Button</H2>
      <div>
        <H3 variant="h5">Variant: outlined, size: small / medium / large</H3>
        <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
          <ButtonPageRow variant="outlined" color="neutral" />
          <ButtonPageRow variant="outlined" color="default" />
          <ButtonPageRow variant="outlined" color="primary" />
          <ButtonPageRow variant="outlined" color="secondary" />
        </div>
      </div>
      <div>
        <H3 variant="h5">Variant: text, size: small / medium / large</H3>
        <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
          <ButtonPageRow variant="text" color="neutral" />
          <ButtonPageRow variant="text" color="default" />
          <ButtonPageRow variant="text" color="primary" />
          <ButtonPageRow variant="text" color="secondary" />
        </div>
      </div>
      <div>
        <H3 variant="h5">Variant: filled, size: small / medium / large</H3>
        <div className={cn(flexStyles.col, flexStyles.spacingMd)}>
          <ButtonPageRow variant="filled" color="neutral" />
          <ButtonPageRow variant="filled" color="default" />
          <ButtonPageRow variant="filled" color="primary" />
          <ButtonPageRow variant="filled" color="secondary" />
        </div>
      </div>
    </div>
  )
}

function ButtonPageRow({
  variant,
  color
}: {
  variant: ButtonVariant
  color: ButtonColor
}) {
  return (
    <div
      className={cn(flexStyles.row, flexStyles.spacingMd, flexStyles.alignEnd)}
    >
      <Button variant={variant} color={color} size="small" onClick={() => {}}>
        Small
      </Button>
      <Button variant={variant} color={color} onClick={() => {}}>
        Medium
      </Button>
      <Button variant={variant} color={color} size="large" onClick={() => {}}>
        Large
      </Button>
      <Button variant={variant} color={color} disabled onClick={() => {}}>
        Disabled
      </Button>
    </div>
  )
}
