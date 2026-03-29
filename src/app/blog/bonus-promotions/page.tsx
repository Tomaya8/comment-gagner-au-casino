import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "bonus-promotions";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Bonus Casino : Guides et Astuces",
  description:
    "Comprendre et optimiser les bonus de casino : bonus sans dépôt, conditions de wagering et stratégies pour maximiser vos avantages.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/bonus-promotions",
  },
};

const articles = [
  {
    title: "Bonus Sans Dépôt : Guide Complet",
    description: "Comment obtenir et utiliser les bonus sans dépôt.",
    href: "/blog/bonus-promotions/bonus-sans-depot",
  },
  {
    title: "Comprendre le Wagering",
    description: "Conditions de mise : calcul, évaluation et pièges.",
    href: "/blog/bonus-promotions/comprendre-wagering",
  },
  {
    title: "Optimiser les Bonus de Casino",
    description: "Stratégies pour maximiser la valeur de chaque bonus.",
    href: "/blog/bonus-promotions/optimiser-bonus-casino",
  },
];

export default function BonusPromotionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Bonus & Promotions" },
        ]}
      />

      <BlogHero
        title="Bonus & Promotions"
        description="Comprendre, évaluer et optimiser les bonus pour en tirer le meilleur parti."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Les bonus de casino peuvent sembler généreux, mais les conditions de wagering cachent
        souvent des pièges. Nos guides vous apprennent à décrypter les offres, calculer la
        valeur réelle d'un bonus et adopter les bonnes stratégies pour en tirer un véritable
        avantage.
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
