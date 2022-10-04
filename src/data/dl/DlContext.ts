import React from 'react'
import { TextColor } from '../../core/text'

export type DlContextType = {
  dtColor?: TextColor
  ddColor?: TextColor
}

export const DlContext = React.createContext<DlContextType>({
  dtColor: 'neutral',
  ddColor: 'neutral',
})
