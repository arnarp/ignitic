import { useEffect, useState } from 'react'

export interface ScrollPosition {
  x: number
  y: number
}

function getScrollPosition(): ScrollPosition {
  return { x: window.pageXOffset, y: window.pageYOffset }
}

export function useScrollPosition(): ScrollPosition {
  const [position, setScrollPosition] = useState<ScrollPosition>(
    getScrollPosition()
  )
  /**
   * This effect is to get the scroll position after first page render,
   * else if the page is refreshed with a scroll position we will
   * return wrong scroll position until the user scrolls.
   */
  useEffect(() => {
    window.requestAnimationFrame(() => {
      setScrollPosition(getScrollPosition())
    })
  }, [])
  useEffect(() => {
    let requestRunning: number | null = null
    function handleScroll() {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition())
          requestRunning = null
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return position
}
