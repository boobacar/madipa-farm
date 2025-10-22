import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import heroimg from "../assets/hero.jpg";
import heroWebp from "../assets/hero.webp";
import hero800Webp from "../assets/hero-800.webp";
import hero1200Webp from "../assets/hero-1200.webp";
import hero1600Webp from "../assets/hero-1600.webp";
import milk from "../assets/milk.jpg";
import milkWebp from "../assets/milk.webp";
import cows from "../assets/cows.jpg";
import cowsWebp from "../assets/cows.webp";
import guinar from "../assets/guinar.jpg";
import guinarWebp from "../assets/guinar.webp";

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 14 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 14 })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-3xl" />
      </div>
      <div className="container-xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="inline-block text-xs uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">Ferme pédagogique • Élevage</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Madipa Farm</span>
            </h1>
            <p className="text-lg text-slate-700 mt-4">
              Agriculture responsable, hygiène de la traite et formations pour une souveraineté alimentaire durable au Sénégal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/farm" className="btn btn-primary">Découvrir la ferme</Link>
              <Link to="/contact" className="btn btn-outline">Nous contacter</Link>
              <a href="https://wa.me/221778164565" target="_blank" rel="noreferrer" className="btn bg-white border text-primary hover:bg-primary hover:text-white">WhatsApp</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {['Hygiène du lait','Formations','Volaille & bovins','137K sur TikTok'].map(b => (
                <span key={b} className="px-3 py-1 rounded-full bg-white/70 border text-slate-700">{b}</span>
              ))}
            </div>
          </div>

          <motion.div className="relative"
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            <motion.picture
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:.6, delay:.1}}
            >
              <source type="image/webp" srcSet={`${hero800Webp} 800w, ${hero1200Webp} 1200w, ${hero1600Webp} 1600w`} sizes="(min-width: 1024px) 50vw, 100vw" />
              <img
                src={heroimg}
                alt="Ferme et production laitière"
                className="rounded-2xl shadow-soft w-full opacity-0"
                loading="eager"
                decoding="async"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/hero-dairy.svg'; }}
                onLoad={(e)=>{ e.currentTarget.style.opacity='1'; e.currentTarget.style.transition='opacity .5s ease'; }}
              />
            </motion.picture>

            <motion.div
              className="hidden md:block absolute -bottom-6 -left-6 w-40"
              initial={{opacity:0, y:10}}
              animate={{opacity:1, y:0}}
              transition={{duration:.5, delay:.25}}
            >
              <picture>
                <source type="image/webp" srcSet={milkWebp} />
                <img src={milk} alt="Produits laitiers" className="w-40 h-28 object-cover rounded-xl shadow-soft rotate-[-6deg] opacity-0" onLoad={(e)=>{ e.currentTarget.style.opacity='1'; e.currentTarget.style.transition='opacity .5s ease'; }} />
              </picture>
            </motion.div>

            <motion.div
              className="hidden md:block absolute -top-6 -right-6 w-44"
              initial={{opacity:0, y:-10}}
              animate={{opacity:1, y:0}}
              transition={{duration:.5, delay:.35}}
            >
              <picture>
                <source type="image/webp" srcSet={guinarWebp} />
                <img src={guinar} alt="Volaille" className="w-44 h-28 object-cover rounded-xl shadow-soft rotate-[6deg] opacity-0" onLoad={(e)=>{ e.currentTarget.style.opacity='1'; e.currentTarget.style.transition='opacity .5s ease'; }} />
              </picture>
            </motion.div>

            <motion.div
              className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-14 w-28"
              initial={{opacity:0, scale:.9}}
              animate={{opacity:1, scale:1}}
              transition={{duration:.5, delay:.45}}
            >
              <picture>
                <source type="image/webp" srcSet={cowsWebp} />
                <img src={cows} alt="Bovins" className="w-28 h-28 object-cover rounded-full shadow-soft opacity-0" onLoad={(e)=>{ e.currentTarget.style.opacity='1'; e.currentTarget.style.transition='opacity .5s ease'; }} />
              </picture>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
