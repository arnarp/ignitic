import * as React from 'react'
import ReactDOM from 'react-dom'
import posed from 'react-pose'

import { BaseComponentProps } from '../../types/base-component-props'
import { cn } from '../../utils/cn'
import css from './tooltip.css'

type DivProps = {
  triggerBox: Rect
  tooltipBox: Rect
  placement: TooltipPlacement
}

const Div = posed.div({
  init: {
    y: 0,
    x: 0,
    opacity: 0
  },
  hidden: {
    y: ({ triggerBox, tooltipBox, placement }: DivProps) =>
      calcY(placement, triggerBox, tooltipBox, 0),
    x: ({ triggerBox, tooltipBox, placement }: DivProps) =>
      calcX(placement, triggerBox, tooltipBox, 0),
    opacity: 0
  },
  visible: {
    y: ({ triggerBox, tooltipBox, placement }: DivProps) =>
      calcY(placement, triggerBox, tooltipBox, 10),
    x: ({ triggerBox, tooltipBox, placement }: DivProps) =>
      calcX(placement, triggerBox, tooltipBox, 10),
    opacity: 1
  }
})

export type TooltipPlacement = 'bottom' | 'top' | 'right' | 'left'

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
  placement?: TooltipPlacement
} & BaseComponentProps

type State = 'init' | 'hidden' | 'visible'

function calcX(
  placement: TooltipPlacement,
  triggerBox: Rect,
  tooltipBox: Rect,
  delta: number
) {
  switch (placement) {
    case 'left':
      return triggerBox.left - tooltipBox.width - delta
    case 'right':
      return triggerBox.right + delta
    case 'top':
    case 'bottom':
    default:
      return triggerBox.left + (triggerBox.width - tooltipBox.width) / 2
  }
}
function calcY(
  placement: TooltipPlacement,
  triggerBox: Rect,
  tooltipBox: Rect,
  delta: number
) {
  switch (placement) {
    case 'left':
    case 'right':
      return triggerBox.top + triggerBox.height / 2 - tooltipBox.height / 2
    case 'top':
      return triggerBox.top - tooltipBox.height - delta
    case 'bottom':
    default:
      return triggerBox.bottom + delta
  }
}

export function Tooltip({
  children,
  id,
  className,
  triggerRef,
  placement = 'bottom'
}: Props) {
  const [state, setState] = React.useState<State>('init')
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const tooltipBox = getBox(tooltipRef)
  console.log({ tooltipBox })
  const triggerBox = getBox(triggerRef)
  React.useEffect(() => {
    setState('hidden')
  }, [placement])
  React.useEffect(() => {
    const el: HTMLElement | null = triggerRef.current
    function onMouseEnter() {
      setState('visible')
    }
    function onMouseLeave() {
      setState('hidden')
    }
    console.log('Tooltip effect')
    if (el) {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    }
    return () => {
      if (el) {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [triggerRef])
  return ReactDOM.createPortal(
    <Div
      pose={state}
      ref={tooltipRef}
      className={cn(css.t, className)}
      role="tooltip"
      key={id}
      id={id}
      triggerBox={triggerBox}
      tooltipBox={tooltipBox}
      placement={placement}
    >
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

function getBox(triggerRef: React.RefObject<HTMLElement>): Rect {
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
