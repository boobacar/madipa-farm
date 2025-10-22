import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Features from "../components/Features.jsx";
import TikTokEmbed from "../components/TikTokEmbed.jsx";
import Gallery from "../components/Gallery.jsx";
import ProductCards from "../components/ProductCards.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";
import { site } from "../data/site";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal.jsx";

export default function Home() {
  const fade = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Stats />
      </ScrollReveal>
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      <ScrollReveal>
        <section className="container-xl py-14">
        <h2 className="text-2xl font-bold mb-6">Sur TikTok</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {site.tiktokIds.map((id, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.35, delay: i * 0.05 }} whileHover={{ y: -2 }}>
              <TikTokEmbed videoId={id} />
            </motion.div>
          ))}
        </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal>
        <ProductCards />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </>
  );
}
