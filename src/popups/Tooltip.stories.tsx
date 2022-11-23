import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { Tooltip } from './Tooltip'
import { H2, Span } from '../core'
import { useUUID } from '../hooks'

export default {
  title: 'Popups/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => {
  const h2Id = useUUID()
  const h2Ref = React.useRef<HTMLHeadingElement>(null)

  return (
    <>
      <H2
        style={{ width: 'fit-content' }}
        aria-describedby={h2Id}
        ref={h2Ref}
        data-testid="hover-me"
      >
        Popups / Tooltip
      </H2>
      <Tooltip {...args} id={h2Id} triggerRef={h2Ref}>
        <Span>This is a tooltip for 'Popups / Tooltip' header</Span>
      </Tooltip>
    </>
  )
}

export const Default = Template.bind({}) as ComponentStory<typeof Tooltip>
Default.args = {}
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const el = canvas.getByTestId('hover-me')
  await waitFor(async () => {
    await userEvent.hover(el)
  })
}
