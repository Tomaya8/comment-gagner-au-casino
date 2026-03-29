import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero from "@/components/BlogHero";
import ArticleSchema from "@/components/ArticleSchema";
import FAQ from "@/components/FAQ";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "ANJ (Autorite Nationale des Jeux) : Le Regulateur Francais",
  description:
    "Guide ANJ : regulation francaise des jeux en ligne, paris sportifs, poker. Ce qui est legal et interdit en France.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/licences/anj",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que l'ANJ ?",
    answer:
      "L'Autorite Nationale des Jeux (ANJ) est le regulateur francais des jeux d'argent en ligne, creee en 2020 pour remplacer l'ARJEL. Elle supervise les paris sportifs, les paris hippiques et le poker en ligne, ainsi que les jeux de la Francaise des Jeux (FDJ) et du PMU.",
  },
  {
    question: "Les casinos en ligne sont-ils legaux en France ?",
    answer:
      "Non, les jeux de casino en ligne (machines a sous, roulette, blackjack, baccarat) sont strictement interdits en France. Seuls les paris sportifs, les paris hippiques et le poker en ligne sont autorises et regules par l'ANJ. Tout site proposant des jeux de casino en ligne aux joueurs francais est illegal.",
  },
  {
    question: "Quelle est la difference entre l'ANJ et l'ARJEL ?",
    answer:
      "L'ARJEL (Autorite de Regulation des Jeux En Ligne) a ete creee en 2010 et remplacee par l'ANJ en 2020. L'ANJ dispose de pouvoirs elargis couvrant non seulement les jeux en ligne mais aussi les jeux terrestres (casinos physiques, loteries), avec une attention renforcee sur le jeu responsable.",
  },
  {
    question: "Quels operateurs sont agrees par l'ANJ ?",
    answer:
      "Les principaux operateurs agrees par l'ANJ incluent Betclic, Winamax, Unibet (Kindred), ParionsSport (FDJ), ZEbet, PMU et PokerStars. Chacun doit renouveler son agrement regulierement et respecter des conditions strictes de jeu responsable.",
  },
  {
    question: "Comment fonctionne l'auto-exclusion en France ?",
    answer:
      "En France, tout joueur peut demander son inscription sur le fichier des interdits de jeux, gere par le Ministere de l'Interieur. Cette inscription interdit l'acces a tous les sites de jeu agrees ANJ et aux casinos physiques pour une duree minimale de 3 ans.",
  },
  {
    question: "Que risque-t-on a jouer sur un casino en ligne non agree en France ?",
    answer:
      "Un joueur francais sur un site non agree ne beneficie d'aucune protection legale en cas de litige. L'ANJ travaille avec les fournisseurs d'acces internet pour bloquer les sites illegaux. Si les sanctions visent principalement les operateurs, les joueurs s'exposent a des risques financiers sans recours.",
  },
  {
    question: "L'ANJ pourrait-elle un jour legaliser les casinos en ligne en France ?",
    answer:
      "La question revient regulierement dans le debat politique francais, mais aucune ouverture concrete n'est prevue a court terme. Le lobby des casinos physiques et les preoccupations de sante publique freinent toute evolution. Neanmoins, certains experts estiment qu'une regulation pourrait intervenir d'ici 2030.",
  },
];

export default function AnjPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Licences", href: "/licences" },
          { label: "Autorite Nationale des Jeux (ANJ)" },
        ]}
      />

      <ArticleSchema
        title="ANJ (Autorite Nationale des Jeux) : Le Regulateur Francais"
        description="Guide ANJ : regulation francaise des jeux en ligne, paris sportifs, poker. Ce qui est legal et interdit en France."
        url="/licences/anj"
        datePublished="2026-03-29"
      />

      <BlogHero
        title="ANJ : L'Autorite Nationale des Jeux en France"
        description="Le regulateur francais des jeux d'argent supervise les paris sportifs, le poker et les courses hippiques. Mais attention : les jeux de casino en ligne restent interdits en France."
        icon="🛡️"
        gradient="from-slate-900 via-blue-900 to-indigo-900"
      />

      <article className="prose">
        <h2>Presentation de l&apos;ANJ</h2>

        <p>
          L&apos;<strong>Autorite Nationale des Jeux (ANJ)</strong> est l&apos;organisme
          francais de regulation des jeux d&apos;argent et de hasard. Creee le 1er
          janvier 2020 par l&apos;ordonnance du 2 octobre 2019, elle a remplace
          l&apos;ARJEL (Autorite de Regulation des Jeux En Ligne) qui operait depuis
          2010. L&apos;ANJ dispose de pouvoirs considerablement elargis par rapport a
          sa predecesseure, couvrant non seulement les jeux en ligne mais
          egalement la supervision de l&apos;ensemble du secteur des jeux d&apos;argent
          en France.
        </p>

        <p>
          Un point essentiel a comprendre : contrairement a la{" "}
          <Link href="/licences/mga">MGA</Link> ou la{" "}
          <Link href="/licences/ukgc">UKGC</Link>, l&apos;ANJ ne regule pas les
          jeux de casino en ligne. Les machines a sous, la roulette, le blackjack
          et les autres jeux de table virtuels restent <strong>strictement
          interdits</strong> en ligne en France. L&apos;ANJ ne delivre d&apos;agrements que
          pour les paris sportifs, les paris hippiques et le poker en ligne.
          Pour un comparatif complet, consultez notre{" "}
          <Link href="/licences">guide des licences</Link>.
        </p>

        <h2>Histoire : de l&apos;ARJEL a l&apos;ANJ</h2>

        <p>
          L&apos;histoire de la regulation du jeu en ligne en France commence en 2010
          avec la loi du 12 mai 2010 relative a l&apos;ouverture a la concurrence et
          a la regulation du secteur des jeux d&apos;argent et de hasard en ligne.
          Cette loi historique a cree l&apos;ARJEL et ouvert le marche francais aux
          operateurs prives pour trois categories de jeux : les paris sportifs,
          les paris hippiques et le poker.
        </p>

        <p>
          Pendant dix ans, l&apos;ARJEL a encadre ce marche avec un mandat limite
          aux jeux en ligne. En 2019, le legislateur a decide d&apos;elargir ce
          mandat en creant l&apos;ANJ, dotee d&apos;une autorite etendue a l&apos;ensemble du
          secteur des jeux d&apos;argent :
        </p>

        <ul>
          <li>Supervision des jeux en ligne (paris sportifs, hippiques, poker)</li>
          <li>Controle des casinos terrestres (en coordination avec le Ministere de l&apos;Interieur)</li>
          <li>Encadrement de la Francaise des Jeux (FDJ) et du PMU</li>
          <li>Lutte contre les sites de jeux illegaux</li>
          <li>Prevention de l&apos;addiction au jeu</li>
        </ul>

        <h2>Perimetre de regulation de l&apos;ANJ</h2>

        <p>
          Il est crucial de bien comprendre ce que l&apos;ANJ regule et ce qu&apos;elle
          ne regule pas :
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 font-bold text-gold">Activite</th>
                <th className="text-left py-2 px-3 font-bold text-gold">Statut en France</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Paris sportifs en ligne</td>
                <td className="py-2 px-3 text-green-400">Legal et regule par l&apos;ANJ</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Paris hippiques en ligne</td>
                <td className="py-2 px-3 text-green-400">Legal et regule par l&apos;ANJ</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Poker en ligne</td>
                <td className="py-2 px-3 text-green-400">Legal et regule par l&apos;ANJ</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Machines a sous en ligne</td>
                <td className="py-2 px-3 text-red-400">Illegal en France</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Roulette en ligne</td>
                <td className="py-2 px-3 text-red-400">Illegal en France</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Blackjack en ligne</td>
                <td className="py-2 px-3 text-red-400">Illegal en France</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Casino live en ligne</td>
                <td className="py-2 px-3 text-red-400">Illegal en France</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Exigences pour les operateurs agrees</h2>

        <p>
          Les operateurs souhaitant operer legalement en France doivent obtenir
          un agrement de l&apos;ANJ et respecter des conditions strictes :
        </p>

        <ul>
          <li>
            <strong>Domiciliation du serveur :</strong> Les serveurs de jeu
            doivent etre situes en France pour permettre les controles de l&apos;ANJ.
          </li>
          <li>
            <strong>Enregistrement des transactions :</strong> Toutes les
            transactions de jeu doivent etre enregistrees et conservees pour
            permettre les audits.
          </li>
          <li>
            <strong>Plafonds de jeu :</strong> Les joueurs doivent pouvoir fixer
            des limites de depot et de mise.
          </li>
          <li>
            <strong>Verification d&apos;identite :</strong> KYC obligatoire avant
            tout depot.
          </li>
          <li>
            <strong>Fichier des interdits de jeux :</strong> Verification
            obligatoire contre le fichier national des personnes interdites de
            jeu.
          </li>
          <li>
            <strong>Fiscalite :</strong> Les operateurs paient des taxes sur les
            mises ou le produit brut des jeux, selon l&apos;activite.
          </li>
          <li>
            <strong>Prevention de l&apos;addiction :</strong> Mise en place obligatoire
            de messages de prevention, d&apos;outils de diagnostic et de liens vers
            des structures d&apos;aide.
          </li>
        </ul>

        <h2>Protection des joueurs en France</h2>

        <p>
          L&apos;ANJ place la protection des joueurs au coeur de sa mission. Les
          mesures de protection incluent :
        </p>

        <ul>
          <li>
            <strong>Auto-exclusion nationale :</strong> Inscription sur le fichier
            des interdits de jeux (duree minimale de 3 ans), empechant l&apos;acces
            a tous les sites agrees et casinos physiques.
          </li>
          <li>
            <strong>Limites de depot :</strong> Chaque joueur fixe ses propres
            limites de depot hebdomadaires ou mensuelles.
          </li>
          <li>
            <strong>Moderateurs de jeu :</strong> Alertes automatiques lorsque
            le comportement de jeu devient preoccupant.
          </li>
          <li>
            <strong>Service Joueurs Info Service :</strong> Ligne d&apos;aide gratuite
            (0 974 75 13 13) pour les joueurs en difficulte.
          </li>
          <li>
            <strong>Support en francais :</strong> Obligation de fournir un
            service client en langue francaise.
          </li>
        </ul>

        <p>
          Ces protections sont fortes pour les activites regulees. Le probleme
          reside dans le fait que de nombreux joueurs francais se tournent vers
          des sites non agrees pour acceder aux jeux de casino en ligne, perdant
          ainsi toute protection. Pour comprendre les implications, consultez nos{" "}
          <Link href="/strategies/casinos-en-ligne">strategies pour les casinos en ligne</Link>.
        </p>

        <h2>Operateurs agrees par l&apos;ANJ</h2>

        <ul>
          <li><strong>FDJ (Francaise des Jeux)</strong> &ndash; Operateur historique, monopole sur les loteries, present aussi en paris sportifs avec ParionsSport.</li>
          <li><strong>Betclic</strong> &ndash; Leader francais des paris sportifs en ligne.</li>
          <li><strong>Winamax</strong> &ndash; Numero un du poker en ligne en France, egalement present en paris sportifs.</li>
          <li><strong>Unibet</strong> &ndash; Operateur international du groupe Kindred, agree en France.</li>
          <li><strong>PMU</strong> &ndash; Monopole historique des paris hippiques en France.</li>
        </ul>
      </article>

      {/* PROS / CONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="card border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-green-400 mb-4">Avantages de l&apos;ANJ</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-green-400 shrink-0">&#10003;</span> Forte protection legale pour les joueurs francais</li>
            <li className="flex gap-2"><span className="text-green-400 shrink-0">&#10003;</span> Support client obligatoirement en francais</li>
            <li className="flex gap-2"><span className="text-green-400 shrink-0">&#10003;</span> Auto-exclusion nationale efficace</li>
            <li className="flex gap-2"><span className="text-green-400 shrink-0">&#10003;</span> Controles stricts du jeu responsable</li>
            <li className="flex gap-2"><span className="text-green-400 shrink-0">&#10003;</span> Fiscalite transparente pour les gains</li>
          </ul>
        </div>
        <div className="card border-l-4 border-red-500">
          <h3 className="text-lg font-bold text-red-400 mb-4">Inconvenients de l&apos;ANJ</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Pas de casino en ligne (pas de slots, roulette, blackjack)</li>
            <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Selection de jeux tres limitee (paris, poker uniquement)</li>
            <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Marche monopolistique avec peu de concurrence</li>
            <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Fiscalite lourde sur les mises reduisant les cotes offertes</li>
            <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Pousse les joueurs vers des sites non regules</li>
          </ul>
        </div>
      </div>

      <article className="prose">
        <h2>Comment verifier un agrement ANJ ?</h2>

        <p>
          La verification d&apos;un agrement ANJ est simple et fiable :
        </p>

        <ol>
          <li>
            Rendez-vous sur le site officiel de l&apos;ANJ :{" "}
            <strong>anj.fr</strong>
          </li>
          <li>
            Consultez la liste officielle des operateurs agrees, mise a jour
            regulierement.
          </li>
          <li>
            Verifiez que le site sur lequel vous jouez figure bien dans cette
            liste avec l&apos;URL exacte.
          </li>
          <li>
            Un site agree affiche le logo ANJ en bas de page, avec un lien vers
            la page de verification.
          </li>
        </ol>

        <p>
          L&apos;ANJ maintient egalement une &laquo; liste noire &raquo; des sites de jeux
          non autorises, accessible publiquement. Si un site figure sur cette
          liste, fuyez-le immediatement. Retrouvez nos{" "}
          <Link href="/casinos-en-ligne">recommandations de casinos</Link> et
          notre <Link href="/blog/casinos-en-ligne/licences-casino">guide approfondi des licences</Link>.
          Consultez egalement les fiches des autres regulateurs :{" "}
          <Link href="/licences/mga">MGA</Link>,{" "}
          <Link href="/licences/ukgc">UKGC</Link>,{" "}
          <Link href="/licences/curacao">Curacao</Link> et{" "}
          <Link href="/licences/gibraltar">Gibraltar</Link>.
        </p>
      </article>

      <FAQ items={faqItems} id="faq-anj" />

      <ArticleCTA />
    </div>
  );
}
