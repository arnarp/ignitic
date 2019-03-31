import * as React from 'react'
import ReactDOM from 'react-dom'
import posed from 'react-pose'

import { BaseComponentProps } from '../../types/base-component-props'
import { cn } from '../../utils/cn'
import css from './tooltip.css'

type Props = {
  /**
   * The contents of the tooltip.
   */
  children: React.ReactNode
  /**
   * Ref to the element that triggers this tooltip.
   */
  triggerRef: React.RefObject<HTMLElement>
  /**
   * The element that triggers this tooltip must have aria-describedby={id}.
   */
  id: string
} & BaseComponentProps

type State = 'init' | 'hidden' | 'visible'

export function Tooltip({ children, id, className, triggerRef }: Props) {
  const [state, setState] = React.useState<State>('init')
  const box = getTriggerBox(triggerRef)
  const Div = posed.div({
    init: {
      top: 0,
      width: 0,
      height: 0,
      left: 0
    },
    hidden: {
      top: box.top,
      y: 0,
      width: box.width,
      height: box.height,
      left: box.left,
      opacity: 0
    },
    visible: {
      top: box.top,
      y: box.height + 10,
      height: 'auto',
      width: 'auto',
      left: box.left,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 15 },
        default: { duration: 300 }
      }
    }
  })
  React.useEffect(() => {
    setState('hidden')
  }, [])
  React.useEffect(() => {
    const el: HTMLElement | null = triggerRef.current
    function onMouseEnter() {
      console.log('Tooltip effect onMouseEnter')
      setState('visible')
    }
    function onMouseLeave() {
      console.log('Tooltip effect onMouseLeave')
      setState('hidden')
    }
    console.log('Tooltip effect')
    if (el) {
      console.log('Tooltip effect adding event listeners')
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    }
    return () => {
      if (el) {
        console.log('Tooltip effect removing event listeners')
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [triggerRef])

  return ReactDOM.createPortal(
    <Div pose={state} className={cn(css.t, className)} role="tooltip" id={id}>
      {children}
    </Div>,
    document.body
  )
}

type Rect = {
  readonly bottom: number
  readonly height: number
  readonly left: number
  readonly right: number
  readonly top: number
  readonly width: number
}

function getTriggerBox(triggerRef: React.RefObject<HTMLElement>): Rect {
  if (triggerRef.current) {
    return triggerRef.current.getBoundingClientRect()
  }
  return {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0
  }
}
