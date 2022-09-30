import * as css from './margin.module.css'

// export const margin = {
//   xs_negSmR: css.xsNegSmR,
//   xs_negSmL: css.xsNegSmL,
//   print_noneT: css.printNoneT
// }

import { StyleProps } from './styleClassValue'
import { ClassValue } from 'itils'

export function padding({
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingPrint,
  paddingRight,
  paddingTop,
  paddingVertical,
}: Pick<
  StyleProps,
  | 'padding'
  | 'paddingBottom'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingPrint'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingVertical'
>): ClassValue {
  return {
    [css.none]: padding == 'none',
    [css.sm]: padding == 'sm',
    [css.md]: padding == 'md',
    [css.lg]: padding == 'lg',
    [css.xl]: padding == 'xl',
    [css.xSm]: paddingHorizontal == 'sm',
    [css.xMd]: paddingHorizontal == 'md',
    [css.xLg]: paddingHorizontal == 'lg',
    [css.xXl]: paddingHorizontal == 'xl',
    [css.ySm]: paddingVertical == 'sm',
    [css.yMd]: paddingVertical == 'md',
    [css.yLg]: paddingVertical == 'lg',
    [css.yXl]: paddingVertical == 'xl',
    [css.tSm]: paddingTop == 'sm',
    [css.tMd]: paddingTop == 'md',
    [css.tLg]: paddingTop == 'lg',
    [css.tXl]: paddingTop == 'xl',
    [css.bSm]: paddingBottom == 'sm',
    [css.bMd]: paddingBottom == 'md',
    [css.bLg]: paddingBottom == 'lg',
    [css.bXl]: paddingBottom == 'xl',
    [css.lSm]: paddingLeft == 'sm',
    [css.lMd]: paddingLeft == 'md',
    [css.lLg]: paddingLeft == 'lg',
    [css.lXl]: paddingLeft == 'xl',
    [css.rSm]: paddingRight == 'sm',
    [css.rMd]: paddingRight == 'md',
    [css.rLg]: paddingRight == 'lg',
    [css.rXl]: paddingRight == 'xl',
    [css.printNone]: paddingPrint == 'none',
    [css.printSm]: paddingPrint == 'sm',
    [css.printMd]: paddingPrint == 'md',
    [css.printLg]: paddingPrint == 'lg',
    [css.printXl]: paddingPrint == 'xl',
  }
}
