# Comment Gagner au Casino

SEO-optimized French authority site on casino strategies, games, and providers.

**Live:** [comment-gagner-au-casino.com](https://comment-gagner-au-casino.com) | [Vercel Preview](https://comment-gagner-au-casino.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Hosting:** Vercel
- **Content:** 86 pages, all server-rendered (SSG)

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage (pillar page, 3600+ words)
│   ├── layout.tsx                  # Root layout (fr lang, OG, Twitter, Organization schema)
│   ├── sitemap.ts                  # Dynamic XML sitemap (86+ URLs)
│   ├── robots.ts                   # Robots.txt
│   ├── not-found.tsx               # Custom 404
│   │
│   ├── jeux/                       # Casino games (6 pages)
│   │   ├── page.tsx                # Games listing
│   │   ├── roulette/
│   │   ├── blackjack/
│   │   ├── machines-a-sous/        # Slots guide + 10 individual slot reviews
│   │   │   ├── starburst/
│   │   │   ├── book-of-dead/
│   │   │   ├── gates-of-olympus/
│   │   │   ├── sweet-bonanza/
│   │   │   ├── mega-moolah/
│   │   │   ├── crazy-time/
│   │   │   ├── lightning-roulette/
│   │   │   ├── gonzos-quest/
│   │   │   ├── reactoonz/
│   │   │   └── dead-or-alive-2/
│   │   ├── baccarat/
│   │   └── video-poker/
│   │
│   ├── strategies/                 # Strategy guides (11 pages)
│   │   ├── page.tsx                # Strategies listing
│   │   ├── roulette/
│   │   ├── blackjack/
│   │   ├── mathematiques/
│   │   ├── guide-debutant/
│   │   ├── bonus-promotions/
│   │   ├── psychologie/
│   │   ├── machines-a-sous/
│   │   ├── mythes/
│   │   ├── comparatifs/
│   │   └── casinos-en-ligne/
│   │
│   ├── fournisseurs/               # Software providers (10 pages)
│   │   ├── page.tsx                # Providers listing
│   │   ├── netent/
│   │   ├── microgaming/
│   │   ├── pragmatic-play/
│   │   ├── playngo/
│   │   ├── evolution-gaming/
│   │   ├── big-time-gaming/
│   │   ├── red-tiger/
│   │   ├── yggdrasil/
│   │   └── nolimit-city/
│   │
│   ├── licences/                   # License authorities (6 pages)
│   │   ├── page.tsx                # Licenses listing
│   │   ├── mga/
│   │   ├── curacao/
│   │   ├── ukgc/
│   │   ├── anj/
│   │   └── gibraltar/
│   │
│   ├── casinos-en-ligne/           # Online casinos guide
│   │
│   └── blog/                       # 30 articles + 10 category indexes
│       ├── page.tsx                # Blog listing
│       ├── strategie-roulette/     # 3 articles
│       ├── strategie-blackjack/    # 3 articles
│       ├── machines-a-sous/        # 3 articles
│       ├── psychologie-joueur/     # 3 articles
│       ├── mathematiques-casino/   # 3 articles
│       ├── guide-debutant/         # 3 articles
│       ├── mythes-casino/          # 3 articles
│       ├── casinos-en-ligne/       # 3 articles
│       ├── bonus-promotions/       # 3 articles
│       └── comparatifs/            # 3 articles
│
└── components/
    ├── Header.tsx                  # Responsive nav with dropdowns + mobile menu
    ├── Footer.tsx                  # 5-column footer with links
    ├── Breadcrumb.tsx              # Breadcrumb + BreadcrumbList schema
    ├── FAQ.tsx                     # FAQ accordion + FAQPage schema
    ├── CasinoTable.tsx             # Casino comparison (cards on mobile, table on desktop)
    ├── BlogHero.tsx                # Themed gradient hero + BlogCard + ThemeHeader
    ├── ArticleCTA.tsx              # Bottom CTA linking to homepage + casinos
    ├── ArticleSchema.tsx           # Article JSON-LD structured data
    └── OrganizationSchema.tsx      # Organization JSON-LD
```

## Page Count

| Section | Pages |
|---------|-------|
| Homepage | 1 |
| Games (`/jeux`) | 16 (5 games + 10 slots + listing) |
| Strategies (`/strategies`) | 11 |
| Providers (`/fournisseurs`) | 10 |
| Licenses (`/licences`) | 6 |
| Casinos en ligne | 1 |
| Blog | 41 (30 articles + 10 category indexes + listing) |
| **Total** | **86** |

## SEO Features

- **Structured Data:** FAQPage, BreadcrumbList, Article, WebSite, Organization (JSON-LD)
- **Meta:** Unique title (<60 chars) + description (<160 chars) per page
- **Sitemap:** Auto-generated XML with per-group lastModified dates
- **hreflang:** `fr` + `x-default`
- **OpenGraph + Twitter Cards** on all pages
- **Canonical URLs** on every page
- **Internal linking:** Silo structure with cross-links between games, strategies, providers, blog
- **Semantic SEO vocabulary:** RTP, variance, bankroll, RNG, house edge, avantage maison

## Accessibility

- Skip-to-content link
- Keyboard-navigable dropdowns (focus/blur)
- `aria-expanded` on mobile menu
- `aria-hidden` on decorative emojis
- `focus-visible` styles on all interactive elements
- WCAG AA contrast compliance

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Hosted on Vercel with auto-deploy from `main` branch.

```bash
# Manual deploy
vercel --prod
```

**Domain:** `comment-gagner-au-casino.com`
- A record: `216.198.79.1`
- CNAME `www`: `8730fec1e4d1057a.vercel-dns-017.com.`

## Content Guidelines

- All content in **native-level French**
- Professional, educational, honest tone
- No unrealistic promises about winning
- Emphasize that casino games have negative expected value
- Include responsible gambling notices (18+, Joueurs Info Service)

## Adding New Pages

1. Create directory under the appropriate section in `src/app/`
2. Export `metadata` with title, description, canonical URL
3. Use `Breadcrumb`, `FAQ`, `ArticleSchema`, `ArticleCTA` components
4. Add the page to `src/app/sitemap.ts`
5. Update navigation in `Header.tsx` / `Footer.tsx` if needed

## License

All rights reserved.
