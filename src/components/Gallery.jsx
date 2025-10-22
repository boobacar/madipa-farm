import { site } from '../data/site'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Gallery(){
  const railRef = useRef(null)
  useEffect(()=>{
    const rail = railRef.current
    if(!rail) return
    let i = 0
    const tick = () => {
      const cards = Array.from(rail.querySelectorAll('figure'))
      if(cards.length === 0) return
      i = (i + 1) % cards.length
      const target = cards[i]
      rail.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    }
    const id = setInterval(tick, 3500)
    return () => clearInterval(id)
  },[])
  return (
    <section className="container-xl py-14 overflow-hidden" style={{contain:'layout paint'}}>
      <h2 className="text-2xl font-bold mb-6">Galerie</h2>
      {/* Mobile: carrousel horizontal avec snapping */}
      <div className="sm:hidden px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full max-w-[100vw] min-w-0" ref={railRef}>
        <div className="flex gap-4 min-w-0">
          {site.gallery.map((g, i) => (
            <motion.figure
              key={'m'+i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .3, delay: Math.min(i * 0.05, .25) }}
              className="snap-start shrink-0 w-[82%]"
            >
              <picture>
                {g.srcWebp && (
                  <source type="image/webp" srcSet={g.srcWebpSet || g.srcWebp} />
                )}
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl shadow-soft w-full h-56 object-cover opacity-0"
                  sizes="(max-width: 640px) 82vw"
                  onError={(e)=>{
                    e.currentTarget.onerror=null;
                    const a = (g.alt||'').toLowerCase();
                    if(a.includes('pâturage')||a.includes('paturage')||a.includes('bovins')) e.currentTarget.src='/images/gallery-bovins.svg';
                    else if(a.includes('traite')||a.includes('hygiène')||a.includes('hygiene')) e.currentTarget.src='/images/gallery-traite.svg';
                    else if(a.includes('volaille')) e.currentTarget.src='/images/gallery-volaille.svg';
                    else if(a.includes('agricultrice')||a.includes('agriculteur')||a.includes('jeune')) e.currentTarget.src='/images/gallery-agricultrice.svg';
                    else if(a.includes('étable')||a.includes('etable')||a.includes('propre')) e.currentTarget.src='/images/gallery-etable.svg';
                    else e.currentTarget.src='/images/gallery-produits-laitiers.svg';
                  }}
                  onLoad={(e)=>{ e.currentTarget.style.opacity='1'; e.currentTarget.style.transition='opacity .4s ease'; }}
                />
              </picture>
              <figcaption className="sr-only">{g.alt}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Desktop: Masonry responsive: 2 / 3 colonnes */}
      <div className="hidden sm:block">
        <div className="columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {site.gallery.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: .35, delay: Math.min(i * 0.05, .3) }}
              className="mb-4 inline-block w-full"
              style={{ breakInside: 'avoid' }}
            >
              <picture>
                {g.srcWebp && (
                  <source type="image/webp" srcSet={g.srcWebpSet || g.srcWebp} />
                )}
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl shadow-soft w-full h-auto opacity-0"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  onError={(e)=>{
                    e.currentTarget.onerror=null;
                    const a = (g.alt||'').toLowerCase();
                    if(a.includes('pâturage')||a.includes('paturage')||a.includes('bovins')) e.currentTarget.src='/images/gallery-bovins.svg';
                    else if(a.includes('traite')||a.includes('hygiène')||a.includes('hygiene')) e.currentTarget.src='/images/gallery-traite.svg';
                    else if(a.includes('volaille')) e.currentTarget.src='/images/gallery-volaille.svg';
                    else if(a.includes('agricultrice')||a.includes('agriculteur')||a.includes('jeune')) e.currentTarget.src='/images/gallery-agricultrice.svg';
                    else if(a.includes('étable')||a.includes('etable')||a.includes('propre')) e.currentTarget.src='/images/gallery-etable.svg';
                    else e.currentTarget.src='/images/gallery-produits-laitiers.svg';
                  }}
                  onLoad={(e)=>{ e.currentTarget.style.opacity='1'; e.currentTarget.style.transition='opacity .4s ease'; }}
                />
              </picture>
              <figcaption className="sr-only">{g.alt}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
