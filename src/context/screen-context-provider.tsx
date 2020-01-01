import * as React from 'react'
import {
  ScreenContext,
  ScreenContextType,
  initialValue
} from './screen-context'
import { useScrollbarWidth } from '../hooks/use-scrollbar-width'

type Props = {
  children: React.ReactNode
}

export function ScreenContextProvider(props: Props) {
  const updateWidthTimeout = React.useRef<any>(undefined)
  const [state, setState] = React.useState<ScreenContextType>(initialValue)
  useScrollbarWidth()
  React.useEffect(() => {
    function updateWidth() {
      const widthPx =
        document.documentElement.clientWidth || document.body.clientWidth
      const heightPx =
        document.documentElement.clientHeight || document.body.clientHeight
      const windowHeightPx = window.innerHeight
      const windowWidthPx = window.innerWidth
      const fontSizePx = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      )
      const windowHeight = windowHeightPx / fontSizePx
      const windowWidth = windowWidthPx / fontSizePx
      setState({
        width: widthPx / fontSizePx,
        height: heightPx / fontSizePx,
        windowHeight,
        windowWidth,
        minWidthXs: windowWidth >= 32,
        minWidthSm: windowWidth >= 40,
        minWidthMd: windowWidth >= 48,
        minWidthLg: windowWidth >= 64,
        minWidthXl: windowWidth >= 80
      })
    }

    function updateWidthThrottler() {
      if (!updateWidthTimeout.current) {
        updateWidthTimeout.current = setTimeout(() => {
          updateWidthTimeout.current = undefined
          // Will execute at max 15fps
          updateWidth()
        }, 66)
      }
    }

    updateWidth()

    window.addEventListener('resize', updateWidthThrottler, false)
    window.addEventListener('orientationchange', updateWidthThrottler, false)

    return () => {
      window.removeEventListener('orientationchange', updateWidthThrottler)
      window.removeEventListener('resize', updateWidthThrottler)
    }
  }, [])

  const value = React.useMemo(() => state, [
    state.width,
    state.height,
    state.windowHeight,
    state.windowWidth
  ])

  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  )
}
