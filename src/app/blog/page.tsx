import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { BlogCard, ThemeHeader, getThemeStyle } from "@/components/BlogHero";

export const metadata: Metadata = {
  title: "Blog Casino : Guides et Astuces",
  description:
    "Guides complets sur le casino : stratégies, mythes, bonus, comparatifs et conseils débutants. Articles pour jouer intelligemment.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog",
  },
};

const themes = [
  {
    slug: "strategie-roulette",
    title: "Stratégies Roulette",
    description: "Analyses mathématiques et stratégies pour optimiser vos mises à la roulette.",
    articles: [
      { title: "La Martingale Fonctionne-t-elle ?", href: "/blog/strategie-roulette/martingale-fonctionne-t-elle", description: "Analyse mathématique de la martingale et de ses limites réelles." },
      { title: "Stratégie Rouge/Noir", href: "/blog/strategie-roulette/strategie-rouge-noir", description: "Mises extérieures, gestion de bankroll et probabilités détaillées." },
      { title: "Limiter ses Pertes", href: "/blog/strategie-roulette/limiter-pertes-roulette", description: "Techniques éprouvées pour protéger votre bankroll à la roulette." },
    ],
  },
  {
    slug: "strategie-blackjack",
    title: "Stratégies Blackjack",
    description: "Maîtrisez la stratégie de base, le comptage et les décisions optimales.",
    articles: [
      { title: "La Stratégie de Base", href: "/blog/strategie-blackjack/strategie-de-base", description: "Le tableau complet des décisions optimales au blackjack." },
      { title: "Le Comptage de Cartes", href: "/blog/strategie-blackjack/compter-les-cartes", description: "Fonctionnement, efficacité et limites du comptage de cartes." },
      { title: "Erreurs Fréquentes", href: "/blog/strategie-blackjack/erreurs-frequentes", description: "Les erreurs qui coûtent cher et comment les éviter." },
    ],
  },
  {
    slug: "machines-a-sous",
    title: "Machines à Sous",
    description: "Comprendre le RTP, la volatilité et les mécaniques pour faire les meilleurs choix.",
    articles: [
      { title: "Peut-on Gagner aux Slots ?", href: "/blog/machines-a-sous/peut-on-gagner-aux-slots", description: "Analyse honnête des chances réelles aux machines à sous." },
      { title: "RTP et Volatilité Expliqués", href: "/blog/machines-a-sous/rtp-volatilite-expliques", description: "Comprendre les deux métriques clés des machines à sous." },
      { title: "Gestion du Budget", href: "/blog/machines-a-sous/gestion-budget-slots", description: "Comment gérer sa bankroll efficacement sur les machines." },
    ],
  },
  {
    slug: "psychologie-joueur",
    title: "Psychologie du Joueur",
    description: "Comprenez les biais cognitifs et la gestion des émotions pour jouer sereinement.",
    articles: [
      { title: "Pourquoi On Perd", href: "/blog/psychologie-joueur/pourquoi-on-perd", description: "Les raisons psychologiques et mathématiques des pertes." },
      { title: "Les Biais Cognitifs", href: "/blog/psychologie-joueur/biais-cognitifs", description: "Les pièges mentaux qui influencent vos décisions de jeu." },
      { title: "Gestion Émotionnelle", href: "/blog/psychologie-joueur/gestion-emotionnelle", description: "Contrôler ses émotions pour de meilleures décisions." },
    ],
  },
  {
    slug: "mathematiques-casino",
    title: "Mathématiques du Casino",
    description: "Probabilités, avantage maison et espérance mathématique décryptés.",
    articles: [
      { title: "L'Avantage Maison", href: "/blog/mathematiques-casino/avantage-maison", description: "Le mécanisme fondamental de profit des casinos expliqué." },
      { title: "Probabilités des Jeux", href: "/blog/mathematiques-casino/probabilites-jeux-casino", description: "Les probabilités détaillées de chaque jeu de casino." },
      { title: "Le RNG Expliqué", href: "/blog/mathematiques-casino/rng-explique", description: "Comment fonctionnent les générateurs de nombres aléatoires." },
    ],
  },
  {
    slug: "guide-debutant",
    title: "Guides Débutants",
    description: "Tout ce qu'il faut savoir pour débuter : premiers pas, choix des jeux et budget.",
    articles: [
      { title: "Comment Commencer", href: "/blog/guide-debutant/commencer-au-casino", description: "Guide pas à pas pour vos premiers pas au casino." },
      { title: "Les Jeux Faciles", href: "/blog/guide-debutant/jeux-faciles-casino", description: "Classement des jeux par difficulté avec conseils." },
      { title: "Quel Budget Initial ?", href: "/blog/guide-debutant/budget-initial-casino", description: "Définir son budget et gérer sa bankroll." },
    ],
  },
  {
    slug: "mythes-casino",
    title: "Mythes du Casino",
    description: "Démystifiez les croyances populaires et les fausses stratégies coûteuses.",
    articles: [
      { title: "Peut-on Battre le Casino ?", href: "/blog/mythes-casino/battre-le-casino", description: "Analyse mathématique des possibilités réelles." },
      { title: "Fausses Stratégies", href: "/blog/mythes-casino/fausses-strategies", description: "Pourquoi ces méthodes populaires ne fonctionnent pas." },
      { title: "10 Idées Reçues", href: "/blog/mythes-casino/idees-recues-casino", description: "Machines truquées, chance du débutant : la vérité." },
    ],
  },
  {
    slug: "casinos-en-ligne",
    title: "Casinos en Ligne",
    description: "Guides pour choisir, évaluer et utiliser les casinos en ligne en sécurité.",
    articles: [
      { title: "Choisir un Casino Fiable", href: "/blog/casinos-en-ligne/choisir-casino-fiable", description: "Les 7 critères pour identifier un casino sérieux." },
      { title: "Les Licences de Casino", href: "/blog/casinos-en-ligne/licences-casino", description: "MGA, Curaçao, UKGC : comprendre les licences." },
      { title: "Méthodes de Paiement", href: "/blog/casinos-en-ligne/methodes-paiement-casino", description: "Comparatif des méthodes de dépôt et retrait." },
    ],
  },
  {
    slug: "bonus-promotions",
    title: "Bonus & Promotions",
    description: "Comprendre, évaluer et optimiser les bonus pour en tirer le meilleur parti.",
    articles: [
      { title: "Bonus Sans Dépôt", href: "/blog/bonus-promotions/bonus-sans-depot", description: "Comment obtenir et utiliser les bonus sans dépôt." },
      { title: "Comprendre le Wagering", href: "/blog/bonus-promotions/comprendre-wagering", description: "Conditions de mise : calcul, évaluation et pièges." },
      { title: "Optimiser les Bonus", href: "/blog/bonus-promotions/optimiser-bonus-casino", description: "Stratégies pour maximiser la valeur de chaque bonus." },
    ],
  },
  {
    slug: "comparatifs",
    title: "Comparatifs",
    description: "Comparatifs objectifs des meilleurs casinos selon différents critères.",
    articles: [
      { title: "Meilleurs Casinos France", href: "/blog/comparatifs/meilleurs-casinos-france", description: "Notre sélection des casinos les plus fiables." },
      { title: "Retraits Rapides", href: "/blog/comparatifs/casinos-retrait-rapide", description: "Les casinos qui paient le plus vite." },
      { title: "Casinos RTP Élevé", href: "/blog/comparatifs/casinos-rtp-eleve", description: "Les plateformes avec les meilleurs taux de redistribution." },
    ],
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog" },
        ]}
      />

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a35] via-[#0f0f23] to-[#1a1035] mb-10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-8 text-[100px] leading-none select-none">📚</div>
          <div className="absolute bottom-4 left-12 text-[60px] leading-none select-none">✍️</div>
        </div>
        <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-4">
            Blog Casino : Guides &amp; Stratégies
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Plus de 30 articles détaillés pour comprendre les mécaniques du casino, maîtriser les
            stratégies et prendre des décisions éclairées. Basés sur les mathématiques, pas sur les mythes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-60"></div>
      </div>

      <div className="space-y-12">
        {themes.map((theme) => {
          const style = getThemeStyle(theme.slug);
          return (
            <section key={theme.slug}>
              <ThemeHeader title={theme.title} icon={style.icon} gradient={style.gradient} />
              <p className="text-muted mb-5 pl-1">{theme.description}</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {theme.articles.map((article) => (
                  <BlogCard
                    key={article.href}
                    title={article.title}
                    description={article.description}
                    href={article.href}
                    theme={theme.slug}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="card p-6 mt-12 text-center">
        <h2 className="text-xl font-bold text-gold mb-3">Prêt à Jouer ?</h2>
        <p className="text-muted mb-4">
          Découvrez notre sélection des meilleurs casinos en ligne pour les joueurs français.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/casinos-en-ligne" className="btn-cta inline-block">
            Voir les Casinos Recommandés
          </Link>
          <Link href="/jeux" className="inline-block font-bold py-3.5 px-8 rounded-lg border border-gold text-gold hover:bg-gold hover:text-black transition-colors">
            Découvrir les Jeux
          </Link>
        </div>
      </div>
    </div>
  );
}
