import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20" />
      <div className="container-xl relative text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Construisons l’autosuffisance alimentaire ensemble</h2>
        <p className="text-slate-700 mt-3">Parlons de vos besoins, de vos projets et des solutions adaptées à votre ferme.</p>
        <Link to="/contact" className="btn btn-primary mt-6">Parler à la ferme</Link>
      </div>
    </section>
  )
}
