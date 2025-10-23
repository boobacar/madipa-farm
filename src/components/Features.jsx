import { motion } from 'framer-motion'
import { Droplet, Wheat, GraduationCap, Sprout } from 'lucide-react'

export default function Features(){
  const feats = [
    {t:'Hygiène du lait', d:'Procédures rigoureuses de traite et de chaîne du froid.'},
    {t:'Alimentation', d:'Rations équilibrées pour volaille et bovins adaptées au climat.'},
    {t:'Formations', d:'Transfert de compétences aux jeunes agripreneurs.'},
    {t:'Souveraineté alimentaire', d:'Produire localement et durablement.'},
  ]
  const icons = [Droplet, Wheat, GraduationCap, Sprout]
  return (
    <section className="container-xl py-14">
      <h2 className="text-2xl font-bold mb-6">Nos atouts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feats.map((f, i) => {
          const Icon = icons[i]
          return (
          <motion.div
            key={f.t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: .35, delay: i * 0.06 }}
            className="card transition hover:-translate-y-1 hover:shadow-lg select-none touch-manipulation"
          >
            <div className="w-11 h-11 rounded-full bg-secondary/20 flex items-center justify-center mb-3 text-xl">
              <Icon className="text-primary" size={20} />
            </div>
            <div className="text-lg font-semibold">{f.t}</div>
            <p className="text-slate-600 mt-2">{f.d}</p>
          </motion.div>
          )
        })}
      </div>
    </section>
  )
}
