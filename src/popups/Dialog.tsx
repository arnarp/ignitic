import { AnimatePresence, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  extractStyleProps,
  IgniticContext,
  styleClassValue,
  StyleProps,
} from '../core'
import { usePrevious, useUUID } from '../hooks'
import { Blanket } from './Blanket'
import * as css from './Dialog.module.css'

declare global {
  interface HTMLElement {
    inert: boolean
  }
}

type Props = {
  open: boolean
  headingId: string
  onClose: () => void
  onOpened?: () => void
  onClosed?: () => void
  children: React.ReactNode
  className?: string
  variant?: 'center' | 'fullscreen'
} & Pick<StyleProps, 'background'>

export function Dialog({ variant = 'center', ...props }: Props) {
  const headingId = useUUID()
  const previousOpen = usePrevious(props.open)
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
  const igniticSettings = React.useContext(IgniticContext)
  if (igniticSettings.container == undefined) {
    return null
  }

  function onOpened() {
    if (props.onOpened) {
      props.onOpened()
    }
    const hEl = document.getElementById(props.headingId)
    if (hEl) {
      hEl.focus()
    }

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
  return ReactDOM.createPortal(
    <>
      {variant !== 'fullscreen' && (
        <Blanket show={props.open} onClick={props.onClose} />
      )}
      <AnimatePresence>
        {props.open && (
          <motion.div
            aria-labelledby={headingId}
            key={headingId}
            role="dialog"
            className={cn(css.dialog)}
            onKeyDown={onKeyDown}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div
              className={cn(
                {
                  [css.dialogCenter]: variant == 'center',
                  [css.dialogFullscreen]: variant == 'fullscreen',
                },
                styleClassValue(props, { background: 'paper' }),
                props.className
              )}
            >
              {props.children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  )
}

type DialogContentProps = {
  children: React.ReactNode
  className?: string
} & StyleProps

export function DialogContent(props: DialogContentProps) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <div
      {...rest}
      className={cn(css.dialogContent, styleClassValue(props), className)}
    />
  )
}

type DialogHeaderProps = {
  children: React.ReactNode
  className?: string
} & StyleProps

export function DialogHeader(props: DialogHeaderProps) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <div
      {...rest}
      className={cn(css.dialogHeader, styleClassValue(props), className)}
    />
  )
}

type DialogFooterProps = {
  children: React.ReactNode
  className?: string
} & StyleProps

export function DialogFooter(props: DialogFooterProps) {
  const { className, ...rest } = extractStyleProps(props)
  return (
    <div
      {...rest}
      className={cn(css.dialogFooter, styleClassValue(props), className)}
    />
  )
}
