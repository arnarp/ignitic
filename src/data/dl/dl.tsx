import * as React from 'react'
import css from './dl.css'
import { cn } from 'itils/dist/misc/cn'
import { DlContextType, DlContext } from './dl-context'
import { TextColor } from '../../core/text'

type Variant =
  | {
      variant: 'grid'
      align: 'spread' | 'centered'
      ratio: '1:1' | '1:2' | '1:3' | '1:4' | '2:1' | '3:1' | '4:1'
    }
  | {
      variant: 'vertical'
    }

type Props = {
  children: React.ReactNode
  semi?: boolean
  numericData?: boolean
  dtColor?: TextColor
  ddColor?: TextColor
} & Variant &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDListElement>,
    HTMLDListElement
  >

export function Dl({
  children,
  className,
  semi,
  numericData,
  dtColor,
  ddColor,
  ...props
}: Props) {
  const spread = { ...props }
  delete spread.variant
  delete (spread as any)['align']
  delete (spread as any)['ratio']

  const contextValue = React.useMemo(
    function createContextValue(): DlContextType {
      return {
        dtColor,
        ddColor
      }
    },
    [dtColor, ddColor]
  )

  return (
    <DlContext.Provider value={contextValue}>
      <dl
        className={cn(
          css.dl,
          {
            [css.semi]: semi,
            [css.numericData]: numericData,
            [css.grid]: props.variant == 'grid',
            [css.oneOne]: props.variant == 'grid' && props.ratio == '1:1',
            [css.oneTwo]: props.variant == 'grid' && props.ratio == '1:2',
            [css.oneThree]: props.variant == 'grid' && props.ratio == '1:3',
            [css.oneFour]: props.variant == 'grid' && props.ratio == '1:4',
            [css.twoOne]: props.variant == 'grid' && props.ratio == '2:1',
            [css.threeOne]: props.variant == 'grid' && props.ratio == '3:1',
            [css.fourOne]: props.variant == 'grid' && props.ratio == '4:1',
            [css.centered]: props.variant == 'grid' && props.align == 'centered'
          },
          className
        )}
        {...spread}
      >
        {children}
      </dl>
    </DlContext.Provider>
  )
}
