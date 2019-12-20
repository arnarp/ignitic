import * as React from 'react'

export type RadioGroupContextType<T> = {
  registerRadio: (radioValue: T, ref: React.RefObject<HTMLInputElement>) => void
  registerRef: (radioValue: T, ref: React.RefObject<HTMLInputElement>) => void
  selectNextRadio: () => void
  selectPreviousRadio: () => void
  firstValue: T
  onSelect: (value: T) => void
  selectedValue?: T
}

export const RadioGroupContext = React.createContext<
  RadioGroupContextType<any>
>({
  registerRadio: () => {},
  registerRef: () => {},
  selectNextRadio: () => {},
  selectPreviousRadio: () => {},
  firstValue: '',
  onSelect: () => {},
  selectedValue: undefined
})
