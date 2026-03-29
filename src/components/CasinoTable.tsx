interface Casino {
  name: string;
  bonus: string;
  rtp: string;
  rating: string;
  features: string[];
}

const topCasinos: Casino[] = [
  {
    name: "Casino Extra",
    bonus: "350€ + 100 tours gratuits",
    rtp: "97.1%",
    rating: "⭐⭐⭐⭐⭐",
    features: ["Retrait rapide", "Live casino", "+3000 jeux"],
  },
  {
    name: "Lucky8",
    bonus: "200€ + 500 free spins",
    rtp: "96.8%",
    rating: "⭐⭐⭐⭐⭐",
    features: ["Licence Curaçao", "Crypto accepté", "Support 24/7"],
  },
  {
    name: "Madnix",
    bonus: "100% jusqu'à 300€",
    rtp: "96.5%",
    rating: "⭐⭐⭐⭐",
    features: ["VIP programme", "Paiements rapides", "Mobile optimisé"],
  },
  {
    name: "Cresus Casino",
    bonus: "500€ + 200 tours",
    rtp: "96.9%",
    rating: "⭐⭐⭐⭐⭐",
    features: ["Populaire France", "Gros catalogue", "Bonus réguliers"],
  },
  {
    name: "Winoui",
    bonus: "1000€ de bonus",
    rtp: "96.4%",
    rating: "⭐⭐⭐⭐",
    features: ["Jackpots progressifs", "Tournois", "Application mobile"],
  },
];

export default function CasinoTable() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gold mb-6"><span aria-hidden="true">🏆</span> Top Casinos Recommandés en France</h2>

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {topCasinos.map((casino, i) => (
          <div key={i} className="card p-4">
            <p className="text-lg font-bold mb-1">{casino.name}</p>
            <p className="text-gold-light font-semibold mb-2">{casino.bonus}</p>
            <div className="flex items-center justify-between text-sm mb-3">
              <span>RTP: {casino.rtp}</span>
              <span>{casino.rating}</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {casino.features.map((f, j) => (
                <span key={j} className="text-xs bg-card-bg px-2 py-0.5 rounded">{f}</span>
              ))}
            </div>
            <a href="#" rel="nofollow noopener" target="_blank" className="btn-cta block w-full text-center !py-3">Jouer →</a>
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
            {topCasinos.map((casino, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-surface" : ""}>
                <td className="p-3 font-semibold border border-card-border">{casino.name}</td>
                <td className="p-3 text-gold-light border border-card-border">{casino.bonus}</td>
                <td className="p-3 text-center border border-card-border">{casino.rtp}</td>
                <td className="p-3 text-center border border-card-border">{casino.rating}</td>
                <td className="p-3 border border-card-border">
                  <div className="flex flex-wrap gap-1">
                    {casino.features.map((f, j) => (
                      <span key={j} className="text-xs bg-card-bg px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </td>
                <td className="p-3 text-center border border-card-border">
                  <a href="#" rel="nofollow noopener" target="_blank" className="btn-cta text-sm !py-2 !px-4">Jouer →</a>
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
