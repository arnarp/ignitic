import { StyleProps } from './StyleProps'
import * as css from './Size.module.css'
import { ClassValue } from 'itils'

export function size({ w, h }: Pick<StyleProps, 'w' | 'h'>): ClassValue {
  return [w ? css[`w${w}`] : undefined, h ? css[`h${h}`] : undefined]
}
