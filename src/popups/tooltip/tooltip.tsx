import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import ReactDOM from 'react-dom'

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

type State = 'init' | 'hidden' | 'visible'

export function Tooltip({
  children,
  id,
  className,
  triggerRef,
  placement = 'bottom',
  enterDelay = 0
}: Props) {
  const [state, setState] = React.useState<State>('init')
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<any>(null)
  const tooltipBox = getBox(tooltipRef)
  const triggerBox = getBox(triggerRef)
  React.useEffect(() => {
    setState('hidden')
  }, [placement])
  React.useEffect(() => {
    const el: HTMLElement | null = triggerRef.current
    function onMouseEnter() {
      timeoutRef.current = setTimeout(() => {
        setState('visible')
      }, enterDelay)
    }
    function onMouseLeave() {
      clearTimeout(timeoutRef.current)
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
  }, [triggerRef, enterDelay])
  return ReactDOM.createPortal(
    <PosedTooltipDiv
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
    </PosedTooltipDiv>,
    document.body
  )
}
