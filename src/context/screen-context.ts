import * as React from 'react'

export const ScreenContext = React.createContext<{
  /**
   * Width of the screen in rem's
   */
  width: number
  /**
   * Height of the screen in rem's
   */
  height: number
  innerHeight: number
}>({ width: 0, height: 0, innerHeight: 0 })
