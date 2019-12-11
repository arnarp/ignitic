import * as React from 'react'
import { cn } from 'itils/dist/misc/cn'
import * as css from './tabs.css'
import { TabsContext } from './tabs-context'
import composeRefs from '@seznam/compose-react-refs'

type Props = {
  children: React.ReactNode
  id: string
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Tab = React.forwardRef<HTMLButtonElement, Props>(function Tab(
  { children, className, id, ...rest },
  ref
) {
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
        {
          [css.rounded]: tabsContext.rounded,
          [css.colorNeutral]: tabsContext.color == 'neutral',
          [css.colorPaper]: tabsContext.color == 'paper'
        },
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
