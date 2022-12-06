import { AnimatePresence, motion } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import React from 'react'
import { useToggleLayer } from 'react-laag'
import { styleClassValue, styles } from '../core'
import { IgniticContext } from '../core/context/IgniticContext'
import { useIsScrolling } from '../hooks/use-is-scrolling'
import { BaseComponentProps } from '../types/base-component-props'
import * as css from './Tooltip.module.css'

export type TooltipPlacement =
  | 'TOP_CENTER'
  | 'BOTTOM_CENTER'
  | 'LEFT_CENTER'
  | 'RIGHT_CENTER'

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

export function Tooltip({
  children,
  id,
  triggerRef,
  className,
  style,
  placement = 'BOTTOM_CENTER',
  enterDelay = 100,
}: Props) {
  const igniticSettings = React.useContext(IgniticContext)
  const mouseEnterTimeoutRef = React.useRef<any>(null)
  const mouseUpTimeoutRef = React.useRef<any>(null)
  const isScrolling = useIsScrolling()

  const [layerElement, props] = useToggleLayer(
    ({ isOpen, layerProps, layerSide }) => {
      return (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              {...layerProps}
              ref={layerProps.ref}
              className={cn(css.tooltip, className)}
              role="tooltip"
              key={id}
              id={id}
              initial={{
                opacity: 0,
                scale: 0.9,
                x: layerSide == 'left' ? 8 : layerSide == 'right' ? -8 : 0,
                y:
                  layerSide == 'top'
                    ? 8
                    : layerSide == 'bottom'
                    ? -8
                    : undefined,
              }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{
                opacity: 0,
                scale: 0.9,
                x: layerSide == 'left' ? 8 : layerSide == 'right' ? -8 : 0,
                y:
                  layerSide == 'top'
                    ? 8
                    : layerSide == 'bottom'
                    ? -8
                    : undefined,
              }}
            >
              <div
                className={cn(
                  css.inner,
                  styleClassValue({ background: 'paper' }),
                  styles.boxShadow.paper
                )}
                color="neutral"
                style={style}
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )
    },
    {
      placement: {
        anchor: placement,
        autoAdjust: true,
        triggerOffset: 8,
        scrollOffset: 16,
      },
      closeOnOutsideClick: true,
    }
  )
  React.useEffect(() => {
    props.close()
  }, [placement, isScrolling])
  React.useEffect(() => {
    function onMouseEnter(ev: MouseEvent) {
      mouseEnterTimeoutRef.current = setTimeout(() => {
        if (triggerRef.current && igniticSettings.container) {
          props.open({
            clientRect: triggerRef.current.getBoundingClientRect(),
            target: igniticSettings.container,
          })
        }
      }, enterDelay)
    }
    function onMouseUp() {
      console.log('mouseup')
      mouseUpTimeoutRef.current = setTimeout(() => {
        props.close()
      }, 2000)
    }
    function onMouseLeave() {
      clearTimeout(mouseEnterTimeoutRef.current)
      clearTimeout(mouseUpTimeoutRef.current)
      props.close()
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
  return layerElement
}
