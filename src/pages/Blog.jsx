import { site } from '../data/site'

export default function Blog(){
  return (
    <section className="container-xl py-14">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-slate-700 mt-3 max-w-3xl">Conseils pratiques, retours d’expérience et actualités de la ferme. Nous partageons ce qui marche réellement sur le terrain.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {site.posts.map(p => (
          <article key={p.title} className="card">
            <div className="text-sm text-slate-500">{p.date} • {p.tag}</div>
            <h3 className="font-semibold mt-2">{p.title}</h3>
            <p className="text-slate-700 mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
