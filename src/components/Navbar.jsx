import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const link = 'px-3 py-2 rounded-lg hover:bg-cream'
  const active = ({isActive}) => isActive ? 'text-primary font-semibold ' + link : link
  const close = () => setOpen(false)
  const goTopAndClose = () => { try { window.scrollTo({ top: 0, behavior: 'smooth' }) } catch { window.scrollTo(0,0) } close() }
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b h-16">
        <div className="container-xl flex items-center justify-between h-16">
          <Link to="/" onClick={close} className="text-xl font-bold text-primary">Madipa Farm</Link>
          <nav className="hidden md:block">
            <ul className="flex gap-2 items-center">
              <li><NavLink to="/" className={active} onClick={goTopAndClose}>Accueil</NavLink></li>
              <li><NavLink to="/farm" className={active} onClick={goTopAndClose}>La Ferme</NavLink></li>
              <li><NavLink to="/formations" className={active} onClick={goTopAndClose}>Formations</NavLink></li>
              <li><NavLink to="/products" className={active} onClick={goTopAndClose}>Produits</NavLink></li>
              <li><NavLink to="/services" className={active} onClick={goTopAndClose}>Services</NavLink></li>
              <li><NavLink to="/blog" className={active} onClick={goTopAndClose}>Blog</NavLink></li>
              <li><NavLink to="/contact" className="btn btn-primary" onClick={goTopAndClose}>Nous contacter</NavLink></li>
            </ul>
          </nav>
          <button
            className="md:hidden p-2 border rounded-lg"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={()=>setOpen(!open)}
          >
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>

        {/* Mobile dropdown panel with animation */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: .18 }}
              className="md:hidden absolute left-0 right-0 top-full bg-white border-b shadow-soft z-50"
            >
              <ul className="flex flex-col px-4 py-3 gap-1">
                <li><NavLink to="/" className={active} onClick={goTopAndClose}>Accueil</NavLink></li>
                <li><NavLink to="/farm" className={active} onClick={goTopAndClose}>La Ferme</NavLink></li>
                <li><NavLink to="/formations" className={active} onClick={goTopAndClose}>Formations</NavLink></li>
                <li><NavLink to="/products" className={active} onClick={goTopAndClose}>Produits</NavLink></li>
                <li><NavLink to="/services" className={active} onClick={goTopAndClose}>Services</NavLink></li>
                <li><NavLink to="/blog" className={active} onClick={goTopAndClose}>Blog</NavLink></li>
                <li className="pt-1"><NavLink to="/contact" className="btn btn-primary w-full" onClick={goTopAndClose}>Nous contacter</NavLink></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Overlay to close menu when clicking outside */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: .6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .18 }}
            className="md:hidden fixed inset-0 bg-black z-40"
            onClick={close}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  )
}
