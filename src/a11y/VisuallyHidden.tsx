import * as React from 'react'
import * as css from './VisuallyHidden.module.css'

type Props = {
  children: React.ReactNode
}

export function VisuallyHidden(props: Props) {
  return <div className={css.visuallyHidden}>{props.children}</div>
}

export const visuallyHiddenClass: string = css.visuallyHidden
