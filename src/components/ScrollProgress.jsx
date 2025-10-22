import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress(){
  const [p, setP] = useState(0)
  useEffect(()=>{
    const onScroll = ()=>{
      const h = document.documentElement
      const scrolled = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setP(max > 0 ? scrolled / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  const width = `${Math.round(p * 100)}%`
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <motion.div
        className="h-[3px] bg-primary rounded-full"
        initial={{ width: '0%' }}
        animate={{ width }}
        transition={{ type: 'tween', duration: .12 }}
        style={{ willChange: 'width' }}
      />
    </div>
  )
}
