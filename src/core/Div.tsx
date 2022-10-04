import { ClassValue, cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import * as css from './Div.module.css'
import { extractStyleProps, styleClassValue, StyleProps } from './styles'

type Props = {
  boxShaddow?: 'none' | 'paper'
} & StyleProps &
  React.HTMLAttributes<HTMLDivElement>

export function Div(props: Props) {
  const { className, boxShaddow, ...rest } = extractStyleProps(props)
  return (
    <div
      {...rest}
      className={cn(
        styleClassValue(props),
        {
          [css.paperShaddow]: boxShaddow === 'paper',
        },
        className
      )}
    />
  )
}

// export function boxClassName({
//   background,
//   padding,
// }: // rounded,
// // border,
// StyleProps): ClassValue {
//   return {
//     // [css.rounded]: rounded == true,
//     // [css.borderNeutral]: border == 'neutral',
//     // [css.borderDefault]: border == 'default',
//     // [css.borderPrimary]: border == 'primary',
//     // [css.borderSecondary]: border == 'secondary',
//   }
// }
