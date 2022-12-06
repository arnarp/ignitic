import { StyleProps } from './StyleProps'
import * as css from './border.module.css'
import { ClassValue } from 'itils'

export function border({
  borderA,
  borderT,
  borderB,
  borderL,
  borderR,
  borderColor,
  borderRadius,
}: Pick<
  StyleProps,
  | 'borderA'
  | 'borderT'
  | 'borderB'
  | 'borderL'
  | 'borderR'
  | 'borderColor'
  | 'borderRadius'
>): ClassValue {
  return [
    borderA ? css[`borderA${borderA}`] : undefined,
    borderT ? css[`borderT${borderT}`] : undefined,
    borderB ? css[`borderB${borderB}`] : undefined,
    borderL ? css[`borderL${borderL}`] : undefined,
    borderR ? css[`borderR${borderR}`] : undefined,
    borderColor ? css[borderColor] : undefined,
    borderRadius ? css[`borderRadius${borderRadius}`] : undefined,
  ]
}
