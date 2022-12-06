import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextInput } from './TextInput'
import { Label } from './Label'

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <Label direction="col">
    <span>Label</span>
    <TextInput {...args} />
  </Label>
)

export const Default = Template.bind({}) as ComponentStory<typeof TextInput>
Default.args = {
  type: 'text',
  defaultValue: 'input value',
}

export const Valid = Template.bind({}) as ComponentStory<typeof TextInput>
Valid.args = {
  state: 'valid',
  type: 'text',
  defaultValue: 'input value',
}

export const Invalid = Template.bind({}) as ComponentStory<typeof TextInput>
Invalid.args = {
  state: 'invalid',
  type: 'text',
  defaultValue: 'input value',
}
