import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextArea } from './TextArea'
import { Label } from './Label'

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <Label direction="col">
    <span>Label</span>
    <TextArea {...args} />
  </Label>
)

export const Default = Template.bind({}) as ComponentStory<typeof TextArea>
Default.args = {
  defaultValue: 'text area value',
}

export const Valid = Template.bind({}) as ComponentStory<typeof TextArea>
Valid.args = {
  state: 'valid',
  defaultValue: 'input value',
}

export const Invalid = Template.bind({}) as ComponentStory<typeof TextArea>
Invalid.args = {
  state: 'invalid',
  defaultValue: 'input value',
}
