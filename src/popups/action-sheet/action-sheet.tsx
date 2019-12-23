import { AnimatePresence, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { MdClose } from 'react-icons/md'
import 'wicg-inert'
import { VisuallyHidden } from '../../a11y/visually-hidden'
import { IgniticSettingsContext } from '../../context/ignitic-settings-context'
import { IconButton } from '../../core/icon-button'
import { usePrevious } from '../../hooks/use-previous'
import { useUUID } from '../../hooks/use-uuid'
import { display } from '../../styles/display'
import { flex } from '../../styles/flex'
import { Blanket } from '../blanket'
import css from './action-sheet.css'

declare global {
  interface HTMLElement {
    inert: boolean
  }
}

type Props = {
  open: boolean
  ariaTitle: string
  onClose: () => void
  onOpened?: () => void
  onClosed?: () => void
  children: React.ReactNode
  className?: string
}

export function ActionSheet(props: Props) {
  const h2Ref = React.useRef<HTMLHeadingElement>(null)
  const sheetRef = React.useRef<HTMLDivElement>(null)
  const headingId = useUUID()
  const [sheetHeight, setSheetHeight] = React.useState(0)
  const previousOpen = usePrevious(props.open)
  React.useLayoutEffect(() => {
    if (sheetRef.current && props.open) {
      console.log('measuring sheet height')
      setSheetHeight(sheetRef.current.getBoundingClientRect().height)
    }
  })
  React.useEffect(() => {
    console.log('onChange', { previousOpen, open: props.open })
    if (previousOpen !== undefined) {
      if (!previousOpen && props.open) {
        onOpened()
      } else if (previousOpen && !props.open) {
        onClosed()
      }
    }
  }, [previousOpen, props.open])
  React.useEffect(() => cleanUp, [])

  const igniticSettings = React.useContext(IgniticSettingsContext)
  if (igniticSettings.container == undefined) {
    return null
  }

  function onOpened() {
    if (props.onOpened) {
      props.onOpened()
    }
    if (h2Ref.current) {
      h2Ref.current.focus()
    }
    console.log('onOpened', igniticSettings.container, props.open)

    if (igniticSettings.container) {
      igniticSettings.container.inert = true
    }
  }
  function onClosed() {
    cleanUp()
    if (props.onClosed) {
      props.onClosed()
    }
    console.log('onClosed', igniticSettings.container)
  }
  function cleanUp() {
    if (igniticSettings.container) {
      igniticSettings.container.inert = false
    }
  }

  function onKeyDown(ev: React.KeyboardEvent) {
    if (ev.key === 'Escape') {
      props.onClose()
    }
  }
  console.log({ open: props.open, sheetHeight })
  return ReactDOM.createPortal(
    <>
      <Blanket show={props.open} onClick={props.onClose} />
      <AnimatePresence>
        {props.open && (
          <motion.div
            aria-labelledby={headingId}
            key={headingId}
            ref={sheetRef}
            role="dialog"
            className={css.sheet}
            onKeyDown={onKeyDown}
            transition={{ type: 'tween', duration: 0.15 }}
            initial={{
              y: 0
            }}
            exit={{
              y: 0
            }}
            animate={{
              y: -sheetHeight
            }}
          >
            <div
              className={cn(
                display.flex,
                flex.row,
                flex.alignCenter,
                css.header
              )}
            >
              <VisuallyHidden>
                <h2 id={headingId} tabIndex={-1} ref={h2Ref}>
                  {props.ariaTitle}
                </h2>
              </VisuallyHidden>
              <span className={css.line} />
              <IconButton
                aria-label="Loka"
                color="neutral"
                fontSize="medium"
                onClick={props.onClose}
              >
                <MdClose />
              </IconButton>
            </div>
            <div className={cn(css.content, props.className)}>
              {props.children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  )
}
