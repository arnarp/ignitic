import React from 'react'

export type ScreenContextType = {
  /**
   * Width of the viewport in rem's
   */
  width: number
  /**
   * Height of the viewport in rem's
   */
  height: number
  windowHeight: number
  windowWidth: number
  minWidthXs: boolean
  minWidthSm: boolean
  minWidthMd: boolean
  minWidthLg: boolean
  minWidthXl: boolean
}

export const initialValue: ScreenContextType = {
  width: 0,
  height: 0,
  windowHeight: 0,
  windowWidth: 0,
  minWidthXs: false,
  minWidthSm: false,
  minWidthMd: false,
  minWidthLg: false,
  minWidthXl: false,
}
export const ScreenContext =
  React.createContext<ScreenContextType>(initialValue)
