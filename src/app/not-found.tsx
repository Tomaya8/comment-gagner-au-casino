import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Non Trouvée",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
      <p className="text-xl text-muted mb-8">
        Oups ! Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn-cta">
          Retour à l&apos;accueil
        </Link>
        <Link href="/blog" className="btn-cta !bg-surface !text-gold border border-gold">
          Lire le blog
        </Link>
      </div>
    </div>
  );
}
