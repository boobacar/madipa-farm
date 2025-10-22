import { useState } from 'react'
import { site } from '../data/site'

export default function ContactForm(){
  const [ok, setOk] = useState(false)
  const onSubmit = e => {
    e.preventDefault()
    setOk(true)
    setTimeout(()=>setOk(false), 3000)
  }
  return (
    <form onSubmit={onSubmit} className="card max-w-xl mx-auto">
      <div className="grid gap-4">
        <input required placeholder="Nom complet" className="border rounded-xl px-4 py-3"/>
        <input required type="email" placeholder="Email" className="border rounded-xl px-4 py-3"/>
        <input required pattern="[0-9+ ]{6,}" placeholder="Téléphone" className="border rounded-xl px-4 py-3"/>
        <input required placeholder="Sujet" className="border rounded-xl px-4 py-3"/>
        <textarea required placeholder="Message" rows="5" className="border rounded-xl px-4 py-3"></textarea>
        <button className="btn btn-primary" type="submit">Envoyer</button>
        {ok && <div className="text-green-700">Message envoyé (maquette).</div>}
      </div>
      <div className="mt-6 text-sm text-slate-600">
        <p>Tél : {site.contacts.phone}</p>
        <p>Email : <a className="underline" href={'mailto:'+site.contacts.email}>{site.contacts.email}</a></p>
        <p>Adresse : {site.contacts.address}</p>
      </div>
    </form>
  )
}
