import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "casinos-en-ligne";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Casinos en Ligne : Guides pour Choisir et Jouer en Sécurité",
  description:
    "Guides pour choisir un casino en ligne fiable : licences, méthodes de paiement et critères de sécurité. Jouez en toute confiance.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/casinos-en-ligne",
  },
};

const articles = [
  {
    title: "Choisir un Casino en Ligne Fiable",
    description: "Les 7 critères pour identifiér un casino sérieux.",
    href: "/blog/casinos-en-ligne/choisir-casino-fiable",
  },
  {
    title: "Les Licences de Casino",
    description: "MGA, Curaçao, UKGC : comprendre les licences.",
    href: "/blog/casinos-en-ligne/licences-casino",
  },
  {
    title: "Méthodes de Paiement",
    description: "Comparatif des méthodes de dépôt et retrait.",
    href: "/blog/casinos-en-ligne/méthodes-paiement-casino",
  },
];

export default function CasinosEnLignePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Casinos en Ligne" },
        ]}
      />

      <BlogHero
        title="Casinos en Ligne"
        description="Guides pour choisir, évaluer et utiliser les casinos en ligne en sécurité."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Choisir un casino en ligne fiable est la première étape pour jouer sereinement. Entre
        les licences, les méthodes de paiement et les critères de sécurité, il y a beaucoup à
        évaluer. Nos guides vous donnent les clés pour identifiér les plateformes sérieuses et
        éviter les mauvaises surprises.
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
