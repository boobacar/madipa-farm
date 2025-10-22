import { site } from '../data/site'
import { motion } from 'framer-motion'
import { useState } from 'react'
import QuoteModal from './QuoteModal.jsx'

export default function ProductCards(){
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const ask = (p)=>{ setSelected(p); setOpen(true) }
  return (
    <section className="container-xl py-14">
      <h2 className="text-2xl font-bold mb-6">Nos produits</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {site.products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: .35, delay: i * 0.06 }}
            className="card group transition hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-secondary/30"
          >
            <picture>
              {p.imageWebp && (
                <source type="image/webp" srcSet={p.imageWebpSet || p.imageWebp} />
              )}
              <img
                src={p.image}
                alt={p.title}
                className="rounded-xl mb-4 w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.03] opacity-0"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e)=>{
                  e.currentTarget.onerror=null;
                  const t = p.title.toLowerCase();
                  if(t.includes('lait')) e.currentTarget.src = '/images/product-lait.svg';
                  else if(t.includes('volaille') || t.includes('œufs') || t.includes('oeufs')) e.currentTarget.src = '/images/product-volaille.svg';
                  else e.currentTarget.src = '/images/product-chevreaux.svg';
                }}
                onLoad={(e)=>{ e.currentTarget.style.filter='none'; e.currentTarget.style.opacity='1'; e.currentTarget.style.transition='filter .4s ease, opacity .4s ease'; e.currentTarget.style.filter='blur(0)'; }}
              />
            </picture>
            <div className="font-semibold">{p.title}</div>
            <p className="text-slate-600 mt-1">{p.desc}</p>
            <div className="mt-3 text-sm text-slate-500">Tarif : {p.priceHint}</div>
            <button onClick={()=>ask(p)} className="btn btn-primary mt-4 transition-transform group-hover:-translate-y-0.5">Demander un devis</button>
          </motion.div>
        ))}
      </div>
      <QuoteModal open={open} onClose={()=>setOpen(false)} product={selected} />
    </section>
  )
}
