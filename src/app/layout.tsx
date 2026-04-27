import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";
import "./globals.css";
import GoogleAnalytics from './GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL("https://comment-gagner-au-casino.com"),
  title: {
    default: "Comment Gagner au Casino : Stratégies et Astuces",
    template: "%s | Comment Gagner au Casino",
  },
  description:
    "Les meilleures stratégies pour gagner au casino. Guides sur la roulette, le blackjack, les machines à sous. Conseils d'experts.",
  keywords: [
    "comment gagner au casino",
    "stratégie casino",
    "astuces casino",
    "gagner roulette",
    "gagner blackjack",
    "machine à sous astuces",
    "RTP casino",
    "casino en ligne France",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Comment Gagner au Casino",
    title: "Comment Gagner au Casino : Stratégies et Guides Complets",
    description: "Découvrez les meilleures stratégies pour gagner au casino. Guides complets sur tous les jeux.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment Gagner au Casino : Stratégies et Guides Complets",
    description: "Découvrez les meilleures stratégies pour gagner au casino. Guides complets sur tous les jeux.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://comment-gagner-au-casino.com",
    languages: {
      "fr": "https://comment-gagner-au-casino.com",
      "x-default": "https://comment-gagner-au-casino.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-gold focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-bold">
          Aller au contenu principal
        </a>
        <OrganizationSchema />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
