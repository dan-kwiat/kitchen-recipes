import { useState, useEffect, useRef } from 'react'

// getHeight should return height of header/footer
// It will be called with window.innerWidth as sole argument
// Return a slightly larger value if you want to delay the appearance when scrolling up
// Return a slightly smaller value if you want the header/footer to not be hidden completely

const useAppBar = (getHeight, maxWidth, parallax) => {
  const prevScroll = useRef(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function onThrottledScroll(scroll) {
      setOffset(prevOffset => {
        if (typeof maxWidth === 'number' && window.innerWidth > maxWidth) {
          return 0
        }
        if (scroll < 0) {
          return 0
        }
        const diff = (scroll - prevScroll.current)*(parallax || 1)
        const offset = diff > 0 ? (
          Math.max(prevOffset - diff, -getHeight(window.innerWidth))
        ) : (
          Math.min(prevOffset - diff, 0)
        )
        return offset
      })
      prevScroll.current = scroll
    }

    let lastKnownPosition = 0
    let ticking = false

    function onScroll() {
      if (ticking) return
      lastKnownPosition = window.pageYOffset
      window.requestAnimationFrame(function() {
        onThrottledScroll(lastKnownPosition)
        ticking = false
      })
      ticking = true
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return offset
}

export default useAppBar
