import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "strategie-roulette";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Stratégies Roulette : Guides",
  description:
    "Découvrez nos analyses complètes des stratégies de roulette : martingale, mises rouge/noir, gestion des pertes. Approche mathématique et honnête.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/strategie-roulette",
  },
};

const articles = [
  {
    title: "La Martingale : Fonctionne-t-elle Vraiment ?",
    description: "Analyse mathématique de la martingale et de ses limites réelles.",
    href: "/blog/strategie-roulette/martingale-fonctionne-t-elle",
  },
  {
    title: "Stratégie Rouge/Noir : Analyse Complète",
    description: "Mises extérieures, gestion de bankroll et probabilités détaillées.",
    href: "/blog/strategie-roulette/strategie-rouge-noir",
  },
  {
    title: "Techniques pour Limiter les Pertes",
    description: "Techniques éprouvées pour protéger votre bankroll à la roulette.",
    href: "/blog/strategie-roulette/limiter-pertes-roulette",
  },
];

export default function StrategieRoulettePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Stratégies Roulette" },
        ]}
      />

      <BlogHero
        title="Stratégies Roulette"
        description="Analyses mathématiques et stratégies pour optimiser vos mises à la roulette."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        La roulette fascine par sa simplicité apparente, mais cache une complexité mathématique
        que peu de joueurs maîtrisent. Nos articles analysent les stratégies les plus populaires
        avec rigueur, en distinguant ce qui fonctionne réellement de ce qui relève du mythe.
        Découvrez comment optimiser vos mises tout en gardant des attentes réalistes.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {articles.map((article) => (
          <BlogCard
            key={article.href}
            title={article.title}
            description={article.description}
            href={article.href}
            theme={theme}
          />
        ))}
      </div>

      <div className="text-center">
        <Link href="/blog" className="text-gold hover:text-gold-light transition-colors">
          ← Retour au Blog
        </Link>
      </div>
    </div>
  );
}
