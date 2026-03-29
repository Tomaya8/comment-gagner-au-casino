import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "psychologie-joueur";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Psychologie du Joueur : Biais Cognitifs et Gestion des Émotions",
  description:
    "Comprenez les mécanismes psychologiques du jeu : biais cognitifs, gestion émotionnelle et raisons des pertes. Jouez en toute conscience.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/psychologie-joueur",
  },
};

const articles = [
  {
    title: "Pourquoi On Perd au Casino",
    description: "Les raisons psychologiques et mathématiques des pertes.",
    href: "/blog/psychologie-joueur/pourquoi-on-perd",
  },
  {
    title: "Les Biais Cognitifs du Joueur",
    description: "Les pièges mentaux qui influencent vos décisions de jeu.",
    href: "/blog/psychologie-joueur/biais-cognitifs",
  },
  {
    title: "Gestion Émotionnelle au Casino",
    description: "Contrôler ses émotions pour de meilleures décisions.",
    href: "/blog/psychologie-joueur/gestion-emotionnelle",
  },
];

export default function PsychologieJoueurPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Psychologie du Joueur" },
        ]}
      />

      <BlogHero
        title="Psychologie du Joueur"
        description="Comprenez les biais cognitifs et la gestion des émotions pour jouer sereinement."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Le casino est autant un jeu mental qu'un jeu de hasard. Les biais cognitifs, les
        émotions et les illusions de contrôle influencent vos décisions bien plus que vous ne
        le pensez. Nos articles vous aident à comprendre ces mécanismes pour jouer de manière
        plus lucide et responsable.
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
