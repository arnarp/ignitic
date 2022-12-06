import React from 'react'
import { IgniticContext } from './IgniticContext'
import { ScreenContextProvider } from './ScreenContextProvider'
import 'wicg-inert'

type Props = {
  children: React.ReactNode
  container?: HTMLElement
}

export function IgniticContextProvider({ children, container }: Props) {
  const value = React.useMemo(() => ({ container }), [container])
  return (
    <IgniticContext.Provider value={value}>
      <ScreenContextProvider>{children}</ScreenContextProvider>
    </IgniticContext.Provider>
  )
}
