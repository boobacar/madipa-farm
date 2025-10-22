import { useEffect, useRef } from 'react'
import { site } from '../data/site'

export default function Testimonials(){
  const railRef = useRef(null)
  useEffect(()=>{
    const rail = railRef.current
    if(!rail) return
    let i = 0
    const advance = ()=>{
      const row = rail.querySelector(':scope > div')
      if(!row) return
      const cards = Array.from(row.children)
      if(cards.length === 0) return
      i = (i + 1) % cards.length
      const target = cards[i]
      const x = target.offsetLeft
      rail.scrollTo({ left: x, behavior: 'smooth' })
    }
    const id = setInterval(advance, 4000)
    return ()=> clearInterval(id)
  },[])
  return (
    <section className="bg-white py-14 border-y overflow-hidden" style={{contain:'layout paint'}}>
      <div className="container-xl">
        <h2 className="text-2xl font-bold mb-6">Ils nous font confiance</h2>
        {/* Mobile: carrousel swipable */}
        <div className="sm:hidden px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full max-w-[100vw] min-w-0" ref={railRef}>
          <div className="flex gap-4 min-w-0">
            {site.testimonials.map(t => (
              <figure key={t.name} className="card snap-start shrink-0 w-[85%] text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-secondary/20 text-primary grid place-items-center font-semibold mb-3">
                  {t.name?.charAt(0) || '?'}
                </div>
                <blockquote className="text-slate-700 break-words">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        {/* Desktop: grille */}
        <div className="hidden sm:grid md:grid-cols-3 gap-6">
          {site.testimonials.map(t => (
            <figure key={t.name} className="card text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-secondary/20 text-primary grid place-items-center font-semibold mb-3">
                {t.name?.charAt(0) || '?'}
              </div>
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
