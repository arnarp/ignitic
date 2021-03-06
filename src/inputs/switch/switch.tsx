import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './switch.css'
import { misc } from '../../styles/misc'

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
  const [hasFocus, setHasFocus] = React.useState(false)
  return (
    <span
      className={cn(css.container, {
        [css.colorDefault]: color == 'default',
        [css.colorPrimary]: color == 'primary',
        [css.colorSecondary]: color == 'secondary',
        [css.colorNeutral]: color == 'neutral',
        [css.checked]: checked,
        [misc.outline]: hasFocus
      })}
    >
      <input
        {...rest}
        type="checkbox"
        className={css.input}
        checked={checked}
        aria-checked={checked}
        onChange={onChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <span className={css.slider} />
      <span className={css.knob} />
    </span>
  )
}
