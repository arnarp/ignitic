import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from './Table'
import { SortDirection, TBody, TD, TFoot, TH, THead, THSortButton, TR } from '.'

export default {
  title: 'Data/Table',
  component: Table,
  subcomponents: {
    THead,
    TBody,
    TFoot,
    TH,
    TD,
    TR,
    THSortButton,
  },
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => {
  const [sd, setSd] = React.useState<SortDirection>(false)

  function onSortBtnClick(): (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void {
    return () => {
      switch (sd) {
        case 'asc':
          setSd('desc')
          break
        case false:
        case 'desc':
        default:
          setSd('asc')
          break
      }
    }
  }

  return (
    <Table {...args}>
      <THead>
        <TR>
          <TH sortDirection={sd}>
            <THSortButton onClick={onSortBtnClick()}>Nafn</THSortButton>
          </TH>
          <TH>Heimilisfang</TH>
          <TH align="center">Fjöldi</TH>
          <TH sortDirection={sd} align="right">
            <THSortButton onClick={onSortBtnClick()}>Kennitala</THSortButton>
          </TH>
        </TR>
      </THead>
      <TBody>
        <TR hover>
          <TD>Arnar Birgisson</TD>
          <TD>Afganistan 7</TD>
          <TD align="center">35</TD>
          <TD align="right" numeric>
            1122331234
          </TD>
        </TR>
        <TR hover>
          <TD>Glói Arnarsson</TD>
          <TD>Írlandstræti 18</TD>
          <TD align="center">35</TD>
          <TD align="right" numeric>
            2211331234
          </TD>
        </TR>
        <TR hover>
          <TD>Nína Santos Arnarsdóttir</TD>
          <TD>Suður Afríkustræti 19</TD>
          <TD align="center">35</TD>
          <TD align="right" numeric>
            3322331234
          </TD>
        </TR>
      </TBody>
    </Table>
  )
}

export const Default = Template.bind({}) as ComponentStory<typeof Table>
Default.args = {
  layout: 'fixed',
}

export const Dense = Template.bind({}) as ComponentStory<typeof Table>
Dense.args = {
  layout: 'fixed',
  cellPadding: 'dense',
}

export const DenseSmall = Template.bind({}) as ComponentStory<typeof Table>
DenseSmall.args = {
  layout: 'fixed',
  cellPadding: 'dense',
  cellSize: 'small',
}
