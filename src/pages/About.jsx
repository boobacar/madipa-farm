export default function About(){
  return (
    <section className="container-xl py-14 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">À propos</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">Madipa Farm est portée par une gérante engagée pour une agriculture durable et la souveraineté alimentaire au Sénégal. Notre mission: produire localement avec exigence, former la jeunesse et accompagner les fermes vers la performance.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="font-semibold">Notre vision</div>
          <p className="text-slate-700 mt-2">Concilier qualité des produits, bien‑être animal et viabilité économique pour renforcer l’autonomie alimentaire.</p>
        </div>
        <div className="card">
          <div className="font-semibold">Nos valeurs</div>
          <ul className="list-disc pl-6 text-slate-700 mt-2">
            <li>Rigueur et hygiène</li>
            <li>Transmission et pédagogie</li>
            <li>Respect du vivant</li>
          </ul>
        </div>
        <div className="card">
          <div className="font-semibold">Nos engagements</div>
          <ul className="list-disc pl-6 text-slate-700 mt-2">
            <li>Chaîne du froid maîtrisée</li>
            <li>Aliments adaptés au climat local</li>
            <li>Formations accessibles</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
