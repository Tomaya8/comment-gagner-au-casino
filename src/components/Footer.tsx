import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gold font-bold text-lg mb-4"><span aria-hidden="true">🎰</span> Comment Gagner au Casino</h3>
            <p className="text-muted text-sm leading-relaxed">
              Votre guide expert pour comprendre les jeux de casino, les stratégies et les probabilités.
              Jouez de manière responsable.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Jeux de Casino</h4>
            <ul className="space-y-1">
              <li><Link href="/jeux/roulette" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Roulette</Link></li>
              <li><Link href="/jeux/blackjack" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Blackjack</Link></li>
              <li><Link href="/jeux/machines-a-sous" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Machines à sous</Link></li>
              <li><Link href="/jeux/baccarat" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Baccarat</Link></li>
              <li><Link href="/jeux/video-poker" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Vidéo Poker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Fournisseurs</h4>
            <ul className="space-y-1">
              <li><Link href="/fournisseurs/netent" className="text-muted text-sm hover:text-gold py-1.5 inline-block">NetEnt</Link></li>
              <li><Link href="/fournisseurs/microgaming" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Microgaming</Link></li>
              <li><Link href="/fournisseurs/pragmatic-play" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Pragmatic Play</Link></li>
              <li><Link href="/fournisseurs/playngo" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Play&apos;n GO</Link></li>
              <li><Link href="/fournisseurs/evolution-gaming" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Evolution Gaming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Ressources</h4>
            <ul className="space-y-1">
              <li><Link href="/strategies" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Stratégies</Link></li>
              <li><Link href="/casinos-en-ligne" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Casinos en ligne</Link></li>
              <li><Link href="/blog" className="text-muted text-sm hover:text-gold py-1.5 inline-block">Blog</Link></li>
            </ul>
            <div className="mt-6 p-3 bg-surface rounded-lg border border-card-border">
              <p className="text-xs text-muted">
                <span aria-hidden="true">🔞</span> 18+ | Jouez responsablement<br />
                <a href="https://www.joueurs-info-service.fr/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">
                  Joueurs Info Service : 09 74 75 13 13
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-8 text-center">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} comment-gagner-au-casino.com — Tous droits réservés.
            Les jeux de casino comportent des risques financiers. Ce site est à but informatif uniquement.
          </p>
        </div>
      </div>
    </footer>
  );
}
