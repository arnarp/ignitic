import { AnimatePresence, MotionProps } from 'framer-motion'
import * as React from 'react'
import { Surface } from '../../surfaces/surface'
import { TabsContext } from './tabs-context'

type Props = {
  children: React.ReactNode
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>

export function TabPanelContainer({ children, id, ...rest }: Props) {
  const tabsContext = React.useContext(TabsContext)

  return (
    <Surface
      {...rest}
      padding="md"
      rounded={tabsContext.rounded}
      color={tabsContext.color}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {children}
      </AnimatePresence>
    </Surface>
  )
}
