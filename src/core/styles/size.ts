import { StyleProps } from './StyleProps'
import * as css from './Size.module.css'
import { ClassValue } from 'itils'

export type Length = '0' | '4' | '6' | '12' | '48' | '100p'

export type SizeProps = Partial<{
  /** To set element width */
  w: Length
  maxW: Length
  /** To set element height */
  h: Length
}>

export function extractSizeProps<T extends SizeProps>(props: T) {
  const { w, h, maxW, ...rest } = props
  return rest
}

export function size({ w, h, maxW }: SizeProps): ClassValue {
  return [w && css[`w${w}`], h && css[`h${h}`], maxW && css[`maxW${maxW}`]]
}
