import * as React from 'react'
import { ScreenContext } from './screen-context'
import { useScrollbarWidth } from '../hooks/use-scrollbar-width'

type Props = {
  children: React.ReactNode
}

export function ScreenContextProvider(props: Props) {
  const updateWidthTimeout = React.useRef<any>(undefined)
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  useScrollbarWidth()
  React.useEffect(() => {
    function updateWidth() {
      const widthPx =
        document.documentElement.clientWidth || document.body.clientWidth
      const heightPx =
        document.documentElement.clientHeight || document.body.clientHeight
      const fontSizePx = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      )
      setWidth(widthPx / fontSizePx)
      setHeight(heightPx / fontSizePx)
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

  const value = React.useMemo(
    () => ({
      width,
      height
    }),
    [width, height]
  )

  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  )
}
