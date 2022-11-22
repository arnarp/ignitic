import { ClassValue } from 'itils'
import * as css from './text.module.css'

export type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
export type FontVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'p'
  | 'small'
  | 'inherit'

export type FontProps = Partial<{
  fontVariant: FontVariant
  /**
   * Sets the weight (or boldness) of the font.
   *
   * Will override values set by `fontVariant` prop.
   *
   * Follows [MDN common weight name mapping](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping)
   *
   * | name    | value |
   * | :------ | ----: |
   * | bold    |   700 |
   * | medium  |   500 |
   * | regular |   400 |
   * | light   |   300 |
   * | thin    |   100 |
   */
  fontWeight: 'bold' | 'medium' | 'regular' | 'light'
  fontNumeric: 'tabular'
  textAlign: 'left' | 'center' | 'right' | 'justify'
}>

export function extractFontProps<T extends FontProps>(props: T) {
  const { fontVariant, fontWeight, fontNumeric, textAlign, ...rest } = props
  return rest
}

export function font({
  fontVariant,
  fontWeight,
  fontNumeric,
  textAlign,
}: FontProps): ClassValue {
  return [
    fontVariant && css[fontVariant],
    fontWeight && css[fontWeight],
    fontNumeric && css[fontNumeric],
    textAlign && css[textAlign],
  ]
}
