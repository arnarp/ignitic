import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Switch } from './Switch'
import { Label } from './Label'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = React.useState(args.checked)

  return (
    <Label direction="col">
      <span>Label</span>
      <Switch
        {...args}
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </Label>
  )
}

export const Neutral = Template.bind({}) as ComponentStory<typeof Switch>
Neutral.args = {
  color: 'neutral',
  checked: false,
}
export const NeutralChecked = Template.bind({}) as ComponentStory<typeof Switch>
NeutralChecked.args = {
  color: 'neutral',
  checked: true,
}

export const Default = Template.bind({}) as ComponentStory<typeof Switch>
Default.args = {
  color: 'default',
  checked: false,
}
export const DefaultChecked = Template.bind({}) as ComponentStory<typeof Switch>
DefaultChecked.args = {
  color: 'default',
  checked: true,
}

export const Primary = Template.bind({}) as ComponentStory<typeof Switch>
Primary.args = {
  color: 'primary',
  checked: false,
}
export const PrimaryChecked = Template.bind({}) as ComponentStory<typeof Switch>
PrimaryChecked.args = {
  color: 'primary',
  checked: true,
}

export const Secondary = Template.bind({}) as ComponentStory<typeof Switch>
Secondary.args = {
  color: 'secondary',
  checked: false,
}
export const SecondaryChecked = Template.bind({}) as ComponentStory<
  typeof Switch
>
SecondaryChecked.args = {
  color: 'secondary',
  checked: true,
}
