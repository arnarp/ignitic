import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Core/Button',
  component: Button,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({}) as ComponentStory<typeof Button>
Default.parameters = {
  chromatic: {
    disableSnapshot: true,
  },
}
Default.args = {
  children: 'Click me',
}

export const OutlinedNeutralSmall = Template.bind({}) as ComponentStory<
  typeof Button
>
OutlinedNeutralSmall.args = {
  variant: 'outlined',
  color: 'neutral',
  size: 'small',
  children: 'Click me',
}
export const OutlinedNeutralMedium = Template.bind({}) as ComponentStory<
  typeof Button
>
OutlinedNeutralMedium.args = {
  variant: 'outlined',
  color: 'neutral',
  size: 'medium',
  children: 'Click me',
}
export const OutlinedNeutralLarge = Template.bind({}) as ComponentStory<
  typeof Button
>
OutlinedNeutralLarge.args = {
  variant: 'outlined',
  color: 'neutral',
  size: 'large',
  children: 'Click me',
}

export const OutlinedDefault = Template.bind({}) as ComponentStory<
  typeof Button
>
OutlinedDefault.args = {
  variant: 'outlined',
  color: 'default',
  size: 'medium',
  children: 'Click me',
}

export const OutlinedPrimary = Template.bind({}) as ComponentStory<
  typeof Button
>
OutlinedPrimary.args = {
  variant: 'outlined',
  color: 'primary',
  size: 'medium',
  children: 'Click me',
}

export const OutlinedSecondary = Template.bind({}) as ComponentStory<
  typeof Button
>
OutlinedSecondary.args = {
  variant: 'outlined',
  color: 'secondary',
  size: 'medium',
  children: 'Click me',
}

export const TextNeutralSmall = Template.bind({}) as ComponentStory<
  typeof Button
>
TextNeutralSmall.args = {
  variant: 'text',
  color: 'neutral',
  size: 'small',
  children: 'Click me',
}
export const TextNeutralMedium = Template.bind({}) as ComponentStory<
  typeof Button
>
TextNeutralMedium.args = {
  variant: 'text',
  color: 'neutral',
  size: 'medium',
  children: 'Click me',
}
export const TextNeutralLarge = Template.bind({}) as ComponentStory<
  typeof Button
>
TextNeutralLarge.args = {
  variant: 'text',
  color: 'neutral',
  size: 'large',
  children: 'Click me',
}

export const TextDefault = Template.bind({}) as ComponentStory<typeof Button>
TextDefault.args = {
  variant: 'text',
  color: 'default',
  size: 'medium',
  children: 'Click me',
}

export const TextPrimary = Template.bind({}) as ComponentStory<typeof Button>
TextPrimary.args = {
  variant: 'text',
  color: 'primary',
  size: 'medium',
  children: 'Click me',
}

export const TextSecondary = Template.bind({}) as ComponentStory<typeof Button>
TextSecondary.args = {
  variant: 'text',
  color: 'secondary',
  size: 'medium',
  children: 'Click me',
}

export const FilledNeutralSmall = Template.bind({}) as ComponentStory<
  typeof Button
>
FilledNeutralSmall.args = {
  variant: 'filled',
  color: 'neutral',
  size: 'small',
  children: 'Click me',
}
export const FilledNeutralMedium = Template.bind({}) as ComponentStory<
  typeof Button
>
FilledNeutralMedium.args = {
  variant: 'filled',
  color: 'neutral',
  size: 'medium',
  children: 'Click me',
}
export const FilledNeutralLarge = Template.bind({}) as ComponentStory<
  typeof Button
>
FilledNeutralLarge.args = {
  variant: 'filled',
  color: 'neutral',
  size: 'large',
  children: 'Click me',
}

export const FilledDefault = Template.bind({}) as ComponentStory<typeof Button>
FilledDefault.args = {
  variant: 'filled',
  color: 'default',
  size: 'medium',
  children: 'Click me',
}

export const FilledPrimary = Template.bind({}) as ComponentStory<typeof Button>
FilledPrimary.args = {
  variant: 'filled',
  color: 'primary',
  size: 'medium',
  children: 'Click me',
}

export const FilledSecondary = Template.bind({}) as ComponentStory<
  typeof Button
>
FilledSecondary.args = {
  variant: 'filled',
  color: 'secondary',
  size: 'medium',
  children: 'Click me',
}
