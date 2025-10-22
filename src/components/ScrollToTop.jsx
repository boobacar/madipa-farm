import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ behavior = 'smooth' }){
  const { pathname } = useLocation()
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [pathname, behavior])
  return null
}

