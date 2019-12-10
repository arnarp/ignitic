import * as React from 'react'
import { TabsContext } from './tabs-context'

type Props = {
  children: React.ReactNode
  selectedTab: string
  setSelectedTab: (selected: string) => void
}

export function Tabs(props: Props) {
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
      i => i == props.selectedTab
    )
    const indexOfNextTabBtn = (currentSelectedIndex + 1) % tabsCount
    const idOfNextTab = tabsArray.current[indexOfNextTabBtn]
    const nextTabBtnRef = refMap.get(idOfNextTab)
    nextTabBtnRef?.current?.focus()
    console.log({ nextTabBtnRef })
    props.setSelectedTab(idOfNextTab)
  }

  function focusPreviousTab() {
    const tabsCount = tabsArray.current.length
    const currentSelectedIndex = tabsArray.current.findIndex(
      i => i == props.selectedTab
    )
    const indexOfPreviousTabBtn =
      (currentSelectedIndex - 1 + tabsCount) % tabsCount
    const idOfPreviousTab = tabsArray.current[indexOfPreviousTabBtn]
    const previousTabRef = refMap.get(idOfPreviousTab)
    console.log({ previousTabRef })
    previousTabRef?.current?.focus()
    props.setSelectedTab(idOfPreviousTab)
  }

  return (
    <TabsContext.Provider
      value={{
        selectedTab: props.selectedTab,
        setSelectedTab: props.setSelectedTab,
        registerTab,
        registerRef,
        focusNextTab,
        focusPreviousTab
      }}
    >
      <div>{props.children}</div>
    </TabsContext.Provider>
  )
}
