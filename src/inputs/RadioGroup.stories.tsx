import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadioGroup } from './RadioGroup'
import { useUUID } from '../hooks'
import { Label } from './Label'
import { Radio } from './Radio'
import { FieldSet } from './Fieldset'
import { Legend } from './Legend'

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  type Fruit = 'Orange' | 'Apple' | 'Mango' | 'Date'

  const items: {
    enum: Fruit
    label: string
  }[] = [
    {
      enum: 'Orange',
      label: 'Appelsína',
    },
    {
      enum: 'Apple',
      label: 'Epli',
    },
    {
      enum: 'Mango',
      label: 'Mangó',
    },
    {
      enum: 'Date',
      label: 'Daðla',
    },
  ]

  const [checked, setChecked] = React.useState<Fruit | undefined>(undefined)
  const legendId = useUUID()
  return (
    <FieldSet>
      <Legend id={legendId}>Hvaða ávöxt vilt þú?</Legend>
      <RadioGroup
        {...args}
        aria-labelledby={legendId}
        selectedValue={checked}
        setSelectedValue={(value) => setChecked(value)}
      >
        {items.map((i) => (
          <Label direction="row" key={i.enum}>
            <Radio value={i.enum} />
            <span>{i.label}</span>
          </Label>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}

export const Default = Template.bind({}) as ComponentStory<typeof RadioGroup>
Default.args = {
  color: 'default',
}

export const Neutral = Template.bind({}) as ComponentStory<typeof RadioGroup>
Neutral.args = {
  color: 'neutral',
}

export const Primary = Template.bind({}) as ComponentStory<typeof RadioGroup>
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({}) as ComponentStory<typeof RadioGroup>
Secondary.args = {
  color: 'secondary',
}
