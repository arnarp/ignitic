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
export type Spacing = 'sm' | 'md' | 'lg' | 'xl'
export type Display = 'none' | 'block' | 'inline' | 'flex'
export type Length = '0' | '4' | '6' | '12' | '100P'
export type BorderStyle = 'none' | 'thin'
export type BorderColor = 'neutral' | 'brand' | 'primary' | 'secondary'
export type BorderRadius = '0' | '4'

export type StyleProps = Partial<{
  /** To set the element's background */
  background: Background
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
  /** To set display */
  d: Display
  /** To set display for print */
  dPrint: Display
  /** To set display for screens 32rem (512px) and larger */
  dScreenXs: Display
  /** To set display for screens 40rem (640px) and larger */
  dScreenSm: Display
  /** To set display for screens 48rem (768px) and larger */
  dScreenMd: Display
  /** To set display for screens 64rem (1024) and larger */
  dScreenLg: Display
  /** To set display for screens 80rem (1280px) and larger */
  dScreenXl: Display
  /** Flex direction when display is flex */
  direction: 'col' | 'row'
  /** To set spacing for flex layout. Works only with `direction` prop. */
  spacing: Spacing
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
  /**
   * How the children should be aligned along the cross axis.
   *
   * For row the cross axis is vertical.
   * For col the cross axis is horizontal
   *
   * Default is `stretch`.
   *
   * - `stretch`: Children fill the container.
   * - `start`: Children are placed at the start of the cross axis.
   * - `end`: Children are placed at the end of the cross axis.
   * - `center`: Children are centered on the cross axis.
   * - `baseline`: Children are aligned, at the start of the cross axis,
   * such as their baselines align (baseline is the invisible line upon
   * which most letters “sit”). Useful when aligning text elements with
   * different font size and/or lineheight. Not appropriate when the cross axis
   * horizontal.
   *
   */
  crossAxisAlignment: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  /**
   * How the children should be aligned along the main axis.
   *
   * For row the main axis is horizontal.
   * For col the main axis is vertical.
   *
   * Default is `start`.
   *
   * - `start`: Children are placed at the start of the main axis.
   * - `end`: Children are placed at the end of the main axis.
   * - `space between`: Free space is distributed evenly between the children.
   * - `space around`: Free space is distributed evenly between the children
   * as well as half of that space before and after the first and last child.
   * - `space evenly`: Free space is distributed evenly between the children and
   * before and after the first and last child.
   */
  mainAxisAlignment:
    | 'start'
    | 'end'
    | 'center'
    | 'space between'
    | 'space around'
    | 'space evenly'
}>

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
    direction,
    spacing,
    crossAxisAlignment,
    mainAxisAlignment,
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
