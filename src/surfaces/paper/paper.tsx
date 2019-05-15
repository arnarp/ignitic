import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { BaseComponentProps } from '../../types/base-component-props'
import { Surface } from '../surface'
import css from './paper.css'

type Props = {
  children: React.ReactNode
} & BaseComponentProps &
  React.DOMAttributes<HTMLDivElement>

export function Paper({ children, className, ...rest }: Props) {
  return (
    <Surface rounded color="paper" {...rest} className={cn(css.p, className)}>
      {children}
    </Surface>
  )
}
