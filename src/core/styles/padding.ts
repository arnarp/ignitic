import { StyleProps } from './StyleProps'
import * as css from './padding.module.css'
import { ClassValue } from 'itils'

export function padding({
  pA,
  pH,
  pV,
  pT,
  pR,
  pB,
  pL,
  pPrintA,
}: Pick<
  StyleProps,
  'pA' | 'pH' | 'pV' | 'pT' | 'pR' | 'pB' | 'pL' | 'pPrintA'
>): ClassValue {
  return [
    pA ? css[`pA${pA}`] : undefined,
    pH ? css[`pH${pH}`] : undefined,
    pV ? css[`pV${pV}`] : undefined,
    pT ? css[`pT${pT}`] : undefined,
    pR ? css[`pR${pR}`] : undefined,
    pB ? css[`pB${pB}`] : undefined,
    pL ? css[`pL${pL}`] : undefined,
    pPrintA ? css[`pPrintA${pPrintA}`] : undefined,
  ]
}
