import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ActionSheet } from './ActionSheet'
import { Button, P } from '../core'

export default {
  title: 'Popups/ActionSheet',
  component: ActionSheet,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof ActionSheet>

const Template: ComponentStory<typeof ActionSheet> = (args) => (
  <ActionSheet {...args} ariaTitle="Test action sheet">
    <div>
      {Array.from(Array(15).keys()).map((i) => (
        <P color="primary" key={i}>
          Action sheet content
        </P>
      ))}
    </div>
    <div>
      <Button variant="filled" onClick={() => {}}>
        Hætta við
      </Button>
      <Button variant="filled" onClick={() => {}}>
        Vista
      </Button>
    </div>
  </ActionSheet>
)

export const Default = Template.bind({})
Default.args = {
  ariaTitle: 'Test sheet',
  open: false,
}
Default.parameters = {
  chromatic: { disableSnapshot: true },
}

export const Open = Template.bind({})
Open.args = {
  ariaTitle: 'Test sheet',
  open: true,
}
