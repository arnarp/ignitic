import { StyleProps } from './StyleProps'
import * as css from './display.module.css'
import { ClassValue } from 'itils'

export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Display = 'none' | 'block' | 'inline' | 'flex'

export type DisplayProps = Partial<{
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

export function extractDisplayProps<T extends DisplayProps>(props: T) {
  const {
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
    ...rest
  } = props
  return rest
}

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
}: DisplayProps): ClassValue {
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
