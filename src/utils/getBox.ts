import { Rect } from 'itils/dist/types/dom'

export function getBox(triggerRef: React.RefObject<HTMLElement>): Rect {
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
