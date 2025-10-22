import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Features from "../components/Features.jsx";
import TikTokEmbed from "../components/TikTokEmbed.jsx";
import Gallery from "../components/Gallery.jsx";
import ProductCards from "../components/ProductCards.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";
import { site } from "../data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <section className="container-xl py-14">
        <h2 className="text-2xl font-bold mb-6">Sur TikTok</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {site.tiktokIds.map((id, i) => (
            <TikTokEmbed key={i} videoId={id} />
          ))}
        </div>
      </section>
      <Gallery />
      <ProductCards />
      <Testimonials />
      <CTA />
    </>
  );
}
