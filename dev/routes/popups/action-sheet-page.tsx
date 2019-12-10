import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { Button } from '../../../src/core/button'
import { H2, P } from '../../../src/core/text'
import { ActionSheet } from '../../../src/popups/action-sheet'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'

type Props = {} & RouteComponentProps

export function ActionSheetPage(props: Props) {
  const [show, setShow] = React.useState(false)
  const triggerBtnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <div className={cn(display.flex, flex.col, flex.alignStart)}>
      <H2 style={{ width: 'fit-content' }}>Popups / ActionSheet</H2>
      <div
        className={cn(
          display.flex,
          flex.col,
          flex.alignCenter,
          flex.justifyCenter
        )}
      >
        <Button
          ref={triggerBtnRef}
          variant="outlined"
          color="default"
          onClick={() => setShow(true)}
        >
          Show action sheet
        </Button>
        <ActionSheet
          ariaTitle="Test action sheet"
          open={show}
          onClose={() => setShow(false)}
          onClosed={() => {
            if (triggerBtnRef.current) {
              triggerBtnRef.current.focus()
            }
          }}
        >
          {Array.from(Array(70).keys()).map(i => (
            <P key={i}>Action sheet content</P>
          ))}
        </ActionSheet>
      </div>
    </div>
  )
}