import { useState } from 'react'
import { site } from '../data/site'

export default function Formations(){
  const [ok, setOk] = useState(false)
  const [type, setType] = useState(site.trainingTypes[0])
  const submit = e => {
    e.preventDefault()
    setOk(true)
    setTimeout(()=>setOk(false), 3500)
  }
  return (
    <section className="container-xl py-14">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Formations techniques</h1>
        <p className="text-slate-700 mt-3 max-w-3xl">Des modules courts et concrets pour monter en compétences: hygiène de la traite, alimentation, biosécurité, gestion de ferme et transformation laitière. Nos contenus sont adaptés aux réalités locales.</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Catalogue</h2>
          <div className="space-y-4">
            {site.trainings.map(t => (
              <div key={t.id} className="card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{t.title}</h3>
                    <p className="text-slate-700 mt-1">{t.desc}</p>
                  </div>
                  <div className="text-sm text-slate-600 shrink-0 text-right">
                    <div><span className="font-medium">Durée:</span> {t.duration}</div>
                    <div><span className="font-medium">Mode:</span> {t.mode}</div>
                    <div><span className="font-medium">Tarif:</span> {t.priceHint}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="card">
          <h2 className="text-xl font-semibold mb-4">S’inscrire à une formation</h2>
          <div className="grid gap-4">
            <label className="block">
              <span className="text-sm text-slate-600">Formation souhaitée</span>
              <select value={type} onChange={e=>setType(e.target.value)} className="mt-1 w-full border rounded-xl px-4 py-3">
                {site.trainingTypes.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </label>
            <input required placeholder="Nom complet" className="border rounded-xl px-4 py-3" />
            <input required type="email" placeholder="Email" className="border rounded-xl px-4 py-3" />
            <input required pattern="[0-9+ ]{6,}" placeholder="Téléphone" className="border rounded-xl px-4 py-3" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-slate-600">Modalité</span>
                <select className="mt-1 w-full border rounded-xl px-4 py-3">
                  <option>Présentiel</option>
                  <option>Distanciel</option>
                  <option>Indifférent</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm text-slate-600">Période souhaitée</span>
                <input type="month" className="mt-1 w-full border rounded-xl px-4 py-3" />
              </label>
            </div>
            <textarea rows="4" placeholder="Votre contexte et vos attentes" className="border rounded-xl px-4 py-3"></textarea>
            <button className="btn btn-primary" type="submit">Envoyer ma demande</button>
            {ok && <div className="text-green-700">Demande envoyée (maquette).</div>}
            <p className="text-sm text-slate-500">Nous revenons vers vous sous 48h avec un devis et des dates disponibles.</p>
          </div>
        </form>
      </div>
    </section>
  )
}

