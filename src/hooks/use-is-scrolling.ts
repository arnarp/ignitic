import { useEffect, useState } from 'react'

export function useIsScrolling() {
  const [isScrolling, setIsScrolling] = useState(false)
  useEffect(() => {
    let requestRunning: number | null = null
    let timeout: any = null

    function handleScroll() {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          if (!isScrolling) {
            setIsScrolling(true)
          }
          requestRunning = null
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            setIsScrolling(false)
          }, 100)
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [])
  return isScrolling
}
