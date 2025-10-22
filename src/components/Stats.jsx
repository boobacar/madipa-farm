import { useEffect, useRef, useState } from 'react'

function CountUp({ value, duration = 1200, prefix = '', suffix = '', play = true }){
  const [n, setN] = useState(0)
  useEffect(() => {
    if(!play) return
    let raf, start
    setN(0)
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3)
    const step = ts => {
      if(!start) start = ts
      const p = Math.min(1, (ts - start) / duration)
      setN(Math.round(value * easeOutCubic(p)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value, duration, play])
  const formatted = new Intl.NumberFormat('fr-FR').format(n)
  return <>{prefix}{formatted}{suffix}</>
}

export default function Stats(){
  const [play, setPlay] = useState(false)
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    if(!el || typeof IntersectionObserver === 'undefined') { setPlay(true); return }
    const obs = new IntersectionObserver(
      (entries)=>{
        entries.forEach(e=>{ if(e.isIntersecting){ setPlay(true); obs.disconnect() } })
      },
      { root: null, threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    return ()=> obs.disconnect()
  },[])
  const items = [
    { value: 1500, prefix: '+', suffix: ' L', label: 'de lait / mois' },
    { value: 100, prefix: '+', suffix: '', label: 'bovins & caprins' },
    { value: 137, prefix: '', suffix: ' K', label: 'abonnés TikTok' },
    { value: 10, prefix: '', suffix: '+', label: 'formations/an' },
  ]
  return (
    <section ref={ref} className="bg-white py-10 border-y">
      <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((it)=> (
          <div key={it.label} className="card transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl font-bold text-primary">
              <CountUp play={play} value={it.value} prefix={it.prefix} suffix={it.suffix} />
            </div>
            <div className="text-slate-600">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
