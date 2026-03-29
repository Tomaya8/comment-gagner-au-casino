import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "machines-a-sous";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Machines à Sous : RTP et Guides",
  description:
    "Tout comprendre sur les machines à sous : RTP, volatilité, chances de gains et gestion du budget. Guides honnêtes basés sur les faits.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/machines-a-sous",
  },
};

const articles = [
  {
    title: "Peut-on Réellement Gagner aux Slots ?",
    description: "Analyse honnête des chances réelles aux machines à sous.",
    href: "/blog/machines-a-sous/peut-on-gagner-aux-slots",
  },
  {
    title: "RTP et Volatilité : Tout Comprendre",
    description: "Comprendre les deux métriques clés des machines à sous.",
    href: "/blog/machines-a-sous/rtp-volatilite-expliques",
  },
  {
    title: "Gestion du Budget aux Machines à Sous",
    description: "Comment gérer sa bankroll efficacement sur les machines.",
    href: "/blog/machines-a-sous/gestion-budget-slots",
  },
];

export default function MachinesASousPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Machines à Sous" },
        ]}
      />

      <BlogHero
        title="Machines à Sous"
        description="Comprendre le RTP, la volatilité et les mécaniques pour faire les meilleurs choix."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Les machines à sous sont les jeux les plus populaires au casino, mais aussi parmi les
        moins bien compris. Nos articles vous expliquent le fonctionnement du RTP et de la
        volatilité, analysent vos véritables chances de gain et vous donnent les clés pour
        gérer votre budget intelligemment.
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
