import { ClassValue } from 'itils'
import { border } from './border'
import { color, ColorProps, extractColorProps } from './color'
import { display, DisplayProps, extractDisplayProps } from './display'
import { margin } from './margin'
import { padding } from './padding'
import { size } from './size'
import { extractFontProps, font, FontProps } from './text'

export type Padding = 'o' | 'sm' | 'md' | 'lg' | 'xl'
export type Margin = 'negmd' | 'negsm' | 'o' | 'sm' | 'md' | 'lg' | 'xl'
export type Length = '0' | '4' | '6' | '12' | 'full'
export type BorderStyle = 'none' | 'thin'
export type BorderColor = 'neutral' | 'brand' | 'primary' | 'secondary'
export type BorderRadius = '0' | '4'

export type StyleProps = Partial<{
  /** Pading all sides */
  pA: Padding
  /** Padding horizontal */
  pH: Padding
  /** Padding vertical */
  pV: Padding
  /** Padding top */
  pT: Padding
  /** Padding right */
  pR: Padding
  /** Padding bottom */
  pB: Padding
  /** Padding left */
  pL: Padding
  /** Padding all sides for print */
  pPrintA: Padding
  /** Margin all sides */
  mA: Margin
  /** Margin top */
  mT: Margin
  /** Margin horizontal */
  mH: Margin
  /** Margin vertical */
  mV: Margin
  /** Margin bottom */
  mB: Margin
  /** Margin left */
  mL: Margin
  /** Margin right */
  mR: Margin
  /** Margin all sides for print */
  mPrintA: Margin

  /** To set element width */
  w: Length
  /** To set element height */
  h: Length
  /** Border style for all sides */
  borderA: BorderStyle
  /** Border style for top */
  borderT: BorderStyle
  /** Border style for right */
  borderR: BorderStyle
  /** Border style for bottom */
  borderB: BorderStyle
  /** Border style for left */
  borderL: BorderStyle
  /** Border color */
  borderColor: BorderColor
  /** Border radius */
  borderRadius: BorderRadius
}> &
  DisplayProps &
  FontProps &
  ColorProps

export function extractStyleProps<T extends StyleProps>(props: T) {
  const {
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
  return extractDisplayProps(extractColorProps(extractFontProps(rest)))
}

export function styleClassValue(
  props: StyleProps,
  def: StyleProps = {}
): ClassValue {
  const merged = Object.assign(def, props)
  return [
    color(merged),
    padding(merged),
    margin(merged),
    display(merged),
    size(merged),
    border(merged),
    font(merged),
  ]
}
