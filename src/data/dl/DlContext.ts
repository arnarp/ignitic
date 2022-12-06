import React from 'react'
import { Color } from '../../core'
import { DLVariant } from './Dl'

export type DlContextType = {
  dtColor?: Color
  ddColor?: Color
} & DLVariant

export const DlContext = React.createContext<DlContextType>({
  dtColor: 'neutral',
  ddColor: 'neutral',
  variant: undefined,
  align: undefined,
  ratio: undefined,
})
