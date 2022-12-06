import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Div } from './Div'

export default {
  title: 'Core/Div',
  component: Div,
  args: {
    w: '12',
    h: '12',
  },
  argTypes: {},
} as ComponentMeta<typeof Div>

const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />

export const DefaultBackground = Template.bind({}) as ComponentStory<typeof Div>
DefaultBackground.args = {
  background: 'brand',
}
export const NeutralBackground = Template.bind({}) as ComponentStory<typeof Div>
NeutralBackground.args = {
  background: 'neutral',
}

export const Row: ComponentStory<typeof Div> = (args) => (
  <Div {...args}>
    <Div w="4" h="4" background="brand" />
    <Div w="4" h="6" background="primary" />
    <Div w="4" h="4" background="secondary" />
  </Div>
)
Row.args = {
  d: 'flex',
  direction: 'row',
  spacing: 'md',
  mainAxisAlignment: 'space between',
  crossAxisAlignment: 'center',
}
