import { AnimatePresence, MotionProps } from 'framer-motion'
import * as React from 'react'
import { Surface } from '../../surfaces/surface'
import { TabsContext } from './tabs-context'

type Props = {
  children: React.ReactNode
  padding?: 'md' | 'sm' | 'lg' | 'xl'
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>

export function TabPanelContainer({ children, id, padding, ...rest }: Props) {
  const tabsContext = React.useContext(TabsContext)

  return (
    <Surface
      {...rest}
      padding={padding}
      rounded={tabsContext.rounded}
      color={tabsContext.color}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {children}
      </AnimatePresence>
    </Surface>
  )
}
