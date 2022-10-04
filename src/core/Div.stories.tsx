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
