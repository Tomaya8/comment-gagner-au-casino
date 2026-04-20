import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { casinos, getCasinoBySlug } from "@/data/casinos";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) return {};
  return {
    title: casino.metaTitle,
    description: casino.metaDescription,
    alternates: {
      canonical: `https://comment-gagner-au-casino.com/casinos-en-ligne/${casino.slug}`,
    },
  };
}

export default async function CasinoReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) notFound();

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: casino.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: casino.rating,
      bestRating: 5,
    },
    reviewBody: casino.summary,
    author: { "@type": "Organization", name: "Comment gagner au casino" },
    publisher: { "@type": "Organization", name: "Comment gagner au casino" },
    positiveNotes: {
      "@type": "ItemList",
      itemListElement: casino.pros.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p,
      })),
    },
    negativeNotes: {
      "@type": "ItemList",
      itemListElement: casino.cons.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c,
      })),
    },
  };

  const paragraphs = casino.fullReview.split("\n\n").filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Casinos en Ligne", href: "/casinos-en-ligne" },
            { label: casino.name },
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Avis {casino.name} — Test complet {new Date().getFullYear()}
          </h1>
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span>{"⭐".repeat(Math.round(casino.rating))}</span>
            <span className="text-sm text-muted">{casino.rating.toFixed(1)} / 5</span>
            <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded">
              {casino.license}
            </span>
            <span className="text-xs bg-card-bg px-2 py-1 rounded">
              Depuis {casino.founded}
            </span>
          </div>
          <p className="text-lg text-muted leading-relaxed">{casino.summary}</p>
          <div className="mt-6">
            <a
              href={casino.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="btn-cta inline-block !py-3 !px-8"
            >
              Visiter {casino.name} →
            </a>
          </div>
        </header>

        <section className="card p-6 mb-8">
          <h2 className="text-xl font-bold text-gold mb-3">Bonus de bienvenue</h2>
          <p className="text-2xl font-bold text-gold-light mb-2">{casino.bonus}</p>
          <p className="text-sm text-muted">
            Conditions de mise : x{casino.wagering} · Dépôt minimum : {casino.minDeposit} · Retraits : {casino.withdrawalTime}
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gold mb-4">Notre avis détaillé</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="grid sm:grid-cols-2 gap-6 my-8">
          <div>
            <h2 className="text-xl font-bold text-gold mb-3">Points forts</h2>
            <ul className="space-y-2">
              {casino.pros.map((p) => (
                <li key={p} className="flex gap-2 text-muted">
                  <span className="text-green-400">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gold mb-3">Points faibles</h2>
            <ul className="space-y-2">
              {casino.cons.map((c) => (
                <li key={c} className="flex gap-2 text-muted">
                  <span className="text-red-400">−</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-bold text-gold mb-3">Jeux et fournisseurs</h2>
          <div className="flex flex-wrap gap-2">
            {casino.providers.map((p) => (
              <span key={p} className="text-sm bg-card-bg px-3 py-1 rounded">
                {p}
              </span>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-bold text-gold mb-3">Méthodes de paiement</h2>
          <div className="flex flex-wrap gap-2">
            {casino.paymentMethods.map((p) => (
              <span key={p} className="text-sm bg-card-bg px-3 py-1 rounded">
                {p}
              </span>
            ))}
          </div>
        </section>

        <section className="card p-6 my-10 text-center">
          <p className="text-lg font-bold mb-2">Prêt à essayer {casino.name} ?</p>
          <p className="text-muted mb-4">{casino.bonus}</p>
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="btn-cta inline-block !py-3 !px-8"
          >
            Réclamer le bonus →
          </a>
          <p className="text-xs text-muted mt-3">18+ | Jeu responsable | Conditions de bonus applicables</p>
        </section>

        <section className="card p-6 my-8 text-sm text-muted leading-relaxed">
          <p className="font-semibold text-foreground mb-2">Transparence</p>
          <p>
            Cet article contient des liens d&apos;affiliation : notre site perçoit une
            commission sur les inscriptions réalisées via ces liens, sans surcoût pour vous.
            Cela n&apos;influence ni la note ni la teneur de l&apos;analyse. Les jeux
            d&apos;argent comportent des risques. Joueurs-info-service : 09 74 75 13 13.
          </p>
        </section>

        <div className="border-t border-card-border pt-6 mt-10">
          <Link href="/casinos-en-ligne" className="text-gold hover:underline">
            ← Retour aux casinos en ligne
          </Link>
        </div>
      </div>
    </>
  );
}
