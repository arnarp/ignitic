import * as React from 'react'

type Args = {
  initial: string
}

export function useTextInput({ initial }: Args) {
  const [value, setValue] = React.useState(initial)
  return {
    value,
    setValue,
    inputProps: {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value),
      value
    }
  }
}
