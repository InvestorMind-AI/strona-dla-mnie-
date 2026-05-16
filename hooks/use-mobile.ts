import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value inside a timeout to avoid synchronous setState during render if running in some edge cases
    // Or just set it state using a function, but simpler:
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    mql.addEventListener("change", updateIsMobile)
    updateIsMobile()
    
    return () => mql.removeEventListener("change", updateIsMobile)
  }, [])

  return !!isMobile
}
