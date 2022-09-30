import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Div } from './Div'

export default {
  title: 'Core/Div',
  component: Div,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Div>

const Template: ComponentStory<typeof Div> = (args) => (
  <Div {...args} style={{ minWidth: '10rem', minHeight: '10rem' }} />
)

export const DefaultBackground = Template.bind({}) as ComponentStory<typeof Div>
DefaultBackground.args = {
  background: 'default',
}
export const NeutralBackground = Template.bind({}) as ComponentStory<typeof Div>
NeutralBackground.args = {
  background: 'neutral',
}
