import { site } from '../data/site'

export default function Footer(){
  return (
    <footer className="bg-white border-t">
      <div className="container-xl py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-primary">Madipa Farm</h3>
          <p className="text-slate-600 mt-2">Agriculture & Élevage responsables au Sénégal.</p>
        </div>
        <div>
          <h4 className="font-semibold">Coordonnées</h4>
          <ul className="text-slate-600 mt-2 space-y-1">
            <li>Tél : {site.contacts.phone}</li>
            <li>Email : <a href={'mailto:'+site.contacts.email} className="underline">{site.contacts.email}</a></li>
            <li>Adresse : {site.contacts.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Réseaux</h4>
          <ul className="text-slate-600 mt-2 space-y-1">
            <li><a className="underline" href={site.social.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a className="underline" href={site.social.youtube}>YouTube</a></li>
            <li><a className="underline" href={site.social.facebook}>Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 pb-6">© Madipa Farm — Dakar, Sénégal</div>
    </footer>
  )
}
