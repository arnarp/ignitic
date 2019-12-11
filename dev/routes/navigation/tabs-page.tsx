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
import { margin, padding } from '../../../src/styles/spacing'
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
  return (
    <div className={cn(display.flex, flex.col, flex.spacingSm)}>
      <H2>Tabs</H2>
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        className={margin.negMdL}
        color="neutral"
      >
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
      <Surface color="neutral" className={cn(margin.negMdL, padding.mdX)}>
        <H3>Tab in a neutral surface</H3>
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          className={cn(margin.negMdL, margin.negMdR)}
          color="paper"
        >
          <TabList
            label={{ type: 'hidden', label: 'Ávextir' }}
            className={padding.mdX}
          >
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
      </Surface>
    </div>
  )
}
