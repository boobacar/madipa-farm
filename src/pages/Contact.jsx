import ContactForm from '../components/ContactForm.jsx'
import MapStatic from '../components/MapStatic.jsx'

export default function Contact(){
  return (
    <section className="container-xl py-14 space-y-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <ContactForm />
      <MapStatic />
    </section>
  )
}
