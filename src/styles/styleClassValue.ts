import { ClassValue } from 'itils'
import { background } from './background'
import { padding } from './padding'

export type BackgroundProp =
  | 'none'
  | 'paper'
  | 'neutral'
  | 'default'
  | 'primary'
  | 'secondary'

export type PaddingProp = 'none' | 'sm' | 'md' | 'lg' | 'xl'
export type MarginProp = '-md' | '-sm' | 'none' | 'sm' | 'md' | 'lg' | 'xl'

export type StyleProps = {
  background?: BackgroundProp
  padding?: PaddingProp
  paddingTop?: PaddingProp
  paddingHorizontal?: PaddingProp
  paddingVertical?: PaddingProp
  paddingBottom?: PaddingProp
  paddingLeft?: PaddingProp
  paddingRight?: PaddingProp
  paddingPrint?: PaddingProp
  margin?: MarginProp
  marginTop?: MarginProp
  marginHorizontal?: MarginProp
  marginVertical?: MarginProp
  marginBottom?: MarginProp
  marginLeft?: MarginProp
  marginRight?: MarginProp
  marginPrint?: MarginProp
}

export function extractStyleProps<T extends StyleProps>(props: T) {
  const {
    background,
    padding,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingPrint,
    paddingRight,
    paddingTop,
    paddingVertical,
    margin,
    marginTop,
    marginHorizontal,
    marginVertical,
    marginBottom,
    marginLeft,
    marginRight,
    marginPrint,
    ...rest
  } = props
  return rest
}

export function styleClassValue(props: StyleProps): ClassValue {
  return [background(props), padding(props)]
}
