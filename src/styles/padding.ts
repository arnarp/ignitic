import { StyleProps } from './styleClassValue'
import * as css from './padding.module.css'
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
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingPrint'
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
    [css.printXsm]: paddingPrintHorizontal == 'sm',
    [css.printXmd]: paddingPrintHorizontal == 'md',
    [css.printXlg]: paddingPrintHorizontal == 'lg',
    [css.printXxl]: paddingPrintHorizontal == 'xl',
    [css.printYsm]: paddingPrintVertical == 'sm',
    [css.printYmd]: paddingPrintVertical == 'md',
    [css.printYlg]: paddingPrintVertical == 'lg',
    [css.printYxl]: paddingPrintVertical == 'xl',
    [css.printTsm]: paddingPrintTop == 'sm',
    [css.printTmd]: paddingPrintTop == 'md',
    [css.printTlg]: paddingPrintTop == 'lg',
    [css.printTxl]: paddingPrintTop == 'xl',
    [css.printBsm]: paddingPrintBottom == 'sm',
    [css.printBmd]: paddingPrintBottom == 'md',
    [css.printBlg]: paddingPrintBottom == 'lg',
    [css.printBxl]: paddingPrintBottom == 'xl',
    [css.printLsm]: paddingPrintLeft == 'sm',
    [css.printLmd]: paddingPrintLeft == 'md',
    [css.printLlg]: paddingPrintLeft == 'lg',
    [css.printLxl]: paddingPrintLeft == 'xl',
    [css.printRsm]: paddingPrintRight == 'sm',
    [css.printRmd]: paddingPrintRight == 'md',
    [css.printRlg]: paddingPrintRight == 'lg',
    [css.printRxl]: paddingPrintRight == 'xl',
  }
}
