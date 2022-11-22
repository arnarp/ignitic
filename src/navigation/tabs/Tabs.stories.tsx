import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from './Tabs'
import { TabList } from './TabList'
import { Tab } from './Tab'
import { H2 } from '../../core'
import { TabPanelContainer } from './TabPanelContainer'
import { TabPanel } from './TabPanel'

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  subcomponents: {
    TabList,
  },
  args: {},
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [selectedTab, setSelectedTab] = React.useState('1')
  const tabItems = [
    { id: '1', label: 'Mandarína' },
    { id: '2', label: 'Epli' },
    { id: '3', label: 'Appelsína' },
    { id: '4', label: 'Mangó' },
  ]
  const selectedItem = tabItems.find((i) => i.id == selectedTab)
  return (
    <Tabs {...args} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      <TabList pV="md" label={{ type: 'hidden', label: 'Ávextir' }}>
        {tabItems.map((i) => (
          <Tab
            key={i.id}
            id={i.id}
            background={i.id == selectedTab ? 'neutral' : 'paper'}
          >
            {i.label}
          </Tab>
        ))}
      </TabList>
      <TabPanelContainer pA="md" background="neutral">
        {selectedItem && (
          <TabPanel
            key={selectedItem.id}
            id={selectedItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <H2>{selectedItem.label}</H2>
          </TabPanel>
        )}
      </TabPanelContainer>
    </Tabs>
  )
}

export const Default = Template.bind({}) as ComponentStory<typeof Tabs>
Default.args = {
  pT: 'lg',
}
