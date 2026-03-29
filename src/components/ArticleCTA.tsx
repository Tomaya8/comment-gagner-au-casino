import Link from "next/link";

export default function ArticleCTA() {
  return (
    <div className="card p-6 mt-10 mb-6 text-center bg-gradient-to-br from-card-bg to-surface">
      <h3 className="text-xl font-bold text-gold mb-3">
        Prêt à mettre en pratique ces conseils ?
      </h3>
      <p className="text-muted mb-5 max-w-lg mx-auto">
        Consultez notre sélection de casinos en ligne fiables pour jouer en toute sécurité,
        ou explorez nos autres guides pour approfondir vos connaissances.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/casinos-en-ligne" className="btn-cta">
          Casinos Recommandés
        </Link>
        <Link
          href="/"
          className="inline-block font-bold py-3.5 px-8 rounded-lg border border-gold text-gold hover:bg-gold hover:text-black transition-colors"
        >
          Guide Complet
        </Link>
      </div>
    </div>
  );
}
