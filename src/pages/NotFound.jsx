import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SearchX } from 'lucide-react'

export default function NotFound(){
  return (
    <section className="container-xl py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/20 text-4xl select-none"
          initial={{ scale: .9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 12 }}
        >
          <SearchX className="text-primary" size={36} />
        </motion.div>
        <h1 className="mt-6 text-4xl font-extrabold text-primary">Page introuvable</h1>
        <p className="mt-3 text-slate-700 max-w-2xl mx-auto">Désolé, cette page n’existe pas ou a été déplacée. Retournez à l’accueil ou explorez nos services et formations.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn btn-primary">Revenir à l’accueil</Link>
          <Link to="/products" className="btn btn-outline">Produits</Link>
          <Link to="/formations" className="btn btn-outline">Formations</Link>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
        </div>
      </motion.div>
    </section>
  )
}
