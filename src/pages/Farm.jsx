export default function Farm(){
  return (
    <section className="container-xl py-14 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">La Ferme</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">Notre exploitation combine élevage laitier et avicole, avec des protocoles d’hygiène et de biosécurité stricts. Nous valorisons les produits laitiers locaux et partageons notre expérience via des visites et des formations.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="font-semibold">Hygiène & qualité</div>
          <p className="text-slate-700 mt-2">Traite maîtrisée, équipements propres, chaîne du froid respectée et contrôles réguliers.</p>
        </div>
        <div className="card">
          <div className="font-semibold">Alimentation</div>
          <p className="text-slate-700 mt-2">Rations équilibrées, matières premières locales, suivi de la croissance et de la production.</p>
        </div>
        <div className="card">
          <div className="font-semibold">Biosécurité</div>
          <p className="text-slate-700 mt-2">Quarantaine, circulation maîtrisée, plan sanitaire et traçabilité des entrées/sorties.</p>
        </div>
      </div>

      <div className="card">
        <div className="font-semibold">Transmettre & inspirer</div>
        <p className="text-slate-700 mt-2">Nous accueillons des groupes (scolaires, étudiants, porteurs de projets) pour des visites pédagogiques et des sessions d’initiation aux bonnes pratiques d’élevage.</p>
      </div>
    </section>
  )
}
