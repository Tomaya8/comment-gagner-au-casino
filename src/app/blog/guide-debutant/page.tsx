import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "guide-débutant";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Guides Débutants Casino : Par Où Commencer ?",
  description:
    "Guides complets pour débuter au casino : premiers pas, choix des jeux faciles et définition du budget initial. Tout pour bien commencer.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/guide-debutant",
  },
};

const articles = [
  {
    title: "Comment Commencer au Casino",
    description: "Guide pas à pas pour vos premiers pas au casino.",
    href: "/blog/guide-débutant/commencer-au-casino",
  },
  {
    title: "Les Jeux les Plus Faciles",
    description: "Classement des jeux par difficulté avec conseils.",
    href: "/blog/guide-débutant/jeux-faciles-casino",
  },
  {
    title: "Quel Budget pour Commencer ?",
    description: "Définir son budget et gérer sa bankroll.",
    href: "/blog/guide-débutant/budget-initial-casino",
  },
];

export default function GuideDébutantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Guides Débutants" },
        ]}
      />

      <BlogHero
        title="Guides Débutants"
        description="Tout ce qu'il faut savoir pour débuter : premiers pas, choix des jeux et budget."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Vous débutez au casino et ne savez pas par où commencer ? Nos guides sont conçus
        spécialement pour les nouveaux joueurs. Apprenez à choisir les jeux adaptés à votre
        niveau, définissez un budget raisonnable et découvrez les bases essentielles pour
        profiter du casino sans mauvaise surprise.
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
