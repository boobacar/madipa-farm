import milk from "../assets/milk.jpg";
import milkWebp from "../assets/milk.webp";
import cows from "../assets/cows.jpg";
import cowsWebp from "../assets/cows.webp";
import guinar from "../assets/guinar.jpg";
import guinarWebp from "../assets/guinar.webp";
import etable from "../assets/etable.jpg";
import etableWebp from "../assets/etable.webp";
import jeune from "../assets/jeune.jpg";
import jeuneWebp from "../assets/jeune.webp";
import produits from "../assets/produits.jpg";
import produitsWebp from "../assets/produits.webp";

export const site = {
  brand: "Madipa Farm",
  tagline: "Agriculture & Élevage responsables au Sénégal",
  contacts: {
    phone: "+221 77 816 45 65",
    email: "info@madipafarm.com",
    address: "Dakar, Sénégal",
    whatsapp: "https://wa.me/221778164565",
  },
  social: {
    tiktok: "https://www.tiktok.com/@madip_farm",
    youtube: "#",
    facebook: "#",
  },
  tiktokIds: [
    "https://www.tiktok.com/@madip_farm/video/7545600106221931832",
    "https://www.tiktok.com/@madip_farm/video/7555960876046552332"
  ],
  trainingTypes: [
    'Hygiène de la traite',
    'Alimentation volaille/bovins',
    'Biosécurité & quarantaine',
    'Gestion d’une ferme',
    'Transformation laitière (yaourt/fromage)'
  ],
  trainings: [
    {
      id: 'hygiene-traite',
      title: 'Hygiène de la traite',
      duration: '1 jour',
      mode: 'Présentiel',
      priceHint: 'Sur devis',
      desc: 'Pratiques d’hygiène, nettoyage/désinfection, gestion de la chaîne du froid et contrôle qualité.'
    },
    {
      id: 'alimentation',
      title: 'Alimentation volaille/bovins',
      duration: '2 jours',
      mode: 'Présentiel / Distanciel',
      priceHint: 'Sur devis',
      desc: 'Rations équilibrées, matières premières locales, formulation et suivi des performances.'
    },
    {
      id: 'biosécurite',
      title: 'Biosécurité & quarantaine',
      duration: '1 jour',
      mode: 'Présentiel',
      priceHint: 'Sur devis',
      desc: 'Protocoles d’entrée/sortie, quarantaine, plan sanitaire, prévention des maladies.'
    },
    {
      id: 'gestion-ferme',
      title: 'Gestion d’une ferme',
      duration: '2 jours',
      mode: 'Présentiel / Distanciel',
      priceHint: 'Sur devis',
      desc: 'Organisation, suivi des coûts, planification des tâches et pilotage de la rentabilité.'
    },
    {
      id: 'transformation-laitiere',
      title: 'Transformation laitière (yaourt/fromage)',
      duration: '2 jours',
      mode: 'Présentiel',
      priceHint: 'Sur devis',
      desc: 'Bases techniques pour produire yaourt et fromage en respectant les normes d’hygiène.'
    }
  ],
  products: [
    {
      title: "Lait frais pasteurisé",
      desc: "Lait local, chaîne du froid respectée, prêt à consommer.",
      priceHint: "sur devis",
      image: milk,
      imageWebp: milkWebp,
    },
    {
      title: "Volaille & œufs",
      desc: "Volailles élevées avec une alimentation équilibrée.",
      priceHint: "sur commande",
      image: guinar,
      imageWebp: guinarWebp,
    },
    {
      title: "Chevreaux / Bovins sélectionnés",
      desc: "Sélection génétique adaptée au climat local.",
      priceHint: "à discuter",
      image: cows,
      imageWebp: cowsWebp,
    },
  ],
  services: [
    {
      title: "Visites pédagogiques",
      bullets: [
        "Découverte des ateliers",
        "Sensibilisation hygiène du lait",
        "Groupes scolaires et étudiants",
      ],
      cta: "Demander un programme",
    },
    {
      title: "Formations techniques",
      bullets: [
        "Alimentation volaille/bovins",
        "Quarantaine & biosécurité",
        "Gestion d’une ferme",
      ],
      cta: "Voir les dates",
    },
    {
      title: "Conseil en élevage",
      bullets: ["Audit de ferme", "Plan d’amélioration", "Suivi à distance"],
      cta: "Prendre rendez-vous",
    },
  ],
  testimonials: [
    {
      name: "Awa D.",
      quote:
        "Une ferme modèle et une équipe disponible. Nous avons beaucoup appris.",
    },
    {
      name: "Moussa K.",
      quote:
        "Le lait est excellent et le respect des normes est au rendez-vous.",
    },
    {
      name: "Institut Agri",
      quote: "Partenaire fiable pour la formation des jeunes agripreneurs.",
    },
  ],
  gallery: [
    { src: cows, srcWebp: cowsWebp, alt: "Bovins au pâturage" },
    { src: milk, srcWebp: milkWebp, alt: "Traite et hygiène du lait" },
    { src: guinar, srcWebp: guinarWebp, alt: "Élevage de volaille" },
    { src: jeune, srcWebp: jeuneWebp, alt: "Jeune agricultrice" },
    { src: etable, srcWebp: etableWebp, alt: "Étable propre" },
    { src: produits, srcWebp: produitsWebp, alt: "Produits laitiers" },
  ],
  posts: [
    {
      title: "Hygiène de la traite : nos bonnes pratiques",
      date: "2025-01-10",
      tag: "Hygiène",
      excerpt: "Découvrez comment nous assurons une qualité constante du lait.",
    },
    {
      title: "Alimentation équilibrée des volailles",
      date: "2025-01-05",
      tag: "Volaille",
      excerpt: "Quelques bases simples pour démarrer correctement.",
    },
    {
      title: "Former la jeunesse, notre priorité",
      date: "2024-12-20",
      tag: "Formation",
      excerpt: "Transmettre des savoirs concrets pour l’autonomie.",
    },
  ],
};
