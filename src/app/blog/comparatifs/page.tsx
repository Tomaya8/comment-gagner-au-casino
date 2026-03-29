import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "comparatifs";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Comparatifs Casino : Classements Objectifs des Meilleurs Sites",
  description:
    "Comparatifs objectifs des meilleurs casinos en ligne : classement par fiabilité, rapidité des retraits et taux de redistribution (RTP).",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/comparatifs",
  },
};

const articles = [
  {
    title: "Les Meilleurs Casinos en France",
    description: "Notre sélection des casinos les plus fiables.",
    href: "/blog/comparatifs/meilleurs-casinos-france",
  },
  {
    title: "Casinos avec Retraits Rapides",
    description: "Les casinos qui paient le plus vite.",
    href: "/blog/comparatifs/casinos-retrait-rapide",
  },
  {
    title: "Casinos avec le Meilleur RTP",
    description: "Les plateformes avec les meilleurs taux de redistribution.",
    href: "/blog/comparatifs/casinos-rtp-élevé",
  },
];

export default function ComparatifsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Comparatifs" },
        ]}
      />

      <BlogHero
        title="Comparatifs"
        description="Comparatifs objectifs des meilleurs casinos selon différents critères."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Trouver le bon casino en ligne parmi des centaines d'options peut être déroutant. Nos
        comparatifs classent les plateformes selon des critères objectifs : fiabilité, rapidité
        des retraits et taux de redistribution. Des analyses factuelles pour vous aider à faire
        le meilleur choix.
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
