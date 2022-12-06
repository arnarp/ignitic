import { ClassValue } from 'itils'
import * as css from './color.module.css'
import { StyleProps } from './StyleProps'

export type Background =
  | 'transparent'
  | 'paper'
  | 'neutral'
  | 'brand'
  | 'primary'
  | 'secondary'

export type Color =
  | 'neutral'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'inherit'
  | 'current'

export type ColorProps = Partial<{
  /** To set the element's background */
  background: Background
  color: Color
}>

export function extractColorProps<T extends ColorProps>(props: T) {
  const { background, color, ...rest } = props
  return rest
}

export function color({
  background,
  color,
}: Pick<StyleProps, 'background' | 'color'>): ClassValue {
  return [background && css[background], color && css[`color${color}`]]
}
