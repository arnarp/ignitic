import React from 'react'
import * as css from './Dl.module.css'
import { cn } from 'itils/dist/misc/cn'
import { DlContextType, DlContext } from './DlContext'
import {
  Color,
  extractStyleProps,
  styleClassValue,
  StyleProps,
} from '../../core'

export type DLVariant =
  | {
      variant: 'grid'
      align: 'spread' | 'centered'
      ratio: '1:1' | '1:2' | '1:3' | '1:4' | '2:1' | '3:1' | '4:1'
    }
  | {
      variant: 'vertical'
      align: undefined
      ratio: undefined
    }
  | {
      variant: undefined
      align: undefined
      ratio: undefined
    }

type DlProps = {
  semi?: boolean
  dtColor?: Color
  ddColor?: Color
} & DLVariant &
  StyleProps &
  React.HTMLAttributes<HTMLDListElement>

export function Dl(props: DlProps) {
  const { className, dtColor, ddColor, semi, ...rest } =
    extractStyleProps(props)

  delete rest['variant']
  delete rest['align']
  delete rest['ratio']

  const contextValue = React.useMemo(
    function createContextValue(): DlContextType {
      return props
    },
    [dtColor, ddColor, props.variant, props.align, props.ratio]
  )

  return (
    <DlContext.Provider value={contextValue}>
      <dl
        className={cn(
          styleClassValue(props, {
            mA: 'o',
            pA: 'o',
          }),
          {
            [css.semi]: semi,
            [css.grid]: props.variant == 'grid',
            [css.vertical]: props.variant == 'vertical',
            [css.oneOne]: props.variant == 'grid' && props.ratio == '1:1',
            [css.oneTwo]: props.variant == 'grid' && props.ratio == '1:2',
            [css.oneThree]: props.variant == 'grid' && props.ratio == '1:3',
            [css.oneFour]: props.variant == 'grid' && props.ratio == '1:4',
            [css.twoOne]: props.variant == 'grid' && props.ratio == '2:1',
            [css.threeOne]: props.variant == 'grid' && props.ratio == '3:1',
            [css.fourOne]: props.variant == 'grid' && props.ratio == '4:1',
          },
          className
        )}
        {...rest}
      />
    </DlContext.Provider>
  )
}
