import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import ReactDOM from 'react-dom'

import { useIsScrolling } from '../../hooks/use-is-scrolling'
import { useScrollPosition } from '../../hooks/use-scroll-position'
import { BaseComponentProps } from '../../types/base-component-props'
import { getBox } from '../../utils/getBox'
import { PosedTooltipDiv } from './posed-tooltip-div'
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

type State = 'measure before visible' | 'hidden' | 'visible'

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
  const timeoutRef = React.useRef<any>(null)
  const tooltipBox = getBox(tooltipRef)
  const triggerBox = getBox(triggerRef)
  const isScrolling = useIsScrolling()
  const scrollPosition = useScrollPosition()
  React.useEffect(() => {
    setState('hidden')
  }, [placement, isScrolling])
  React.useEffect(() => {
    if (state == 'measure before visible') {
      window.requestAnimationFrame(() => {
        setState('visible')
      })
    }
  }, [state])
  React.useEffect(() => {
    function onMouseEnter() {
      timeoutRef.current = setTimeout(() => {
        setState('measure before visible')
      }, enterDelay)
    }
    function onMouseLeave() {
      clearTimeout(timeoutRef.current)
      setState('hidden')
    }
    if (triggerRef.current) {
      triggerRef.current.addEventListener('mouseenter', onMouseEnter)
      triggerRef.current.addEventListener('mouseleave', onMouseLeave)
    }
    return () => {
      if (triggerRef.current) {
        triggerRef.current.removeEventListener('mouseenter', onMouseEnter)
        triggerRef.current.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [triggerRef, enterDelay])
  return ReactDOM.createPortal(
    <PosedTooltipDiv
      pose={pose(state)}
      ref={tooltipRef}
      className={cn(css.t, className)}
      role="tooltip"
      key={id}
      id={id}
      triggerBox={triggerBox}
      tooltipBox={tooltipBox}
      scrollPosition={scrollPosition}
      placement={placement}
    >
      {children}
    </PosedTooltipDiv>,
    document.body
  )
}

function pose(state: State): 'hidden' | 'visible' | 'measureBeforeVisible' {
  switch (state) {
    case 'visible':
      return 'visible'
    case 'measure before visible':
      return 'measureBeforeVisible'
    case 'hidden':
    default:
      return 'hidden'
  }
}
