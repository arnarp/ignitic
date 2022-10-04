import { StyleProps } from './StyleProps'
import * as css from './margin.module.css'
import { ClassValue } from 'itils'

export function margin({
  mA,
  mH,
  mV,
  mT,
  mR,
  mB,
  mL,
  mPrintA,
}: Pick<
  StyleProps,
  'mA' | 'mH' | 'mV' | 'mT' | 'mR' | 'mB' | 'mL' | 'mPrintA'
>): ClassValue {
  return [
    mA ? css[`mA${mA}`] : undefined,
    mH ? css[`mH${mH}`] : undefined,
    mV ? css[`mV${mV}`] : undefined,
    mT ? css[`mT${mT}`] : undefined,
    mR ? css[`mR${mR}`] : undefined,
    mB ? css[`mB${mB}`] : undefined,
    mL ? css[`mL${mL}`] : undefined,
    mPrintA ? css[`mPrintA${mPrintA}`] : undefined,
  ]
}
