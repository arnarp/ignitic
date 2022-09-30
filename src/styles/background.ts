import { ClassValue } from 'itils'
import * as css from './background.module.css'
import { StyleProps } from './styleClassValue'

export function background({
  background,
}: Pick<StyleProps, 'background'>): ClassValue {
  return {
    [css.paperBackground]: background == 'paper',
    [css.neutralBackground]: background == 'neutral',
    [css.defaultBackground]: background == 'default',
    [css.primaryBackground]: background == 'primary',
    [css.secondaryBackground]: background == 'secondary',
  }
}
