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
          <TH sortDirection={sd} textAlign="left">
            <THSortButton align="left" onClick={onSortBtnClick()}>
              Nafn
            </THSortButton>
          </TH>
          <TH>Heimilisfang</TH>
          <TH textAlign="center">Fjöldi</TH>
          <TH sortDirection={sd} textAlign="right">
            <THSortButton align="right" onClick={onSortBtnClick()}>
              Kennitala
            </THSortButton>
          </TH>
        </TR>
      </THead>
      <TBody>
        <TR hover>
          <TD>Arnar Birgisson</TD>
          <TD>Afganistan 7</TD>
          <TD textAlign="center">35</TD>
          <TD textAlign="right" fontNumeric="tabular">
            1122331234
          </TD>
        </TR>
        <TR hover>
          <TD>Glói Arnarsson</TD>
          <TD>Írlandstræti 18</TD>
          <TD textAlign="center">35</TD>
          <TD textAlign="right" fontNumeric="tabular">
            2211331234
          </TD>
        </TR>
        <TR hover>
          <TD>Nína Santos Arnarsdóttir</TD>
          <TD>Suður Afríkustræti 19</TD>
          <TD textAlign="center">35</TD>
          <TD textAlign="right" fontNumeric="tabular">
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
