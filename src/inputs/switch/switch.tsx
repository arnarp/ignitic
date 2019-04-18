import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './switch.css'

export type SwitchColor = 'default' | 'primary' | 'secondary' | 'neutral'

type Props = {
  color: SwitchColor
  checked: boolean
  onChange?: () => void
}

export function Switch({
  color = 'neutral',
  checked,
  onChange,
  ...rest
}: Props) {
  return (
    <span
      className={cn(css.container, {
        [css.colorDefault]: color == 'default',
        [css.colorPrimary]: color == 'primary',
        [css.colorSecondary]: color == 'secondary',
        [css.colorNeutral]: color == 'neutral',
        [css.checked]: checked
      })}
    >
      <input
        {...rest}
        type="checkbox"
        className={css.input}
        checked={checked}
        aria-checked={checked}
        onChange={onChange}
      />
      <span className={css.slider} />
      <span className={css.knob} />
    </span>
  )
}
