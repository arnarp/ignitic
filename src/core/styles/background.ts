import { ClassValue } from 'itils'
import * as css from './background.module.css'
import { StyleProps } from './StyleProps'

export function background({ b }: Pick<StyleProps, 'b'>): ClassValue {
  return b && b !== 'none' ? css[b] : undefined
}
