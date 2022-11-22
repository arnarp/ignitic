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
  direction,
  spacing,
  crossAxisAlignment,
  mainAxisAlignment,
}: Pick<
  StyleProps,
  | 'd'
  | 'dPrint'
  | 'dScreenXs'
  | 'dScreenSm'
  | 'dScreenMd'
  | 'dScreenLg'
  | 'dScreenXl'
  | 'direction'
  | 'spacing'
  | 'crossAxisAlignment'
  | 'mainAxisAlignment'
>): ClassValue {
  return [
    d ? css[`d${d}`] : undefined,
    dPrint ? css[`dPrint${dPrint}`] : undefined,
    dScreenXs ? css[`dScreenXs${dScreenXs}`] : undefined,
    dScreenSm ? css[`dScreenSm${dScreenSm}`] : undefined,
    dScreenMd ? css[`dScreenMd${dScreenMd}`] : undefined,
    dScreenLg ? css[`dScreenLg${dScreenLg}`] : undefined,
    dScreenXl ? css[`dScreenXl${dScreenXl}`] : undefined,
    direction ? css[direction] : undefined,
    spacing ? css[`spacing${spacing}`] : undefined,
    crossAxisAlignment ? css[`crossA${crossAxisAlignment}`] : undefined,
    mainAxisAlignment
      ? mainAxisAlignment == 'space around'
        ? css.mainAaround
        : mainAxisAlignment === 'space between'
        ? css.mainAbetween
        : mainAxisAlignment == 'space evenly'
        ? css.mainAevenly
        : css[`mainA${mainAxisAlignment}`]
      : undefined,
  ]
}
