import React from 'react'
import { cn } from 'itils/dist/misc/cn'
import * as css from './Tab.module.css'
import { TabsContext } from './TabsContext'
import composeRefs from '@seznam/compose-react-refs'
import { extractStyleProps, styleClassValue, StyleProps } from '../../core'

type Props = {
  children: React.ReactNode
  id: string
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  StyleProps

export const Tab = React.forwardRef<HTMLButtonElement, Props>(function Tab(
  props,
  ref
) {
  const { children, className, id, ...rest } = extractStyleProps(props)
  const innerRef = React.useRef<HTMLButtonElement>(null)
  const tabsContext = React.useContext(TabsContext)
  React.useEffect(() => {
    tabsContext.registerTab(id, innerRef)
  }, [])
  React.useEffect(() => {
    tabsContext.registerRef(id, innerRef)
  })

  function onKeyDown(ev: React.KeyboardEvent<HTMLButtonElement>) {
    const event = ev
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        tabsContext.focusNextTab()
        break
      }
      case 'ArrowLeft':
      case 'ArrowUp': {
        tabsContext.focusPreviousTab()
        break
      }
      default:
        break
    }
  }

  return (
    <button
      {...rest}
      aria-controls={`tabpanel-${id}`}
      aria-selected={tabsContext.selectedTab == id}
      className={cn(
        css.tab,
        styleClassValue(props),
        // {
        //   [css.colorNeutral]: tabsContext.color == 'neutral',
        //   [css.colorPaper]: tabsContext.color == 'paper',
        // },
        className
      )}
      id={`tab-${id}`}
      onClick={() => tabsContext.setSelectedTab(id)}
      ref={composeRefs(innerRef, ref)}
      role="tab"
      tabIndex={tabsContext.selectedTab == id ? 0 : -1}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  )
})
