import { AnimationProps, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import { Rect } from 'itils/dist/types/dom'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { useIsScrolling } from '../../hooks/use-is-scrolling'
import { ScrollPosition, useScrollPosition } from '../../hooks/use-scroll-position'
import { Surface } from '../../surfaces/surface'
import { BaseComponentProps } from '../../types/base-component-props'
import { getBox } from '../../utils/getBox'
import css from './tooltip.css'
import { TooltipPlacement } from './types'


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
  enterDelay?: number
} & BaseComponentProps

type State = 'measureBeforeVisible' | 'hidden' | 'visible'

export function Tooltip({
  children,
  id,
  className,
  triggerRef,
  placement = 'bottom',
  enterDelay = 100
}: Props) {
  const [state, setState] = React.useState<State>('hidden')
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const mouseEnterTimeoutRef = React.useRef<any>(null)
  const mouseUpTimeoutRef = React.useRef<any>(null)
  const measureTimeoutRef = React.useRef<any>(null)
  const tooltipBox = getBox(tooltipRef)
  const triggerBox = getBox(triggerRef)
  const isScrolling = useIsScrolling()
  const scrollPosition = useScrollPosition()
  React.useEffect(() => {
    setState('hidden')
  }, [placement, isScrolling])
  React.useEffect(() => {
    if (state == 'measureBeforeVisible') {
      measureTimeoutRef.current = setTimeout(() => {
        if (state == 'measureBeforeVisible') {
          setState('visible')
        }
      }, 100)
    }
    return () => {
      clearTimeout(measureTimeoutRef.current)
    }
  }, [state, placement])
  React.useEffect(() => {
    function onMouseEnter(ev: MouseEvent) {
      mouseEnterTimeoutRef.current = setTimeout(() => {
        setState('measureBeforeVisible')
      }, enterDelay)
    }
    function onMouseUp() {
      console.log('mouseup')
      mouseUpTimeoutRef.current = setTimeout(() => {
        setState('hidden')
      }, 2000)
    }
    function onMouseLeave() {
      clearTimeout(mouseEnterTimeoutRef.current)
      clearTimeout(mouseUpTimeoutRef.current)
      setState('hidden')
    }
    if (triggerRef.current) {
      triggerRef.current.addEventListener('mouseenter', onMouseEnter)
      triggerRef.current.addEventListener('mouseleave', onMouseLeave)
      triggerRef.current.addEventListener('mouseup', onMouseUp)
    }
    return () => {
      if (triggerRef.current) {
        triggerRef.current.removeEventListener('mouseenter', onMouseEnter)
        triggerRef.current.removeEventListener('mouseleave', onMouseLeave)
        triggerRef.current.removeEventListener('mouseup', onMouseUp)
        clearTimeout(mouseEnterTimeoutRef.current)
        clearTimeout(mouseUpTimeoutRef.current)
      }
    }
  }, [triggerRef, enterDelay, placement])
  const variants: AnimationProps['variants'] = {
    measureBeforeVisible: {
      y: calcY(placement, triggerBox, tooltipBox, 0, scrollPosition),
      x: calcX(placement, triggerBox, tooltipBox, 0, scrollPosition),
      opacity: 0,
      transition: {
        duration: 0
      }
    },
    hidden: {
      y: calcY(placement, triggerBox, tooltipBox, 0, scrollPosition),
      x: calcX(placement, triggerBox, tooltipBox, 0, scrollPosition),
      opacity: 0
    },
    visible: {
      y: calcY(placement, triggerBox, tooltipBox, 10, scrollPosition),
      x: calcX(placement, triggerBox, tooltipBox, 10, scrollPosition),
      opacity: 1
    }
  }
  return ReactDOM.createPortal(
    <motion.div
      ref={tooltipRef}
      className={cn(css.t, className)}
      role="tooltip"
      key={id}
      id={id}
      variants={variants}
      animate={state}
    >
      <Surface className={css.inner} color="neutral" rounded>
        {children}
      </Surface>
    </motion.div>,
    document.body
  )
}

function calcX(
  placement: TooltipPlacement,
  triggerBox: Rect,
  tooltipBox: Rect,
  delta: number,
  scrollPosition: ScrollPosition
) {
  switch (placement) {
    case 'left':
      return triggerBox.left - tooltipBox.width - delta + scrollPosition.x
    case 'right':
      return triggerBox.right + delta + scrollPosition.x
    case 'top':
    case 'bottom':
    default:
      return (
        triggerBox.left +
        (triggerBox.width - tooltipBox.width) / 2 +
        scrollPosition.x
      )
  }
}
function calcY(
  placement: TooltipPlacement,
  triggerBox: Rect,
  tooltipBox: Rect,
  delta: number,
  scrollPosition: ScrollPosition
) {
  switch (placement) {
    case 'left':
    case 'right':
      return (
        triggerBox.top +
        triggerBox.height / 2 -
        tooltipBox.height / 2 +
        scrollPosition.y
      )
    case 'top':
      return triggerBox.top - tooltipBox.height - delta + scrollPosition.y
    case 'bottom':
    default:
      return triggerBox.bottom + delta + scrollPosition.y
  }
}
