import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { BlogCard } from "@/components/BlogHero";
import { getThemeStyle } from "@/components/BlogHero";

const theme = "mythes-casino";
const style = getThemeStyle(theme);

export const metadata: Metadata = {
  title: "Mythes du Casino Démystifiés",
  description:
    "Démystifiez les croyances populaires sur le casino : peut-on battre la maison ? Les fausses stratégies et les idées reçues passées au crible.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/blog/mythes-casino",
  },
};

const articles = [
  {
    title: "Peut-on Battre le Casino ?",
    description: "Analyse mathématique des possibilités réelles.",
    href: "/blog/mythes-casino/battre-le-casino",
  },
  {
    title: "Les Fausses Stratégies à Éviter",
    description: "Pourquoi ces méthodes populaires ne fonctionnent pas.",
    href: "/blog/mythes-casino/fausses-stratégies",
  },
  {
    title: "10 Idées Reçues sur les Casinos",
    description: "Machines truquées, chance du débutant : la vérité.",
    href: "/blog/mythes-casino/idees-recues-casino",
  },
];

export default function MythesCasinoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Mythes du Casino" },
        ]}
      />

      <BlogHero
        title="Mythes du Casino"
        description="Démystifiez les croyances populaires et les fausses stratégies coûteuses."
        icon={style.icon}
        gradient={style.gradient}
      />

      <p className="text-muted mb-8 text-lg leading-relaxed">
        Le monde du casino est truffé de mythes et de fausses croyances qui coûtent cher aux
        joueurs. Machines truquées, stratégies infaillibles, chance du débutant... Nos articles
        passent au crible les idées reçues les plus répandues et vous révèlent la vérité
        mathématique derrière chaque mythe.
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
