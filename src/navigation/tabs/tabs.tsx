import * as React from 'react'
import { SurfaceColor } from '../../surfaces/surface'
import { TabsContext } from './tabs-context'

type Props = {
  children: React.ReactNode
  selectedTab: string
  setSelectedTab: (selected: string) => void
  rounded?: boolean
  color: SurfaceColor
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function Tabs({
  selectedTab,
  setSelectedTab,
  children,
  rounded = true,
  color = 'neutral',
  ...rest
}: Props) {
  const tabsArray = React.useRef<string[]>([])
  const refMap = new Map<string, React.RefObject<HTMLButtonElement>>()

  function registerTab(tabId: string) {
    tabsArray.current.push(tabId)
  }
  function registerRef(tabId: string, ref: React.RefObject<HTMLButtonElement>) {
    refMap.set(tabId, ref)
  }

  function focusNextTab() {
    const tabsCount = tabsArray.current.length
    const currentSelectedIndex = tabsArray.current.findIndex(
      i => i == selectedTab
    )
    const indexOfNextTabBtn = (currentSelectedIndex + 1) % tabsCount
    const idOfNextTab = tabsArray.current[indexOfNextTabBtn]
    const nextTabBtnRef = refMap.get(idOfNextTab)
    nextTabBtnRef?.current?.focus()
    setSelectedTab(idOfNextTab)
  }

  function focusPreviousTab() {
    const tabsCount = tabsArray.current.length
    const currentSelectedIndex = tabsArray.current.findIndex(
      i => i == selectedTab
    )
    const indexOfPreviousTabBtn =
      (currentSelectedIndex - 1 + tabsCount) % tabsCount
    const idOfPreviousTab = tabsArray.current[indexOfPreviousTabBtn]
    const previousTabRef = refMap.get(idOfPreviousTab)
    previousTabRef?.current?.focus()
    setSelectedTab(idOfPreviousTab)
  }

  const value = React.useMemo(
    () => ({
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab,
      registerTab,
      registerRef,
      focusNextTab,
      focusPreviousTab,
      rounded,
      color
    }),
    [
      selectedTab,
      setSelectedTab,
      rounded,
      color
    ]
  )
  return (
    <TabsContext.Provider value={value}>
      <div {...rest}>{children}</div>
    </TabsContext.Provider>
  )
}
