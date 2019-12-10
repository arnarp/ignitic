import { RouteComponentProps } from '@reach/router'
import { AnimatePresence } from 'framer-motion'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { H2, H3 } from '../../../src/core/text'
import {
  Tab,
  TabList,
  TabPanel,
  TabPanelContainer,
  Tabs
} from '../../../src/navigation/tabs'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'
import { Surface } from '../../../src/surfaces/surface'

type Props = {} & RouteComponentProps

export function TabsPage(props: Props) {
  const [selectedTab, setSelectedTab] = React.useState('1')
  const tabItems = [
    { id: '1', label: 'Mandarína' },
    { id: '2', label: 'Epli' },
    { id: '3', label: 'Appelsína' },
    { id: '4', label: 'Mangó' }
  ]
  const selectedItem = tabItems.find(i => i.id == selectedTab)
  console.log({ selectedTab, selectedItem })
  return (
    <div className={cn(display.flex, flex.col, flex.spacingSm)}>
      <H2>Tabs</H2>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <TabList label={{ type: 'hidden', label: 'Ávextir' }}>
          {tabItems.map(i => (
            <Tab key={i.id} id={i.id}>
              {i.label}
            </Tab>
          ))}
        </TabList>
        <TabPanelContainer>
          <TabPanel
            key={selectedItem.id}
            id={selectedItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <H3>{selectedItem.label}</H3>
          </TabPanel>
        </TabPanelContainer>
      </Tabs>
    </div>
  )
}
