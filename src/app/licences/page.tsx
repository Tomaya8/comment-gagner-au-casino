import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero from "@/components/BlogHero";
import ArticleSchema from "@/components/ArticleSchema";
import FAQ from "@/components/FAQ";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Licences de Casino en Ligne : Guide Complet des Regulateurs",
  description:
    "Comparez les licences MGA, Curacao, UKGC, ANJ et Gibraltar. Fiabilite, protection joueur et criteres pour choisir un casino en ligne sur.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/licences",
  },
};

const licences = [
  {
    slug: "mga",
    name: "Malta Gaming Authority (MGA)",
    country: "Malte (UE)",
    reliability: "9.5/10",
    playerProtection: "Excellente",
    operatorCost: "40 000 EUR+",
    description:
      "L'une des licences les plus prestigieuses au monde, reconnue dans toute l'Union europeenne pour ses standards eleves de protection des joueurs.",
  },
  {
    slug: "curacao",
    name: "Curacao eGaming",
    country: "Curacao",
    reliability: "6/10",
    playerProtection: "Basique",
    operatorCost: "5 000 EUR+",
    description:
      "La plus ancienne licence de jeu en ligne (1996), populaire aupres des casinos crypto grace a son accessibilite et sa flexibilite.",
  },
  {
    slug: "ukgc",
    name: "UK Gambling Commission",
    country: "Royaume-Uni",
    reliability: "10/10",
    playerProtection: "Maximale",
    operatorCost: "50 000 GBP+",
    description:
      "Le regulateur le plus strict au monde, imposant des controles d'accessibilite financiere et l'auto-exclusion obligatoire via GamStop.",
  },
  {
    slug: "anj",
    name: "Autorite Nationale des Jeux (ANJ)",
    country: "France",
    reliability: "9/10",
    playerProtection: "Tres forte",
    operatorCost: "Variable",
    description:
      "Le regulateur francais qui encadre les paris sportifs, hippiques et le poker. Les jeux de casino en ligne (slots, roulette) restent interdits en France.",
  },
  {
    slug: "gibraltar",
    name: "Gibraltar Gambling Commissioner",
    country: "Gibraltar",
    reliability: "8.5/10",
    playerProtection: "Forte",
    operatorCost: "30 000 GBP+",
    description:
      "Territoire britannique d'outre-mer reputant pour heberger de grands operateurs comme bet365, avec des avantages fiscaux attractifs.",
  },
];

const faqItems = [
  {
    question: "Pourquoi la licence d'un casino en ligne est-elle importante ?",
    answer:
      "La licence garantit que le casino respecte des normes de securite, d'equite et de protection des joueurs. Un casino sans licence ne fournit aucune garantie sur la fiabilite de ses jeux ou la securite de vos fonds.",
  },
  {
    question: "Quelle est la meilleure licence de casino en ligne ?",
    answer:
      "La UK Gambling Commission (UKGC) est consideree comme la plus stricte, suivie de pres par la Malta Gaming Authority (MGA). Le choix depend de votre pays de residence et de vos priorites en matiere de protection.",
  },
  {
    question: "Les casinos en ligne sont-ils legaux en France ?",
    answer:
      "En France, seuls les paris sportifs, les paris hippiques et le poker en ligne sont autorises et regules par l'ANJ. Les jeux de casino en ligne (machines a sous, roulette, blackjack) restent interdits sur le territoire francais.",
  },
  {
    question: "Comment verifier la licence d'un casino en ligne ?",
    answer:
      "Chaque regulateur dispose d'un registre public consultable en ligne. Vous pouvez verifier le numero de licence du casino sur le site officiel de l'autorite de regulation concernee (MGA, UKGC, etc.).",
  },
  {
    question: "Un casino avec licence Curacao est-il fiable ?",
    answer:
      "La licence Curacao offre une protection basique mais inferieure a celle de la MGA ou de la UKGC. Depuis 2024, les nouvelles reglementations du Gaming Control Board de Curacao renforcent les exigences, mais la prudence reste de mise.",
  },
  {
    question: "Que faire en cas de litige avec un casino en ligne ?",
    answer:
      "Contactez d'abord le service client du casino. Si le probleme persiste, deposez une plainte aupres de l'autorite de regulation qui a delivre la licence. Les regulateurs comme la MGA et la UKGC disposent de procedures de resolution des litiges.",
  },
];

export default function LicencesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Licences" },
        ]}
      />

      <ArticleSchema
        title="Licences de Casino en Ligne : Guide Complet"
        description="Comparez les licences MGA, Curacao, UKGC, ANJ et Gibraltar pour choisir un casino en ligne fiable et securise."
        url="/licences"
        datePublished="2026-03-29"
      />

      <BlogHero
        title="Licences de Casino en Ligne : Guide Complet"
        description="Comprendre les licences de jeu est essentiel pour jouer en toute securite. Decouvrez les principaux regulateurs, leurs exigences et comment verifier la fiabilite d'un casino en ligne."
        icon="🛡️"
        gradient="from-slate-900 via-blue-900 to-indigo-900"
      />

      <article className="prose">
        <h2>Pourquoi les licences de casino sont-elles essentielles ?</h2>

        <p>
          Dans l&apos;univers des <Link href="/casinos-en-ligne">casinos en ligne</Link>,
          la licence de jeu represente le premier critere de fiabilite a verifier
          avant de s&apos;inscrire. Une licence delivree par une autorite de regulation
          reconnue garantit que le casino respecte des normes strictes en matiere
          de <strong>protection des joueurs</strong>, d&apos;<strong>equite des jeux</strong> et
          de <strong>securite des transactions financieres</strong>.
        </p>

        <p>
          Un casino licence est soumis a des audits reguliers, doit segreger les
          fonds des joueurs de ses fonds operationnels et offrir des outils de
          jeu responsable. Sans licence, aucune de ces garanties n&apos;existe. C&apos;est
          pourquoi nous insistons dans notre{" "}
          <Link href="/blog/casinos-en-ligne/licences-casino">guide detaille sur les licences</Link>{" "}
          sur l&apos;importance de toujours verifier ce point avant de jouer.
        </p>

        <h2>Les criteres d&apos;evaluation d&apos;une licence</h2>

        <p>
          Toutes les licences ne se valent pas. Voici les criteres cles qui
          distinguent une licence fiable d&apos;une licence laxiste :
        </p>

        <ul>
          <li>
            <strong>Protection des fonds :</strong> Obligation de separer les
            fonds des joueurs des fonds operationnels du casino.
          </li>
          <li>
            <strong>Audits des jeux :</strong> Verification reguliere des
            generateurs de nombres aleatoires (RNG) par des laboratoires
            independants.
          </li>
          <li>
            <strong>Jeu responsable :</strong> Mise en place obligatoire d&apos;outils
            d&apos;auto-exclusion, de limites de depot et de rappels de session.
          </li>
          <li>
            <strong>Resolution des litiges :</strong> Procedures claires et
            accessibles pour les joueurs en cas de conflit avec l&apos;operateur.
          </li>
          <li>
            <strong>Conformite KYC/AML :</strong> Verification d&apos;identite et
            lutte contre le blanchiment d&apos;argent.
          </li>
        </ul>

        <p>
          Pour approfondir ces aspects dans le contexte de vos{" "}
          <Link href="/strategies/casinos-en-ligne">strategies de jeu en ligne</Link>,
          consultez nos guides dedies.
        </p>

        <h2>Les 5 principales licences de casino en ligne</h2>

        <p>
          Nous avons analyse en detail les cinq autorites de regulation les plus
          importantes du marche. Cliquez sur chaque licence pour decouvrir son
          histoire, ses exigences et son niveau de protection.
        </p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {licences.map((licence) => (
          <div key={licence.slug} className="card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🛡️</span>
              <h3 className="text-xl font-bold">{licence.name}</h3>
            </div>
            <p className="text-sm text-muted mb-3">{licence.description}</p>
            <div className="flex gap-4 text-xs text-muted mb-4">
              <span>{licence.country}</span>
              <span>•</span>
              <span>Fiabilite : {licence.reliability}</span>
            </div>
            <Link
              href={`/licences/${licence.slug}`}
              className="btn-cta inline-block"
            >
              Decouvrir la licence
            </Link>
          </div>
        ))}
      </div>

      <article className="prose">
        <h2>Tableau comparatif des licences de casino</h2>
      </article>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 font-bold text-gold">Licence</th>
              <th className="text-left py-3 px-4 font-bold text-gold">Pays</th>
              <th className="text-left py-3 px-4 font-bold text-gold">Fiabilite</th>
              <th className="text-left py-3 px-4 font-bold text-gold">Protection Joueur</th>
              <th className="text-left py-3 px-4 font-bold text-gold">Cout Operateur</th>
            </tr>
          </thead>
          <tbody>
            {licences.map((licence) => (
              <tr key={licence.slug} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <Link href={`/licences/${licence.slug}`} className="text-gold hover:underline">
                    {licence.name}
                  </Link>
                </td>
                <td className="py-3 px-4">{licence.country}</td>
                <td className="py-3 px-4">{licence.reliability}</td>
                <td className="py-3 px-4">{licence.playerProtection}</td>
                <td className="py-3 px-4">{licence.operatorCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <article className="prose">
        <h2>Comment choisir un casino licence fiable ?</h2>

        <p>
          Le choix d&apos;un casino en ligne fiable passe par plusieurs etapes de
          verification. Avant de vous inscrire, prenez le temps de :
        </p>

        <ul>
          <li>
            <strong>Verifier le numero de licence</strong> sur le site officiel
            du regulateur (le logo en bas de page ne suffit pas).
          </li>
          <li>
            <strong>Consulter les avis</strong> sur des sources independantes et
            verifier l&apos;historique de l&apos;operateur.
          </li>
          <li>
            <strong>Tester les outils de jeu responsable</strong> (limites de
            depot, auto-exclusion) avant de commencer a jouer.
          </li>
          <li>
            <strong>Lire les conditions generales</strong> concernant les
            retraits, les bonus et les delais de paiement.
          </li>
        </ul>

        <p>
          Pour une analyse complete des meilleurs casinos licences, consultez
          notre page dediee aux{" "}
          <Link href="/casinos-en-ligne">casinos en ligne recommandes</Link>.
          Vous y trouverez notre selection basee sur la qualite de la licence,
          les bonus proposes et l&apos;experience globale du joueur.
        </p>
      </article>

      <FAQ items={faqItems} id="faq-licences" />

      <ArticleCTA />
    </div>
  );
}
