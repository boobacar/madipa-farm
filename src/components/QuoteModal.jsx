import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { X, ChevronDown } from 'lucide-react'

export default function QuoteModal({ open, onClose, product }){
  const ref = useRef(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    qty: '', unit: 'Litre', freq: 'Unique', notes: ''
  })
  const [sent, setSent] = useState(false)

  useEffect(()=>{
    if(open){
      setSent(false)
      setForm(f => ({...f, qty: '', notes: ''}))
      setTimeout(()=> ref.current?.querySelector('input,select,textarea')?.focus(), 50)
      const onEsc = (e)=>{ if(e.key==='Escape') onClose() }
      window.addEventListener('keydown', onEsc)
      // lock background scroll
      const prevBody = document.body.style.overflow
      const prevRoot = document.documentElement.style.overflow
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      return ()=> {
        window.removeEventListener('keydown', onEsc)
        document.body.style.overflow = prevBody
        document.documentElement.style.overflow = prevRoot
      }
    }
  },[open, onClose])

  if(!open) return null

  const set = (k)=> (e)=> setForm(s => ({...s, [k]: e.target.value}))

  const buildMessage = ()=> {
    const lines = [
      `Demande de devis — ${product?.title || ''}`,
      `Quantité: ${form.qty || '-'} ${form.unit}`,
      `Fréquence: ${form.freq}`,
      `Nom: ${form.name}`,
      `Téléphone: ${form.phone}`,
      `Email: ${form.email}`,
      `Message: ${form.notes || ''}`,
    ]
    return lines.join('\n')
  }

  const submitDefault = (e)=>{
    e?.preventDefault()
    setSent(true)
    setTimeout(()=>{ setSent(false); onClose() }, 2500)
  }

  const sendWhatsApp = ()=>{
    const base = site.contacts.whatsapp || 'https://wa.me/'
    const sep = base.includes('?') ? '&' : '?'
    const url = `${base}${sep}text=${encodeURIComponent(buildMessage())}`
    window.open(url, '_blank', 'noopener,noreferrer')
    submitDefault()
  }

  const sendEmail = ()=>{
    const to = site.contacts.email || 'contact@example.com'
    const subject = `Demande de devis: ${product?.title || ''}`
    const body = buildMessage()
    const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = url
    submitDefault()
  }

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="min-h-screen flex items-center justify-center p-4">
      <div ref={ref} role="dialog" aria-modal="true" className="relative bg-white rounded-2xl shadow-xl ring-1 ring-black/5 w-full max-w-xl p-6 max-h-[85vh] overflow-auto overscroll-contain">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Demande de devis</h3>
            {product?.title && <div className="text-sm text-slate-600 mt-1">Produit: <span className="font-medium">{product.title}</span></div>}
          </div>
          <button onClick={onClose} aria-label="Fermer" className="p-2 rounded-lg hover:bg-cream">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={submitDefault} className="grid gap-3 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm text-slate-600">Quantité</span>
              <input value={form.qty} onChange={set('qty')} placeholder="ex: 50" className="mt-1 w-full border rounded-xl px-3 h-11 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-600">Unité</span>
              <div className="relative mt-1">
                <select value={form.unit} onChange={set('unit')}
                  className="w-full border rounded-xl px-3 h-11 pr-10 text-base bg-white appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  style={{ WebkitAppearance: 'none' }}
                >
                  <option>Litre</option>
                  <option>Pièce</option>
                  <option>Kg</option>
                  <option>Tête</option>
                </select>
                <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"/>
              </div>
            </label>
          </div>

          <label className="block">
            <span className="text-sm text-slate-600">Fréquence</span>
            <div className="relative mt-1">
              <select value={form.freq} onChange={set('freq')}
                className="w-full border rounded-xl px-3 h-11 pr-10 text-base bg-white appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                style={{ WebkitAppearance: 'none' }}
              >
                <option>Unique</option>
                <option>Hebdomadaire</option>
                <option>Mensuel</option>
              </select>
              <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"/>
            </div>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required value={form.name} onChange={set('name')} placeholder="Nom complet" className="border rounded-xl px-3 h-11 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
            <input required value={form.phone} onChange={set('phone')} pattern="[0-9+ ]{6,}" placeholder="Téléphone" className="border rounded-xl px-3 h-11 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
          </div>
          <input required type="email" value={form.email} onChange={set('email')} placeholder="Email" className="border rounded-xl px-3 h-11 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
          <textarea rows="4" value={form.notes} onChange={set('notes')} placeholder="Votre contexte et vos attentes" className="border rounded-xl px-3 py-3 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none" />

          <div className="flex flex-wrap gap-2 mt-2">
            <button type="button" onClick={sendWhatsApp} className="btn btn-primary">Envoyer via WhatsApp</button>
            <button type="button" onClick={sendEmail} className="btn btn-outline">Envoyer par email</button>
            <button type="submit" className="btn">Enregistrer (maquette)</button>
          </div>

          {sent && <div className="text-green-700">Votre demande a été préparée. Merci !</div>}
        </form>
      </div>
      </div>
    </div>
  )
}
