import { ClassValue } from 'itils'
import * as css from './background.module.css'
import { StyleProps } from './StyleProps'

export function background({
  background,
}: Pick<StyleProps, 'background'>): ClassValue {
  return background && background !== 'none' ? css[background] : undefined
}
