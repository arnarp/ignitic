import { cn } from 'itils'
import React from 'react'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'
import { TabsContext } from './TabsContext'

type Props = {
  children: React.ReactNode
  selectedTab: string
  setSelectedTab: (selected: string) => void
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  StyleProps

export function Tabs(props: Props) {
  const { selectedTab, setSelectedTab, className, ...rest } =
    extractStyleProps(props)

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
      (i) => i == selectedTab
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
      (i) => i == selectedTab
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
    }),
    [selectedTab, setSelectedTab]
  )
  return (
    <TabsContext.Provider value={value}>
      <div className={cn(styleClassValue(props), className)} {...rest} />
    </TabsContext.Provider>
  )
}
