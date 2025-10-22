import { site } from '../data/site'
import { Link } from 'react-router-dom'

export default function Services(){
  return (
    <section className="container-xl py-14">
      <h1 className="text-3xl font-bold">Services & Formations</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {site.services.map(s => (
          <div key={s.title} className="card">
            <div className="font-semibold text-lg">{s.title}</div>
            <ul className="list-disc pl-5 mt-3 text-slate-700">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
            {s.title.includes('Formations')
              ? <Link to="/formations" className="btn btn-outline mt-4">{s.cta}</Link>
              : <button className="btn btn-outline mt-4">{s.cta}</button>}
          </div>
        ))}
      </div>
    </section>
  )
}
