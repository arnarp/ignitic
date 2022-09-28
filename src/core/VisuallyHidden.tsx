import * as React from 'react'
import * as css from './VisuallyHidden.module.css'

type Props = {
  children: React.ReactNode
}

/**
 * A component that makes it's content visually hidden while keeping it
 * in the accessibility tree.
 */
export function VisuallyHidden(props: Props) {
  return (
    <div test-id="vh" className={css.visuallyHidden}>
      {props.children}
    </div>
  )
}

export const visuallyHiddenClass: string = css.visuallyHidden
