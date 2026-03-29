import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "strategie-blackjack";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Stratégies Blackjack : Guides",
  description:
    "Maîtrisez le blackjack avec nos guides complets : stratégie de base, comptage de cartes, erreurs à éviter. Devenez un joueur éclairé.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/strategie-blackjack",
  },
};

const articles = [
  {
    title: "Stratégie de Base Expliquée",
    description: "Le tableau complet des décisions optimales au blackjack.",
    href: "/blog/strategie-blackjack/strategie-de-base",
  },
  {
    title: "Compter les Cartes : Réalité vs Fiction",
    description: "Fonctionnement, efficacité et limites du comptage de cartes.",
    href: "/blog/strategie-blackjack/compter-les-cartes",
  },
  {
    title: "Les Erreurs les Plus Fréquentes",
    description: "Les erreurs qui coûtent cher et comment les éviter.",
    href: "/blog/strategie-blackjack/erreurs-frequentes",
  },
];

export default function StrategieBlackjackPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Stratégies Blackjack" },
        ]}
      />

      <BlogHero
        title="Stratégies Blackjack"
        description="Maîtrisez la stratégie de base, le comptage et les décisions optimales."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Le blackjack est l'un des rares jeux de casino où vos décisions influencent directement
        le résultat. Avec la bonne stratégie, vous pouvez réduire l'avantage de la maison à moins
        de 1 %. Nos guides détaillent la stratégie de base, explorent le comptage de cartes et
        identifient les erreurs les plus coûteuses à éviter.
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
