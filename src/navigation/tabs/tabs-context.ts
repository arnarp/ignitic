import * as React from 'react'
import { SurfaceColor } from '../../surfaces/surface'

export const TabsContext = React.createContext<{
  selectedTab: string
  setSelectedTab: (selected: string) => void
  registerTab: (tabId: string, ref: React.RefObject<HTMLButtonElement>) => void
  registerRef: (tabId: string, ref: React.RefObject<HTMLButtonElement>) => void
  focusNextTab: () => void
  focusPreviousTab: () => void
  rounded: boolean
  color: SurfaceColor
}>({
  selectedTab: '',
  setSelectedTab: () => {},
  registerTab: () => {},
  registerRef: () => {},
  focusNextTab: () => {},
  focusPreviousTab: () => {},
  rounded: true,
  color: 'neutral'
})
