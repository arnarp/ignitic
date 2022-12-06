import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DiYeoman } from 'react-icons/di'
import { FaSafari } from 'react-icons/fa'
import { FiAlertOctagon } from 'react-icons/fi'
import { GiAbacus } from 'react-icons/gi'
import { GoFileSymlinkDirectory } from 'react-icons/go'
import { IoIosAirplane } from 'react-icons/io'
import { IconButton } from './IconButton'

export default {
  title: 'Core/IconButton',
  component: IconButton,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const DefaultSmall = Template.bind({}) as ComponentStory<
  typeof IconButton
>
DefaultSmall.args = {
  children: <FaSafari />,
  fontSize: 'small',
  color: 'default',
}
export const DefaultMedium = Template.bind({}) as ComponentStory<
  typeof IconButton
>
DefaultMedium.args = {
  children: <DiYeoman />,
  fontSize: 'medium',
  color: 'default',
}
export const DefaultLarge = Template.bind({}) as ComponentStory<
  typeof IconButton
>
DefaultLarge.args = {
  children: <FiAlertOctagon />,
  fontSize: 'large',
  color: 'default',
}
export const NeutralMedium = Template.bind({}) as ComponentStory<
  typeof IconButton
>
NeutralMedium.args = {
  children: <GiAbacus />,
  fontSize: 'medium',
  color: 'neutral',
}
export const PrimaryMedium = Template.bind({}) as ComponentStory<
  typeof IconButton
>
PrimaryMedium.args = {
  children: <GoFileSymlinkDirectory />,
  fontSize: 'medium',
  color: 'primary',
}
export const SecondaryMedium = Template.bind({}) as ComponentStory<
  typeof IconButton
>
SecondaryMedium.args = {
  children: <IoIosAirplane />,
  fontSize: 'medium',
  color: 'secondary',
}
