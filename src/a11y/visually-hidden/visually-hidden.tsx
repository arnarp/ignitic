import * as React from 'react'

import * as css from './visually-hidden.css'

type Props = {
  children: React.ReactNode
}

export function VisuallyHidden(props: Props) {
  return <div className={css.style}>{props.children}</div>
}
