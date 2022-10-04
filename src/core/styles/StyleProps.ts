import { ClassValue } from 'itils'
import { background } from './background'
import { border } from './border'
import { display } from './display'
import { margin } from './margin'
import { padding } from './padding'
import { size } from './size'

export type Background =
  | 'none'
  | 'paper'
  | 'neutral'
  | 'brand'
  | 'primary'
  | 'secondary'

export type Padding = 'o' | 'sm' | 'md' | 'lg' | 'xl'
export type Margin = 'negmd' | 'negsm' | 'o' | 'sm' | 'md' | 'lg' | 'xl'
export type Display = 'none' | 'block' | 'inline'
export type Length = '0' | '6' | '12' | '100P'
export type BorderStyle = 'none' | 'thin'
export type BorderColor = 'neutral' | 'brand' | 'primary' | 'secondary'
export type BorderRadius = '0' | '4'

export type StyleProps = {
  background?: Background
  pA?: Padding
  pH?: Padding
  pV?: Padding
  pT?: Padding
  pR?: Padding
  pB?: Padding
  pL?: Padding
  pPrintA?: Padding
  mA?: Margin
  mT?: Margin
  mH?: Margin
  mV?: Margin
  mB?: Margin
  mL?: Margin
  mR?: Margin
  mPrintA?: Margin
  d?: Display
  /** To set display for print */
  dPrint?: Display
  /** To set display for screens 32rem (512px) and larger */
  dScreenXs?: Display
  /** To set display for screens 40rem (640px) and larger */
  dScreenSm?: Display
  /** To set display for screens 48rem (768px) and larger */
  dScreenMd?: Display
  /** To set display for screens 64rem (1024) and larger */
  dScreenLg?: Display
  /** To set display for screens 80rem (1280px) and larger */
  dScreenXl?: Display
  /** To set element width */
  w?: Length
  /** To set element height */
  h?: Length
  /** Border style for all sides */
  borderA?: BorderStyle
  /** Border style for top */
  borderT?: BorderStyle
  /** Border style for right */
  borderR?: BorderStyle
  /** Border style for bottom */
  borderB?: BorderStyle
  /** Border style for left */
  borderL?: BorderStyle
  borderColor?: BorderColor
  borderRadius?: BorderRadius
}

export function extractStyleProps<T extends StyleProps>(props: T) {
  const {
    background,
    pA,
    pB,
    pH,
    pL,
    pPrintA,
    pR,
    pT,
    pV,
    mA,
    mT,
    mH,
    mV,
    mB,
    mL,
    mR,
    mPrintA,
    d,
    dPrint,
    dScreenXs,
    dScreenSm,
    dScreenMd,
    dScreenLg,
    dScreenXl,
    w,
    h,
    borderA,
    borderT,
    borderB,
    borderL,
    borderR,
    borderColor,
    borderRadius,
    ...rest
  } = props
  return rest
}

export function styleClassValue(
  props: StyleProps,
  def: StyleProps = {}
): ClassValue {
  const merged = Object.assign(def, props)
  return [
    background(merged),
    padding(merged),
    margin(merged),
    display(merged),
    size(merged),
    border(merged),
  ]
}
