import { RouteComponentProps } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import { H2, H3 } from '../../../src/core/text'
import {
  SortDirection,
  Table,
  TD,
  TH,
  THead,
  THSortButton,
  TR,
  TBody
} from '../../../src/data/table'
import { display } from '../../../src/styles/display'
import { flex } from '../../../src/styles/flex'
import { Paper } from '../../../src/surfaces/paper'
import { Surface } from '../../../src/surfaces/surface'

type Props = {} & RouteComponentProps

export function TablePage(props: Props) {
  const [sd, setSd] = React.useState<SortDirection>(false)
  return (
    <Paper className={cn(display.flex, flex.col, flex.spacingLg)}>
      <div className={cn(display.flex, flex.col, flex.paddingMd)}>
        <H2>Table</H2>
        <H3 variant="h6">Normal</H3>
      </div>
      <Table layout="fixed">
        <THead>
          <TR>
            <TH sortDirection={sd}>
              <THSortButton onClick={onSortBtnClick()}>Nafn</THSortButton>
            </TH>
            <TH>Heimilisfang</TH>
            <TH align="center">Fjöldi</TH>
            <TH align="right">Kennitala</TH>
          </TR>
        </THead>
        <TBody>
          <TR hover>
            <TD>Arnar Birgisson</TD>
            <TD>Afganistan 7</TD>
            <TD align="center">35</TD>
            <TD align="right">1122331234</TD>
          </TR>
          <TR hover>
            <TD>Glói Arnarsson</TD>
            <TD>Írlandstræti 18</TD>
            <TD align="center">35</TD>
            <TD align="right">2211331234</TD>
          </TR>
          <TR hover>
            <TD>Nína Santos Arnarsdóttir</TD>
            <TD>Suður Afríkustræti 19</TD>
            <TD align="center">35</TD>
            <TD align="right">3322331234</TD>
          </TR>
        </TBody>
      </Table>

      <div className={cn(display.flex, flex.row, flex.paddingMd)}>
        <H3 variant="h6">cellPadding='dense'</H3>
      </div>

      <Surface color="neutral">
        <Table layout="fixed" cellPadding="dense">
          <THead>
            <TR>
              <TH sortDirection={sd}>
                <THSortButton onClick={onSortBtnClick()}>Nafn</THSortButton>
              </TH>
              <TH>Heimilisfang</TH>
              <TH align="center">Fjöldi</TH>
              <TH align="right">Kennitala</TH>
            </TR>
          </THead>
          <TBody>
            <TR hover>
              <TD>Arnar Birgisson</TD>
              <TD>Afganistan 7</TD>
              <TD align="center">35</TD>
              <TD align="right">1122331234</TD>
            </TR>
            <TR hover>
              <TD>Glói Arnarsson</TD>
              <TD>Írlandstræti 18</TD>
              <TD align="center">35</TD>
              <TD align="right">2211331234</TD>
            </TR>
            <TR hover>
              <TD>Nína Santos Arnarsdóttir</TD>
              <TD>Suður Afríkustræti 19</TD>
              <TD align="center">35</TD>
              <TD align="right">3322331234</TD>
            </TR>
          </TBody>
        </Table>
      </Surface>
      <div className={cn(display.flex, flex.row, flex.paddingMd)}>
        <H3 variant="h6">cellPadding='dense' cellSize='small'</H3>
      </div>
      <Surface color="secondary">
        <Table layout="fixed" cellPadding="dense" cellSize="small">
          <THead>
            <TR>
              <TH sortDirection={sd}>
                <THSortButton onClick={onSortBtnClick()}>Nafn</THSortButton>
              </TH>
              <TH>Heimilisfang</TH>
              <TH align="center" cellPadding="none">
                Fjöldi
              </TH>
              <TH align="right">Kennitala</TH>
            </TR>
          </THead>
          <TBody>
            <TR hover>
              <TD>Arnar Birgisson</TD>
              <TD>Afganistan 7</TD>
              <TD align="center" cellPadding="none">
                35
              </TD>
              <TD align="right">1122331234</TD>
            </TR>
            <TR hover>
              <TD>Glói Arnarsson</TD>
              <TD>Írlandstræti 18</TD>
              <TD align="center" cellPadding="none">
                35
              </TD>
              <TD align="right">2211331234</TD>
            </TR>
            <TR hover>
              <TD>Nína Santos Arnarsdóttir</TD>
              <TD overflow="ellipsis">
                Suður Afríkustræti 19 rosalega langur texti sem ellipsar út
              </TD>
              <TD align="center" cellPadding="none">
                35
              </TD>
              <TD align="right" color="default">
                3322331234
              </TD>
            </TR>
          </TBody>
        </Table>
      </Surface>
    </Paper>
  )

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
}
