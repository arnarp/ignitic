import { useState } from 'react'

export function useLocalStorage<T>({
  key,
  defaultValue
}: {
  key: string
  defaultValue: T
}): [T, (value: T) => void] {
  const [state, setState] = useState(() => {
    const item = window.localStorage.getItem(key)
    if (item === null) {
      return defaultValue
    }
    return JSON.parse(item) as T
  })
  function setLocalState(value: T) {
    setState(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return [state, setLocalState]
}
