import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { motion, AnimatePresence } from 'framer-motion'

export default function QuickActions(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  const tel = `tel:${site.contacts.phone?.replace(/\s+/g,'') || ''}`
  const wa = site.contacts.whatsapp || '#'
  const maps = `https://maps.google.com/?q=${encodeURIComponent(site.contacts.address || 'Dakar, Sénégal')}`
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: .22 }}
          className="sm:hidden fixed left-0 right-0 bottom-0 z-[55] px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-soft border p-2 flex items-center justify-between gap-2">
              <a href={tel} className="flex-1 btn">Appeler</a>
              <a href={wa} target="_blank" rel="noreferrer" className="flex-1 btn btn-primary">WhatsApp</a>
              <a href={maps} target="_blank" rel="noreferrer" className="flex-1 btn">Itinéraire</a>
              <Link to="/contact" className="flex-1 btn">Devis</Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

