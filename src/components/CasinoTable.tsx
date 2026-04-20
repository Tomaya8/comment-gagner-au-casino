import Link from "next/link";
import { casinos } from "@/data/casinos";

function starString(rating: number): string {
  const full = Math.round(rating);
  return "⭐".repeat(Math.min(5, full));
}

export default function CasinoTable() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gold mb-6"><span aria-hidden="true">🏆</span> Top Casinos Recommandés en France</h2>

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {casinos.map((casino) => (
          <div key={casino.slug} className="card p-4">
            <p className="text-lg font-bold mb-1">{casino.name}</p>
            <p className="text-gold-light font-semibold mb-2">{casino.bonus}</p>
            <div className="flex items-center justify-between text-sm mb-3">
              <span>RTP: {casino.rtp}</span>
              <span>{starString(casino.rating)}</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {casino.features.map((f) => (
                <span key={f} className="text-xs bg-card-bg px-2 py-0.5 rounded">{f}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <Link href={`/casinos-en-ligne/${casino.slug}`} className="flex-1 text-center py-2 px-3 border border-card-border rounded text-sm hover:bg-card-bg transition-colors">
                Lire l&apos;avis
              </Link>
              <a
                href={casino.affiliateUrl}
                rel="nofollow sponsored noopener"
                target="_blank"
                className="btn-cta flex-1 text-center !py-2 !px-3 text-sm"
              >
                Jouer →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: full table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card-bg">
              <th className="p-3 text-left text-gold border border-card-border">Casino</th>
              <th className="p-3 text-left text-gold border border-card-border">Bonus</th>
              <th className="p-3 text-center text-gold border border-card-border">RTP moyen</th>
              <th className="p-3 text-center text-gold border border-card-border">Note</th>
              <th className="p-3 text-left text-gold border border-card-border">Avantages</th>
              <th className="p-3 text-center text-gold border border-card-border">Action</th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((casino, i) => (
              <tr key={casino.slug} className={i % 2 === 0 ? "bg-surface" : ""}>
                <td className="p-3 font-semibold border border-card-border">
                  <Link href={`/casinos-en-ligne/${casino.slug}`} className="hover:text-gold">
                    {casino.name}
                  </Link>
                </td>
                <td className="p-3 text-gold-light border border-card-border">{casino.bonus}</td>
                <td className="p-3 text-center border border-card-border">{casino.rtp}</td>
                <td className="p-3 text-center border border-card-border">{starString(casino.rating)}</td>
                <td className="p-3 border border-card-border">
                  <div className="flex flex-wrap gap-1">
                    {casino.features.map((f) => (
                      <span key={f} className="text-xs bg-card-bg px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </td>
                <td className="p-3 text-center border border-card-border">
                  <a
                    href={casino.affiliateUrl}
                    rel="nofollow sponsored noopener"
                    target="_blank"
                    className="btn-cta text-sm !py-2 !px-4"
                  >
                    Jouer →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted mt-3">
        <span aria-hidden="true">🔞</span> 18+ | Conditions de bonus applicables. Jouez de manière responsable.
      </p>
    </section>
  );
}
