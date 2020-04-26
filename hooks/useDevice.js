import { useState, useEffect } from 'react'

// Reflects tailwind breakpoints
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

// Default to xl non-touch device
const INITIAL_DEVICE = {
  touch: false,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}

const useDevice = (breakpoints=BREAKPOINTS) => {
  const [{ touch, sm, md, lg, xl }, setDevice] = useState(INITIAL_DEVICE)

  useEffect(() => {
    // If touchstart is detected once, device is considered touch forever
    if (touch) {
      return () => {}
    }

    function onTouch() {
      setDevice(x => ({
        ...x,
        touch: true,
      }))
    }

    window.addEventListener('touchstart', onTouch)

    return () => {
      window.removeEventListener('touchstart', onTouch)
    }
  }, [touch])

  useEffect(() => {
    // Should this be throttled?
    function setDeviceSize() {
      setDevice(x => ({
        ...x,
        sm: window.innerWidth >= breakpoints.sm,
        md: window.innerWidth >= breakpoints.md,
        lg: window.innerWidth >= breakpoints.lg,
        xl: window.innerWidth >= breakpoints.xl,
      }))
    }

    // Set the size on first client render
    setDeviceSize()

    window.addEventListener('resize', setDeviceSize)

    return () => {
      window.removeEventListener('resize', setDeviceSize)
    }
  }, [])

  return { touch, sm, md, lg, xl }
}

export default useDevice
