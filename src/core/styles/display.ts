import { StyleProps } from './StyleProps'
import * as css from './display.module.css'
import { ClassValue } from 'itils'

export function display({
  d,
  dPrint,
  dScreenXs,
  dScreenSm,
  dScreenMd,
  dScreenLg,
  dScreenXl,
}: Pick<
  StyleProps,
  | 'd'
  | 'dPrint'
  | 'dScreenXs'
  | 'dScreenSm'
  | 'dScreenMd'
  | 'dScreenLg'
  | 'dScreenXl'
>): ClassValue {
  return [
    d ? css[`d${d}`] : undefined,
    dPrint ? css[`dPrint${dPrint}`] : undefined,
    dScreenXs ? css[`dScreenXs${dScreenXs}`] : undefined,
    dScreenSm ? css[`dScreenSm${dScreenSm}`] : undefined,
    dScreenMd ? css[`dScreenMd${dScreenMd}`] : undefined,
    dScreenLg ? css[`dScreenLg${dScreenLg}`] : undefined,
    dScreenXl ? css[`dScreenXl${dScreenXl}`] : undefined,
  ]
}
