import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import css from './radio-group.css'
import { RadioGroupContext, RadioGroupContextType } from './radio-group-context'

export type InputColor = 'default' | 'primary' | 'secondary' | 'neutral'

type Props<T> = {
  selectedValue?: T
  setSelectedValue: (value: T) => void
  color?: InputColor
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

/**
 * A radio group is a set of checkable buttons, known as radio buttons,
 * where no more than one of the buttons can be checked at a time.
 * Some implementations may initialize the set with all buttons in the
 * unchecked state in order to force the user to check one of the buttons
 * before moving past a certain point in the workflow.
 */
export function RadioGroup<T extends string>({
  children,
  className,
  selectedValue,
  setSelectedValue,
  color = 'neutral',
  ...rest
}: Props<T>) {
  const radios = React.useRef<T[]>([])
  const refMap = React.useRef(
    new Map<string, React.RefObject<HTMLInputElement>>()
  )

  function registerRadio(radioValue: T) {
    radios.current.push(radioValue)
  }

  function registerRef(
    radioValue: string,
    ref: React.RefObject<HTMLInputElement>
  ) {
    refMap.current.set(radioValue, ref)
  }

  function selectNextRadio() {
    const noOfItems = radios.current.length
    const currentSelectedIndex = radios.current.findIndex(
      i => i == selectedValue
    )
    const indexOfNextRadio = (currentSelectedIndex + 1) % noOfItems
    const valueOfNextRadio = radios.current[indexOfNextRadio]
    const nextRadioRef = refMap.current.get(valueOfNextRadio)
    if (nextRadioRef && nextRadioRef.current) {
      nextRadioRef.current.focus()
    }
    setSelectedValue(valueOfNextRadio)
  }

  function selectPreviousRadio() {
    const noOfItems = radios.current.length
    const currentSelectedIndex = radios.current.findIndex(
      i => i == selectedValue
    )
    const indexOfPreviousRadio =
      (currentSelectedIndex - 1 + noOfItems) % noOfItems
    const valueOfPreviousRadio = radios.current[indexOfPreviousRadio]
    const previousRadioRef = refMap.current.get(valueOfPreviousRadio)
    if (previousRadioRef && previousRadioRef.current) {
      previousRadioRef.current.focus()
    }
    setSelectedValue(valueOfPreviousRadio)
  }

  const contextValue = React.useMemo(
    function createContextValue(): RadioGroupContextType<T> {
      return {
        registerRadio,
        registerRef,
        selectNextRadio,
        selectPreviousRadio,
        firstValue: radios.current.length > 0 ? radios.current[0] : ('' as T),
        onSelect: setSelectedValue,
        selectedValue
      }
    },
    [selectedValue, radios.current.length, selectedValue, setSelectedValue]
  )

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div
        role="radiogroup"
        className={cn(
          css.group,
          {
            [css.colorDefault]: color == 'default',
            [css.colorPrimary]: color == 'primary',
            [css.colorSecondary]: color == 'secondary',
            [css.colorNeutral]: color == 'neutral'
          },
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}
