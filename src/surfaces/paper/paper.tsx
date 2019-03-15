import * as React from 'react'

import { BaseComponentProps } from '../../types/base-component-props'
import { cn } from '../../utils/cn'
import css from './paper.css'

type Props = {
  children: React.ReactNode
} & BaseComponentProps

export function Paper({ children, className, ...rest }: Props) {
  return (
    <div {...rest} className={cn(css.p, className)}>
      {children}
    </div>
  )
}
