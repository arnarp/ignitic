import * as React from 'react'
import { ScreenContext } from './screen-context'

type Props = {
  children: React.ReactNode
}

export function ScreenContextProvider(props: Props) {
  const updateWidthTimeout = React.useRef<any>(undefined)
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    function updateWidth() {
      const widthPx =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      const heightPx =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
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

  return (
    <ScreenContext.Provider
      value={{
        width,
        height
      }}
    >
      {props.children}
    </ScreenContext.Provider>
  )
}
