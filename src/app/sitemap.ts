import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://comment-gagner-au-casino.com";

  const homepageDate = new Date("2026-03-29");
  const gameDate = new Date("2026-01-10");
  const articleDate = new Date("2026-01-15");

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1.0, lastModified: homepageDate },
    { url: `${baseUrl}/jeux`, changeFrequency: "monthly" as const, priority: 0.9, lastModified: homepageDate },
    { url: `${baseUrl}/strategies`, changeFrequency: "monthly" as const, priority: 0.9, lastModified: homepageDate },
    { url: `${baseUrl}/fournisseurs`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: homepageDate },
    { url: `${baseUrl}/casinos-en-ligne`, changeFrequency: "weekly" as const, priority: 0.9, lastModified: homepageDate },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8, lastModified: homepageDate },
  ];

  const gamePages = [
    "roulette",
    "blackjack",
    "machines-a-sous",
    "baccarat",
    "video-poker",
  ].map((slug) => ({
    url: `${baseUrl}/jeux/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    lastModified: gameDate,
  }));

  const slotPages = [
    "starburst",
    "book-of-dead",
    "gates-of-olympus",
    "sweet-bonanza",
    "mega-moolah",
    "crazy-time",
    "lightning-roulette",
    "gonzos-quest",
    "reactoonz",
    "dead-or-alive-2",
  ].map((slug) => ({
    url: `${baseUrl}/jeux/machines-a-sous/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: homepageDate,
  }));

  const licencePages = [
    { slug: "", priority: 0.8 },
    { slug: "/mga", priority: 0.7 },
    { slug: "/curacao", priority: 0.7 },
    { slug: "/ukgc", priority: 0.7 },
    { slug: "/anj", priority: 0.7 },
    { slug: "/gibraltar", priority: 0.7 },
  ].map((item) => ({
    url: `${baseUrl}/licences${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: item.priority,
    lastModified: homepageDate,
  }));

  const providerPages = [
    "netent",
    "microgaming",
    "pragmatic-play",
    "playngo",
    "evolution-gaming",
    "big-time-gaming",
    "red-tiger",
    "yggdrasil",
    "nolimit-city",
  ].map((slug) => ({
    url: `${baseUrl}/fournisseurs/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: articleDate,
  }));

  const strategyPages = [
    "roulette",
    "blackjack",
    "mathematiques",
    "guide-debutant",
    "bonus-promotions",
    "psychologie",
    "machines-a-sous",
    "mythes",
    "comparatifs",
    "casinos-en-ligne",
  ].map((slug) => ({
    url: `${baseUrl}/strategies/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    lastModified: homepageDate,
  }));

  const blogCategories = [
    "strategie-roulette",
    "strategie-blackjack",
    "machines-a-sous",
    "psychologie-joueur",
    "mathematiques-casino",
    "guide-debutant",
    "mythes-casino",
    "casinos-en-ligne",
    "bonus-promotions",
    "comparatifs",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    lastModified: articleDate,
  }));

  const blogArticles = [
    "strategie-roulette/martingale-fonctionne-t-elle",
    "strategie-roulette/strategie-rouge-noir",
    "strategie-roulette/limiter-pertes-roulette",
    "strategie-blackjack/strategie-de-base",
    "strategie-blackjack/compter-les-cartes",
    "strategie-blackjack/erreurs-frequentes",
    "machines-a-sous/peut-on-gagner-aux-slots",
    "machines-a-sous/rtp-volatilite-expliques",
    "machines-a-sous/gestion-budget-slots",
    "psychologie-joueur/pourquoi-on-perd",
    "psychologie-joueur/biais-cognitifs",
    "psychologie-joueur/gestion-emotionnelle",
    "mathematiques-casino/avantage-maison",
    "mathematiques-casino/probabilites-jeux-casino",
    "mathematiques-casino/rng-explique",
    "guide-debutant/commencer-au-casino",
    "guide-debutant/jeux-faciles-casino",
    "guide-debutant/budget-initial-casino",
    "mythes-casino/battre-le-casino",
    "mythes-casino/fausses-strategies",
    "mythes-casino/idees-recues-casino",
    "casinos-en-ligne/choisir-casino-fiable",
    "casinos-en-ligne/licences-casino",
    "casinos-en-ligne/methodes-paiement-casino",
    "bonus-promotions/bonus-sans-depot",
    "bonus-promotions/comprendre-wagering",
    "bonus-promotions/optimiser-bonus-casino",
    "comparatifs/meilleurs-casinos-france",
    "comparatifs/casinos-retrait-rapide",
    "comparatifs/casinos-rtp-eleve",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: articleDate,
  }));

  return [...staticPages, ...gamePages, ...slotPages, ...strategyPages, ...providerPages, ...licencePages, ...blogCategories, ...blogArticles];
}
