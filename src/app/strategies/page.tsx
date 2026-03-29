import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Stratégies Casino : Nos Guides",
  description:
    "Stratégies de casino : roulette, blackjack, machines à sous, bankroll, mathématiques et psychologie du joueur. Guides détaillés par des experts.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/strategies",
  },
};

const strategyArticles = [
  {
    title: "Stratégie Roulette : Systèmes de Mise et Probabilités",
    href: "/blog/strategie-roulette",
    description:
      "Analyse complète de la martingale, Fibonacci, Paroli et D'Alembert. Comprendre pourquoi aucun système ne bat l'avantage maison, et comment optimiser vos sessions malgré tout.",
    category: "Roulette",
    icon: "🎯",
  },
  {
    title: "Stratégie Blackjack : Tableau de Base et Techniques Avancées",
    href: "/blog/strategie-blackjack",
    description:
      "La stratégie de base complète en tableaux, les règles de split et double optimales, et la réalité du comptage de cartes en ligne.",
    category: "Blackjack",
    icon: "🃏",
  },
  {
    title: "Les Mathématiques du Casino Expliquées",
    href: "/blog/mathematiques-casino",
    description:
      "RTP, avantage maison, espérance mathématique, variance et écart-type : tous les concepts mathématiques essentiels pour comprendre comment fonctionne réellement un casino.",
    category: "Fondamentaux",
    icon: "📊",
  },
  {
    title: "Guide Complet du Débutant au Casino",
    href: "/blog/guide-debutant",
    description:
      "Tout ce qu'un nouveau joueur doit savoir avant de miser son premier euro : choix du jeu, gestion de bankroll, pièges à éviter et bonnes pratiques.",
    category: "Débutant",
    icon: "📖",
  },
  {
    title: "Bonus et Promotions : Comment en Profiter Intelligemment",
    href: "/blog/bonus-promotions",
    description:
      "Décryptage des conditions de mise (wagering), des bonus de bienvenue, des tours gratuits et des programmes VIP. Identifier les offres réellement avantageuses.",
    category: "Bonus",
    icon: "🎁",
  },
  {
    title: "Psychologie du Joueur : Biais Cognitifs et Discipline",
    href: "/blog/psychologie-joueur",
    description:
      "Le biais du joueur, l'illusion de contrôle, le biais de confirmation et l'effet de near miss. Comprendre votre propre psychologie pour jouer de manière responsable.",
    category: "Psychologie",
    icon: "🧠",
  },
  {
    title: "Machines à Sous : Choisir les Meilleures Slots",
    href: "/blog/machines-a-sous",
    description:
      "Comment identifier les machines avec le meilleur RTP, comprendre la volatilité et exploiter les bonus features pour maximiser votre temps de jeu.",
    category: "Slots",
    icon: "🎰",
  },
  {
    title: "Mythes du Casino : Vérités et Fausses Croyances",
    href: "/blog/mythes-casino",
    description:
      "Les machines chaudes et froides, les systèmes infaillibles, les croupiers qui contrôlent la bille : démystification des croyances les plus répandues.",
    category: "Culture",
    icon: "🔍",
  },
  {
    title: "Comparatifs Casinos en Ligne",
    href: "/blog/comparatifs",
    description:
      "Comparaison détaillée des meilleurs casinos en ligne pour les joueurs français : licences, RTP moyens, méthodes de paiement, service client et bonus.",
    category: "Comparatifs",
    icon: "⚖️",
  },
  {
    title: "Casinos en Ligne : Guide de Sécurité",
    href: "/blog/casinos-en-ligne",
    description:
      "Comment vérifier la licence d'un casino, reconnaître les sites fiables, protéger vos données personnelles et vos transactions financières.",
    category: "Sécurité",
    icon: "🛡️",
  },
];

export default function StrategiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Stratégies" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gold mb-4">
        Stratégies de Casino : Guides Complets
      </h1>

      <div className="prose mb-8">
        <p>
          Le casino est un divertissement à{" "}
          <strong>espérance mathématique négative</strong>. Aucune stratégie ne
          peut garantir des gains sur le long terme. Cependant, comprendre les{" "}
          <strong>probabilités</strong>, le <strong>RTP</strong> de chaque jeu et
          les principes de <strong>gestion de bankroll</strong> permet de jouer
          de manière plus intelligente, de prolonger ses sessions et de limiter
          ses pertes.
        </p>
        <p>
          Nos guides sont rédigés avec rigueur, en se basant sur les
          mathématiques et les statistiques, pas sur des promesses de gains
          faciles. Explorez nos articles ci-dessous, et consultez également nos{" "}
          <Link href="/jeux" className="text-gold hover:text-gold-light">
            guides de jeux détaillés
          </Link>{" "}
          pour les règles et probabilités spécifiques à chaque jeu.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {strategyArticles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="card group block"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{article.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-lg font-bold text-gold group-hover:text-gold-light transition-colors">
                    {article.title}
                  </h2>
                  <span className="text-xs bg-card-bg px-2 py-0.5 rounded text-muted">
                    {article.category}
                  </span>
                </div>
                <p className="text-sm text-muted">{article.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gold mb-3">
          Guides de Jeux Spécifiques
        </h2>
        <p className="text-sm text-muted mb-4">
          Pour les règles détaillées, les probabilités exactes et les
          stratégies spécifiques à chaque jeu, consultez nos guides dédiés :
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link
            href="/jeux/roulette"
            className="text-center p-3 bg-card-bg rounded hover:bg-surface transition-colors"
          >
            <span className="block text-2xl mb-1">🎯</span>
            <span className="text-sm font-semibold text-gold">Roulette</span>
          </Link>
          <Link
            href="/jeux/blackjack"
            className="text-center p-3 bg-card-bg rounded hover:bg-surface transition-colors"
          >
            <span className="block text-2xl mb-1">🃏</span>
            <span className="text-sm font-semibold text-gold">Blackjack</span>
          </Link>
          <Link
            href="/jeux/machines-a-sous"
            className="text-center p-3 bg-card-bg rounded hover:bg-surface transition-colors"
          >
            <span className="block text-2xl mb-1">🎰</span>
            <span className="text-sm font-semibold text-gold">
              Machines à Sous
            </span>
          </Link>
          <Link
            href="/jeux/baccarat"
            className="text-center p-3 bg-card-bg rounded hover:bg-surface transition-colors"
          >
            <span className="block text-2xl mb-1">👑</span>
            <span className="text-sm font-semibold text-gold">Baccarat</span>
          </Link>
          <Link
            href="/jeux/video-poker"
            className="text-center p-3 bg-card-bg rounded hover:bg-surface transition-colors"
          >
            <span className="block text-2xl mb-1">🎴</span>
            <span className="text-sm font-semibold text-gold">
              Vidéo Poker
            </span>
          </Link>
          <Link
            href="/casinos-en-ligne"
            className="text-center p-3 bg-card-bg rounded hover:bg-surface transition-colors"
          >
            <span className="block text-2xl mb-1">🏆</span>
            <span className="text-sm font-semibold text-gold">
              Top Casinos
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
