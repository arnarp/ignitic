import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VisuallyHidden } from './VisuallyHidden'

export default {
  title: 'Utils/VisuallyHidden',
  component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>

export const Default: ComponentStory<typeof VisuallyHidden> = (args) => (
  <VisuallyHidden {...args} />
)
Default.args = {
  children: <p>Visually hidden text</p>,
}
