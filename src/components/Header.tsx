"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  {
    label: "Jeux de Casino",
    href: "/jeux",
    children: [
      { label: "Roulette", href: "/jeux/roulette" },
      { label: "Blackjack", href: "/jeux/blackjack" },
      { label: "Machines à sous", href: "/jeux/machines-a-sous" },
      { label: "Baccarat", href: "/jeux/baccarat" },
      { label: "Vidéo Poker", href: "/jeux/video-poker" },
    ],
  },
  { label: "Stratégies", href: "/strategies" },
  {
    label: "Fournisseurs",
    href: "/fournisseurs",
    children: [
      { label: "NetEnt", href: "/fournisseurs/netent" },
      { label: "Microgaming", href: "/fournisseurs/microgaming" },
      { label: "Pragmatic Play", href: "/fournisseurs/pragmatic-play" },
      { label: "Play'n GO", href: "/fournisseurs/playngo" },
      { label: "Evolution Gaming", href: "/fournisseurs/evolution-gaming" },
      { label: "Big Time Gaming", href: "/fournisseurs/big-time-gaming" },
      { label: "Tous les fournisseurs →", href: "/fournisseurs" },
    ],
  },
  {
    label: "Licences",
    href: "/licences",
    children: [
      { label: "MGA (Malte)", href: "/licences/mga" },
      { label: "Curaçao", href: "/licences/curacao" },
      { label: "UKGC", href: "/licences/ukgc" },
      { label: "ANJ (France)", href: "/licences/anj" },
      { label: "Gibraltar", href: "/licences/gibraltar" },
    ],
  },
  { label: "Casinos en ligne", href: "/casinos-en-ligne" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a1a]/95 backdrop-blur-sm border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-gold font-bold text-lg sm:text-xl">
            <span className="text-2xl" aria-hidden="true">🎰</span>
            <span className="hidden sm:inline">Comment Gagner au Casino</span>
            <span className="sm:hidden">Casino Guide</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => item.children && setOpenDropdown(item.href)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-gold rounded-md transition-colors"
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-xs">▾</span>}
                </Link>
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-0 w-52 bg-card-bg border border-card-border rounded-lg shadow-xl py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-gold hover:bg-surface transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-xl text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <nav className="bg-surface border-t border-card-border">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-foreground hover:text-gold border-b border-card-border/50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-10 py-3 text-sm text-muted hover:text-gold border-b border-card-border/30"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
