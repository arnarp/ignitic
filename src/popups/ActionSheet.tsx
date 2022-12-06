import { AnimatePresence, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import ReactDOM from 'react-dom'
import { MdClose } from 'react-icons/md'
import {
  IconButton,
  IgniticContext,
  ScreenContext,
  styleClassValue,
  StyleProps,
  VisuallyHidden,
} from '../core'
import { usePrevious, useUUID } from '../hooks'
import * as css from './ActionSheet.module.css'
import { Blanket } from './Blanket'

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
} & Pick<StyleProps, 'background'>

export function ActionSheet(props: Props) {
  const h1Ref = React.useRef<HTMLHeadingElement>(null)
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
  const screenContext = React.useContext(ScreenContext)
  const igniticSettings = React.useContext(IgniticContext)
  if (igniticSettings.container == undefined) {
    return null
  }

  function onOpened() {
    if (props.onOpened) {
      props.onOpened()
    }
    if (h1Ref.current) {
      h1Ref.current.focus()
    }
    console.log('onOpened', igniticSettings.container, props.open)

    if (igniticSettings.container) {
      igniticSettings.container.inert = true
    }
    document.body.style.overflow = 'hidden'
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
    document.body.style.overflow = 'auto'
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
            className={cn(
              css.sheet,
              styleClassValue(props, { background: 'paper' })
            )}
            onKeyDown={onKeyDown}
            transition={{ type: 'tween', duration: 0.15 }}
            style={{ top: `${screenContext.windowHeight}rem` }}
            initial={{
              y: 0,
            }}
            exit={{
              y: 0,
            }}
            animate={{
              y: -sheetHeight,
            }}
          >
            <div className={cn(css.header)}>
              <VisuallyHidden>
                <h1 id={headingId} tabIndex={-1} ref={h1Ref}>
                  {props.ariaTitle}
                </h1>
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
