import { Rect } from 'itils/dist/types/dom'
import posed from 'react-pose'

import { ScrollPosition } from '../../hooks/use-scroll-position'
import { TooltipPlacement } from './types'

type DivProps = {
  triggerBox: Rect
  tooltipBox: Rect
  placement: TooltipPlacement
  scrollPosition: ScrollPosition
}

export const PosedTooltipDiv = posed.div({
  measureBeforeVisible: {
    y: ({ triggerBox, tooltipBox, placement, scrollPosition }: DivProps) =>
      calcY(placement, triggerBox, tooltipBox, 0, scrollPosition),
    x: ({ triggerBox, tooltipBox, placement, scrollPosition }: DivProps) =>
      calcX(placement, triggerBox, tooltipBox, 0, scrollPosition),
    opacity: 0,
    transition: {
      duration: 0
    }
  },
  hidden: {
    y: ({ triggerBox, tooltipBox, placement, scrollPosition }: DivProps) =>
      calcY(placement, triggerBox, tooltipBox, 0, scrollPosition),
    x: ({ triggerBox, tooltipBox, placement, scrollPosition }: DivProps) =>
      calcX(placement, triggerBox, tooltipBox, 0, scrollPosition),
    opacity: 0
  },
  visible: {
    y: ({ triggerBox, tooltipBox, placement, scrollPosition }: DivProps) =>
      calcY(placement, triggerBox, tooltipBox, 10, scrollPosition),
    x: ({ triggerBox, tooltipBox, placement, scrollPosition }: DivProps) =>
      calcX(placement, triggerBox, tooltipBox, 10, scrollPosition),
    opacity: 1
  }
})

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
