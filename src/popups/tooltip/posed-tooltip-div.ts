import posed from 'react-pose'

import { Rect } from '../../utils/getBox'
import { TooltipPlacement } from './types'

type DivProps = {
  triggerBox: Rect
  tooltipBox: Rect
  placement: TooltipPlacement
}

export const PosedTooltipDiv = posed.div({
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
