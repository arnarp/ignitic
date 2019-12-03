import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { cn } from 'itils/dist/misc/cn'
import { H2, P } from '../../../src/core/text'
import { ActionSheet } from '../../../src/popups/action-sheet'
import { flexStyles } from '../../../src/layout/flex'
import { Button } from '../../../src/core/button'

type Props = {} & RouteComponentProps

export function ActionSheetPage(props: Props) {
  const [show, setShow] = React.useState(false)
  const triggerBtnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <div className={cn(flexStyles.col, flexStyles.alignStart)}>
      <H2 style={{ width: 'fit-content' }}>Popups / ActionSheet</H2>
      <div
        className={cn(
          flexStyles.col,
          flexStyles.alignCenter,
          flexStyles.justifyCenter
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
