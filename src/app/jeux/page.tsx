import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Jeux de Casino : Guides Complets et Stratégies",
  description:
    "Découvrez tous les jeux de casino en ligne : roulette, blackjack, machines à sous, baccarat et vidéo poker. Règles, probabilités, RTP et stratégies détaillées.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/jeux",
  },
};

const games = [
  {
    title: "Roulette",
    href: "/jeux/roulette",
    description:
      "Européenne ou américaine, découvrez les probabilités de chaque mise, l'analyse de la martingale et les stratégies pour réduire l'avantage maison.",
    rtp: "97.3%",
    difficulty: "Facile",
    icon: "🎯",
  },
  {
    title: "Blackjack",
    href: "/jeux/blackjack",
    description:
      "Maîtrisez la stratégie de base, comprenez le comptage de cartes et optimisez vos décisions de split, double et assurance.",
    rtp: "99.5%",
    difficulty: "Intermédiaire",
    icon: "🃏",
  },
  {
    title: "Machines à Sous",
    href: "/jeux/machines-a-sous",
    description:
      "RTP, volatilité, paylines et jackpots progressifs : tout comprendre pour choisir les meilleures machines à sous en ligne.",
    rtp: "92-98%",
    difficulty: "Facile",
    icon: "🎰",
  },
  {
    title: "Baccarat",
    href: "/jeux/baccarat",
    description:
      "Banco, Punto et la règle de la troisième carte. Découvrez pourquoi le baccarat offre l'un des meilleurs avantages maison du casino.",
    rtp: "98.9%",
    difficulty: "Facile",
    icon: "👑",
  },
  {
    title: "Vidéo Poker",
    href: "/jeux/video-poker",
    description:
      "Jacks or Better, Deuces Wild et autres variantes. Apprenez la stratégie optimale pour atteindre un RTP supérieur à 99%.",
    rtp: "99.5%",
    difficulty: "Avancé",
    icon: "🎴",
  },
];

export default function JeuxPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Jeux de Casino" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gold mb-4">
        Jeux de Casino : Guides Complets
      </h1>

      <div className="prose mb-8">
        <p>
          Chaque jeu de casino possède ses propres règles, son propre{" "}
          <strong>avantage maison</strong> et ses propres stratégies. Avant de
          miser votre argent, il est essentiel de comprendre les{" "}
          <strong>probabilités</strong>, le <strong>RTP</strong> (taux de
          redistribution) et les mécaniques de chaque jeu. Nos guides détaillés
          vous fournissent toutes les informations nécessaires pour jouer de
          manière éclairée.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {games.map((game) => (
          <Link key={game.href} href={game.href} className="card group block">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{game.icon}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gold group-hover:text-gold-light transition-colors mb-2">
                  {game.title}
                </h2>
                <p className="text-sm text-muted mb-3">{game.description}</p>
                <div className="flex gap-4 text-xs">
                  <span className="bg-card-bg px-2 py-1 rounded">
                    RTP : {game.rtp}
                  </span>
                  <span className="bg-card-bg px-2 py-1 rounded">
                    Difficulté : {game.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gold mb-3">
          Comment choisir votre jeu ?
        </h2>
        <div className="prose">
          <p>
            Le choix du jeu dépend de votre profil de joueur. Si vous recherchez
            le <strong>meilleur RTP</strong>, orientez-vous vers le blackjack ou
            le vidéo poker. Si vous préférez un jeu simple et rapide, la
            roulette ou le baccarat sont idéaux. Les machines à sous offrent le
            plus de variété et de divertissement, avec des{" "}
            <strong>jackpots progressifs</strong> potentiellement
            transformateurs.
          </p>
          <p>
            Consultez également nos{" "}
            <Link href="/strategies" className="text-gold hover:text-gold-light">
              stratégies détaillées
            </Link>{" "}
            et nos{" "}
            <Link href="/blog/guide-debutant" className="text-gold hover:text-gold-light">
              guides pour débutants
            </Link>{" "}
            pour maximiser vos chances.
          </p>
        </div>
      </div>
    </div>
  );
}
