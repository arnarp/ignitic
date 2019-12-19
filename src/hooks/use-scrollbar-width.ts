import * as React from 'react'

export function useScrollbarWidth() {
  const intervalRef = React.useRef<any>(undefined)
  React.useEffect(() => {
    function updateScrollbarWidth() {
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        window.innerWidth - document.documentElement.clientWidth + 'px'
      )

      console.log(
        'updateScrollbarWidth',
        window.innerWidth - document.documentElement.clientWidth + 'px'
      )
    }

    updateScrollbarWidth()

    intervalRef.current = setInterval(updateScrollbarWidth, 2000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
}
