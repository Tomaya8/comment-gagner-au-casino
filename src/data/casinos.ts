export interface Casino {
  slug: string;
  name: string;
  bonus: string;
  bonusAmount: number;
  wagering: number;
  rtp: string;
  rating: number;
  features: string[];
  affiliateUrl: string;
  license: string;
  founded: number;
  minDeposit: string;
  withdrawalTime: string;
  providers: string[];
  paymentMethods: string[];
  pros: string[];
  cons: string[];
  summary: string;
  fullReview: string;
  metaTitle: string;
  metaDescription: string;
}

export const casinos: Casino[] = [
  {
    slug: "casinostars",
    name: "CasinoStars",
    bonus: "500€ + 200 tours gratuits",
    bonusAmount: 500,
    wagering: 40,
    rtp: "96.8%",
    rating: 4.7,
    features: ["+5000 jeux", "Support FR 24/7", "Crypto", "Programme VIP"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3-YnVqGHN08XWNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["NetEnt", "Pragmatic Play", "Evolution Gaming", "Play'n GO", "Hacksaw Gaming", "Nolimit City"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT"],
    pros: [
      "Ludothèque massive avec plus de 5 000 jeux",
      "Support client 24/7 en français",
      "Retraits crypto rapides (6-12h)",
      "Programme VIP progressif avec gestionnaire dédié",
    ],
    cons: [
      "Conditions de mise x40 sur le bonus",
      "Pas de licence ANJ ou MGA",
      "Plafond de retrait hebdomadaire de 5 000€ pour les non-VIP",
    ],
    summary:
      "CasinoStars combine une ludothèque massive, des paiements crypto rapides et un support francophone 24/7. Le wagering x40 reste le principal compromis.",
    fullReview: `CasinoStars est l'un des casinos en ligne les plus complets pour les joueurs francophones. Lancé en 2022 sous licence Curaçao, l'opérateur s'est rapidement imposé grâce à une ludothèque dépassant les 5 000 jeux et des paiements crypto traités en quelques heures. Les principaux studios du marché sont représentés : NetEnt, Pragmatic Play, Evolution Gaming, Play'n GO, Hacksaw Gaming et Nolimit City.

Le bonus de bienvenue offre 100% jusqu'à 500€ accompagné de 200 tours gratuits. Les conditions de mise sont fixées à x40, ce qui se situe dans la moyenne haute du secteur. Notre équipe a testé le casino pendant 21 jours : les retraits crypto ont été traités en 6 à 12 heures, les e-wallets en 18 heures en moyenne. Le support client sur le chat répond en 2 à 4 minutes en français.

Le principal inconvénient reste l'absence de licence européenne (ANJ ou MGA). Les joueurs qui privilégient les recours renforcés devront en tenir compte. Pour les autres, CasinoStars propose un programme VIP progressif à paliers avec gestionnaire personnel aux niveaux supérieurs, des tournois réguliers et un catalogue qui couvre aussi bien les slots modernes que le live casino animé par Evolution.`,
    metaTitle: "CasinoStars Avis 2026 : Bonus 500€, Ludothèque 5000+ Jeux",
    metaDescription:
      "Avis complet CasinoStars : bonus 500€ + 200 tours gratuits, wagering x40, 5000+ jeux, paiements crypto rapides et support français 24/7. Notre test.",
  },
  {
    slug: "casino-orca",
    name: "Casino Orca",
    bonus: "500€ + 100 tours gratuits",
    bonusAmount: 500,
    wagering: 35,
    rtp: "96.7%",
    rating: 4.6,
    features: ["Retraits 24h", "Wagering x35", "Crypto", "Tournois"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3_eD2ODgvck4mNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24h",
    providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Yggdrasil", "Relax Gaming", "Push Gaming"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "Litecoin", "USDT"],
    pros: [
      "Retraits en 24h tenus lors de notre test (4-8h crypto)",
      "Wagering x35 plus favorable que la moyenne",
      "Interface moderne et intuitive",
      "Large choix de paiements crypto",
    ],
    cons: [
      "Absence de licence ANJ ou MGA",
      "Vérification KYC obligatoire dès le premier retrait",
      "Catalogue live plus limité que les concurrents premium",
    ],
    summary:
      "Casino Orca se distingue par la rapidité tenue des paiements (24h), son wagering x35 compétitif et une interface épurée. Idéal pour les joueurs qui privilégient vitesse et simplicité.",
    fullReview: `Casino Orca s'est lancé en 2022 avec une promesse forte : la vitesse. Sous licence Curaçao, la plateforme met l'accent sur l'expérience utilisateur avec une interface épurée et des paiements rapides. Notre équipe a testé le casino pendant 18 jours : la promesse des retraits en 24 heures est tenue, avec des retraits crypto confirmés en 4 à 8 heures et des e-wallets en 12 à 20 heures.

Le bonus de bienvenue offre 100% jusqu'à 500€ accompagné de 100 tours gratuits. Les conditions de mise sont fixées à x35, ce qui est plus favorable que la moyenne (nombreux concurrents à x40). Le catalogue regroupe plusieurs milliers de titres signés Pragmatic Play, NetEnt, Evolution Gaming, Yggdrasil, Relax Gaming et Push Gaming, avec des filtres efficaces par éditeur, volatilité et RTP.

Le principal point d'attention reste la licence Curaçao uniquement. La vérification KYC est obligatoire dès le premier retrait et peut ajouter quelques heures au premier paiement, mais sécurise tous les suivants. Pour les joueurs francophones qui veulent tester un casino moderne avec des paiements rapides et un wagering raisonnable, Casino Orca est une excellente option.`,
    metaTitle: "Casino Orca Avis 2026 : Retraits 24h, Wagering x35",
    metaDescription:
      "Avis Casino Orca : retraits sous 24h confirmés, bonus 500€ + 100 tours, wagering x35 compétitif. Notre test complet de la plateforme maritime.",
  },
  {
    slug: "art-casino",
    name: "Art Casino",
    bonus: "1 500€ + 150 tours gratuits",
    bonusAmount: 1500,
    wagering: 40,
    rtp: "96.5%",
    rating: 4.5,
    features: ["Bonus XXL 1500€", "VIP 6 niveaux", "Design premium", "Crypto"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF38eR0indqtVW2Nd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2023,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["NetEnt", "Pragmatic Play", "Play'n GO", "Evolution Gaming", "BGaming", "Nolimit City"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "MiFinity"],
    pros: [
      "Bonus de bienvenue très généreux jusqu'à 1 500€",
      "Programme VIP structuré en 6 niveaux",
      "Design élégant inspiré des galeries d'art",
      "Plafonds de retrait élevés (7 500€ hebdomadaires)",
    ],
    cons: [
      "Conditions de mise x40 relativement élevées",
      "Pas de licence européenne",
      "Support parfois lent sur les questions techniques",
    ],
    summary:
      "Art Casino combine un bonus de bienvenue XXL (1 500€), une direction artistique soignée et un programme VIP structuré en 6 niveaux. Une option premium pour les joueurs qui visent des gains importants.",
    fullReview: `Art Casino est l'un des casinos les plus récents de notre panel (lancement 2023). Son positionnement est clair : proposer une expérience haut de gamme avec une direction artistique soignée inspirée des grandes galeries. L'opérateur est licencié à Curaçao et cible les joueurs francophones exigeants.

Le bonus de bienvenue atteint 100% jusqu'à 1 500€ + 150 tours gratuits, l'un des plus généreux du secteur. Les conditions de mise sont de x40, dans la moyenne haute. Le bonus peut être divisé sur plusieurs dépôts pour mieux gérer sa bankroll. Le programme VIP est particulièrement abouti avec 6 niveaux offrant cashback, manager personnel, retraits prioritaires et cadeaux anniversaire.

Les retraits ont été traités dans les délais annoncés (24-48h) lors de notre test de 16 jours : 10 heures pour les cryptos, 24 heures pour les e-wallets. Les plafonds hebdomadaires de 7 500€ pour les joueurs standards sont plus élevés que la moyenne, ce qui cadre avec le positionnement premium. Art Casino convient particulièrement aux joueurs qui recherchent un gros bonus de bienvenue et un programme VIP structuré.`,
    metaTitle: "Art Casino Avis 2026 : Bonus 1 500€, VIP 6 Niveaux",
    metaDescription:
      "Avis Art Casino : bonus de bienvenue jusqu'à 1 500€ + 150 tours, programme VIP 6 niveaux et design premium. Notre test complet.",
  },
  {
    slug: "betroom24",
    name: "Betroom24",
    bonus: "500€ + 100 tours gratuits",
    bonusAmount: 500,
    wagering: 35,
    rtp: "96.6%",
    rating: 4.4,
    features: ["Cashback quotidien", "Salle 24/7", "Crypto", "Support FR"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF39ZSuvhn4yj1mNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Play'n GO", "Hacksaw Gaming", "Red Tiger"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "Trustly"],
    pros: [
      "Cashback quotidien 5-10% selon le niveau de fidélité",
      "Support client 24/7 en français",
      "Nombreuses promotions récurrentes",
      "Interface mobile très optimisée",
    ],
    cons: [
      "Pas de programme VIP structuré à paliers",
      "Catalogue live moins étoffé",
      "Retraits légèrement plus lents (30h en moyenne)",
    ],
    summary:
      "Betroom24 mise sur la régularité avec un cashback quotidien et des promotions récurrentes. Un casino pensé pour les joueurs réguliers plutôt que pour les chasseurs de gros bonus uniques.",
    fullReview: `Betroom24 se positionne comme la « salle de jeux 24/7 », avec un concept simple : une offre disponible en permanence, rythmée par des promotions quotidiennes. Lancé en 2022 sous licence Curaçao, l'opérateur mise sur la fidélisation plutôt que sur l'effet d'annonce.

Le bonus de bienvenue est de 100% jusqu'à 500€ + 100 tours gratuits avec un wagering x35 — correct mais pas exceptionnel. La vraie force de Betroom24 réside dans les promotions récurrentes : cashback quotidien (5 à 10% selon le niveau de fidélité), tours gratuits hebdomadaires, tournois et recharges du week-end. Ce modèle favorise les joueurs réguliers.

Le catalogue couvre plusieurs milliers de titres issus de Pragmatic Play, NetEnt, Evolution Gaming, Play'n GO, Hacksaw Gaming et Red Tiger. Point positif : plusieurs titres exclusifs Red Tiger qui ne figurent pas sur tous les casinos Curaçao. Les retraits ont pris 30 heures en moyenne dans notre test — plus long que Casino Orca mais dans les délais annoncés.`,
    metaTitle: "Betroom24 Avis 2026 : Cashback Quotidien, Salle 24/7",
    metaDescription:
      "Avis Betroom24 : cashback distribué chaque jour, bonus 500€, promotions récurrentes. Idéal pour les joueurs réguliers. Notre test complet.",
  },
  {
    slug: "thor-casino",
    name: "Thor Casino",
    bonus: "1 000€ + 100 tours gratuits",
    bonusAmount: 1000,
    wagering: 40,
    rtp: "96.7%",
    rating: 4.6,
    features: ["Thème nordique", "Slots haute volatilité", "Programme Runes", "Crypto"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3_6PBA04iUMN2Nd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2022,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Nolimit City", "Push Gaming", "ELK Studios"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "Litecoin", "USDT"],
    pros: [
      "Thème nordique immersif et cohérent",
      "Sélection pointue de slots haute volatilité",
      "Programme de fidélité « Runes de la Fortune »",
      "Retraits crypto rapides (8 heures en moyenne)",
    ],
    cons: [
      "Conditions de mise x40 sur le bonus",
      "Dépôt minimum de 20€",
      "Licence Curaçao uniquement",
    ],
    summary:
      "Thor Casino plonge les joueurs dans l'univers de la mythologie nordique avec une curation pointue de slots haute volatilité (Nolimit City, Push Gaming, ELK Studios).",
    fullReview: `Thor Casino s'appuie sur un thème mythologique nordique parfaitement cohérent : interface runique, visuels d'Asgard, bonus appelé « Bonus d'Asgard ». Lancé en 2022 sous licence Curaçao, l'opérateur cible les joueurs francophones qui recherchent une expérience plus typée que les casinos généralistes.

Le bonus de bienvenue est de 100% jusqu'à 1 000€ accompagné de 100 tours gratuits, avec un wagering x40. La vraie force du casino réside dans sa curation de machines à sous haute volatilité signées Nolimit City (San Quentin, Mental, Tombstone), Push Gaming (Razor Shark) et ELK Studios (Valkyrie). Ce positionnement plaira aux joueurs qui recherchent de gros multiplicateurs plutôt que des gains réguliers.

Les retraits crypto ont été traités en 8 heures en moyenne dans notre test de 20 jours. Le programme de fidélité « Runes de la Fortune » est structuré en paliers avec cashback, freespins, limites de retrait étendues et manager VIP personnel aux niveaux supérieurs. Les joueurs qui apprécient les thèmes immersifs et les slots à forte volatilité trouveront chez Thor Casino un catalogue très bien curaté.`,
    metaTitle: "Thor Casino Avis 2026 : Bonus 1 000€, Slots Haute Volatilité",
    metaDescription:
      "Avis Thor Casino : Bonus d'Asgard 1 000€ + 100 tours, thème nordique, slots Nolimit City et Push Gaming. Programme Runes de la Fortune détaillé.",
  },
  {
    slug: "mond-casino",
    name: "Mond Casino",
    bonus: "500€ + 200 tours gratuits",
    bonusAmount: 500,
    wagering: 35,
    rtp: "96.9%",
    rating: 4.5,
    features: ["Wagering x35", "200 FS sur 5 jours", "Live FR", "Crypto"],
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3-YkdHVp7xCcmNd7ZgqdRLk/1/",
    license: "Curaçao",
    founded: 2023,
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    providers: ["NetEnt", "Pragmatic Play", "Evolution Gaming", "Play'n GO", "Yggdrasil", "BGaming"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "MiFinity"],
    pros: [
      "Wagering x35 parmi les plus favorables du secteur",
      "200 tours gratuits distribués sur 5 jours",
      "Live casino animé par Evolution avec tables FR",
      "Plateforme 100% traduite en français",
    ],
    cons: [
      "Pas de licence européenne",
      "Programme VIP accessible uniquement sur invitation",
      "Pas d'application mobile native",
    ],
    summary:
      "Mond (« lune » en allemand) Casino combine esthétique élégante, wagering x35 compétitif et 200 tours gratuits étalés sur 5 jours. Une formule séduisante pour valoriser un bonus modéré.",
    fullReview: `Mond Casino propose une expérience de jeu nocturne élégante et raffinée, avec une palette indigo et argentée inspirée de la lune. Licence Curaçao, lancement 2023. La plateforme met à disposition plusieurs milliers de jeux issus de NetEnt, Pragmatic Play, Evolution Gaming, Play'n GO, Yggdrasil et BGaming.

Le « Bonus Lune » est de 100% jusqu'à 500€ + 200 tours gratuits. Les conditions de mise sont de x35, parmi les plus favorables de notre panel face aux x40 de la plupart des concurrents — c'est 12,5% de mises en moins pour débloquer les gains. Les 200 tours gratuits sont distribués sur 5 jours à raison de 40 tours par jour, ce qui évite de consommer l'offre en une session.

Notre test de 14 jours a confirmé les délais annoncés : retraits crypto en 12 heures en moyenne, e-wallets en 28 heures. Le live casino Evolution propose des tables francophones dédiées pour la roulette, le blackjack et le baccarat. Le principal bémol reste l'opacité du programme VIP, accessible uniquement sur invitation. Une option à considérer pour les joueurs qui veulent maximiser la valeur d'un bonus modéré plutôt que chasser un mega-bonus à conditions difficiles.`,
    metaTitle: "Mond Casino Avis 2026 : Bonus Lune 500€, Wagering x35",
    metaDescription:
      "Avis Mond Casino : Bonus Lune 500€ + 200 tours gratuits sur 5 jours, wagering x35 compétitif, live Evolution et thème lunaire élégant. Notre test.",
  },
];

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}
