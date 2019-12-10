import * as React from 'react'

export const TabsContext = React.createContext<{
  selectedTab: string
  setSelectedTab: (selected: string) => void
  registerTab: (tabId: string, ref: React.RefObject<HTMLButtonElement>) => void
  registerRef: (tabId: string, ref: React.RefObject<HTMLButtonElement>) => void
  focusNextTab: () => void
  focusPreviousTab: () => void
}>({
  selectedTab: '',
  setSelectedTab: () => {},
  registerTab: () => {},
  registerRef: () => {},
  focusNextTab: () => {},
  focusPreviousTab: () => {}
})
