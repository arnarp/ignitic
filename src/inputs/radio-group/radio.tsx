import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './radio-group.css'
import { RadioGroupContext } from './radio-group-context'

type Props<T> = {
  value: T
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function Radio<T extends string>({
  className,
  onClick,
  value,
  ...rest
}: Props<T>) {
  const [hasFocus, setHasFocus] = React.useState(false)
  const context = React.useContext(RadioGroupContext)
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    context.registerRadio(value, ref)
  }, [])

  React.useEffect(() => {
    context.registerRef(value, ref)
  })

  function onKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    const event = ev
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        context.selectNextRadio()
        break
      }
      case 'ArrowLeft':
      case 'ArrowUp': {
        context.selectPreviousRadio()
        break
      }
      default:
        break
    }
  }

  const checked = context.selectedValue == value
  return (
    <div
      className={cn(
        css.radio,
        {
          [css.checked]: checked,
          [css.focus]: hasFocus
        },
        className
      )}
      {...rest}
    >
      <div className={css.innerCircle} />
      <input
        ref={ref}
        className={css.input}
        role="radio"
        aria-checked={checked}
        onClick={() => context.onSelect(value)}
        tabIndex={
          checked ||
          (context.selectedValue == undefined && context.firstValue == value)
            ? 0
            : -1
        }
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
