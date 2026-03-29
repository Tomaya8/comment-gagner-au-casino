import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "mathematiques-casino";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Mathématiques du Casino : Probabilités et Avantage Maison",
  description:
    "Décryptez les mathématiques du casino : avantage de la maison, probabilités des jeux et fonctionnement du RNG. Comprenez les chiffres derrière le hasard.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/mathematiques-casino",
  },
};

const articles = [
  {
    title: "L'Avantage de la Maison Expliqué",
    description: "Le mécanisme fondamental de profit des casinos expliqué.",
    href: "/blog/mathematiques-casino/avantage-maison",
  },
  {
    title: "Probabilités des Jeux de Casino",
    description: "Les probabilités détaillées de chaque jeu de casino.",
    href: "/blog/mathematiques-casino/probabilites-jeux-casino",
  },
  {
    title: "Le RNG Expliqué",
    description: "Comment fonctionnent les générateurs de nombres aléatoires.",
    href: "/blog/mathematiques-casino/rng-explique",
  },
];

export default function MathematiquesCasinoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Mathématiques du Casino" },
        ]}
      />

      <BlogHero
        title="Mathématiques du Casino"
        description="Probabilités, avantage maison et espérance mathématique décryptés."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Derrière chaque jeu de casino se cachent des formules mathématiques précises. L'avantage
        de la maison, les probabilités et le générateur de nombres aléatoires (RNG) déterminent
        vos chances réelles. Nos articles rendent ces concepts accessibles pour que vous compreniez
        exactement comment fonctionnent les jeux auxquels vous jouez.
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
