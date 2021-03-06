import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { MdDelete, MdSend } from 'react-icons/md'
import { Button, ButtonColor, ButtonVariant } from '../../../src/core/button'
import { H2, H3 } from '../../../src/core/text'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'

type Props = {} & RouteComponentProps

export function ButtonPage(props: Props) {
  return (
    <div className={cn(display.flex, flex.col, flex.spacingLg)}>
      <H2>Button</H2>
      <div>
        <H3 variant="h5">variant: outlined, size: small / medium / large</H3>
        <div className={cn(display.flex, flex.col, flex.spacingMd)}>
          <ButtonPageRow variant="outlined" color="neutral" />
          <ButtonPageRow variant="outlined" color="default" />
          <ButtonPageRow variant="outlined" color="primary" />
          <ButtonPageRow variant="outlined" color="secondary" />
        </div>
      </div>
      <div>
        <H3 variant="h5">variant: text, size: small / medium / large</H3>
        <div className={cn(display.flex, flex.col, flex.spacingMd)}>
          <ButtonPageRow variant="text" color="neutral" />
          <ButtonPageRow variant="text" color="default" />
          <ButtonPageRow variant="text" color="primary" />
          <ButtonPageRow variant="text" color="secondary" />
        </div>
      </div>
      <div>
        <H3 variant="h5">variant: filled, size: small / medium / large</H3>
        <div className={cn(display.flex, flex.col, flex.spacingMd)}>
          <ButtonPageRow variant="filled" color="neutral" />
          <ButtonPageRow variant="filled" color="default" />
          <ButtonPageRow variant="filled" color="primary" />
          <ButtonPageRow variant="filled" color="secondary" />
        </div>
      </div>
      <div>
        <H3 variant="h5">With icons</H3>
        <div className={cn(display.flex, flex.col, flex.spacingMd)}>
          <div
            className={cn(
              display.flex,
              flex.row,
              flex.spacingMd,
              flex.alignEnd
            )}
          >
            <Button
              iconPosition="left"
              variant="text"
              color="default"
              size="small"
            >
              <MdDelete />
              Delete
            </Button>
            <Button iconPosition="left" variant="filled" color="neutral">
              <MdDelete />
              Delete
            </Button>
            <Button
              iconPosition="left"
              variant="outlined"
              color="primary"
              size="large"
            >
              <MdDelete />
              Delete
            </Button>
          </div>
          <div
            className={cn(
              display.flex,
              flex.row,
              flex.spacingMd,
              flex.alignEnd
            )}
          >
            <Button
              iconPosition="right"
              variant="text"
              color="primary"
              size="small"
            >
              Send
              <MdSend />
            </Button>
            <Button iconPosition="right" variant="filled" color="secondary">
              Send
              <MdSend />
            </Button>
            <Button
              iconPosition="right"
              variant="outlined"
              color="default"
              size="large"
              type="submit"
            >
              Submit
              <MdSend />
            </Button>
          </div>
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
    <div className={cn(display.flex, flex.row, flex.spacingMd, flex.alignEnd)}>
      <Button variant={variant} color={color} size="small">
        Small
      </Button>
      <Button variant={variant} color={color}>
        Medium
      </Button>
      <Button variant={variant} color={color} size="large">
        Large
      </Button>
      <Button variant={variant} color={color} disabled>
        Disabled
      </Button>
    </div>
  )
}
