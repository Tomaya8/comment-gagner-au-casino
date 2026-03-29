import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import CasinoTable from "@/components/CasinoTable";

export const metadata: Metadata = {
  title: "Blackjack : Stratégie et Règles",
  description:
    "Guide du blackjack : stratégie de base, comptage de cartes, règles de split et double, assurance, RTP et gestion de bankroll.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/jeux/blackjack",
  },
};

const faqItems = [
  {
    question: "Le blackjack est-il vraiment le jeu de casino avec le meilleur RTP ?",
    answer:
      "Oui, avec une stratégie de base parfaite, le blackjack offre un RTP pouvant atteindre 99.5%, soit un avantage maison de seulement 0.5%. C'est l'un des meilleurs RTP disponibles au casino avec le vidéo poker. Cependant, ce RTP optimal n'est atteint que si vous suivez scrupuleusement la stratégie de base à chaque main.",
  },
  {
    question: "Le comptage de cartes est-il illégal ?",
    answer:
      "Non, le comptage de cartes n'est pas illégal. C'est une technique mentale qui ne nécessite aucun dispositif. Cependant, les casinos physiques se réservent le droit de refuser l'accès aux joueurs qu'ils soupçonnent de compter. En ligne, le comptage est totalement inutile car les cartes sont mélangées par le RNG après chaque main ou le sabot est très profond avec mélange fréquent.",
  },
  {
    question: "Faut-il toujours prendre l'assurance au blackjack ?",
    answer:
      "Non, il ne faut jamais prendre l'assurance. Mathématiquement, l'assurance est un pari annexe avec un avantage maison de 7.7%. Même lorsque le croupier montre un As, la probabilité qu'il ait un blackjack est de 30.8% (4 figures sur 13 cartes). L'assurance est systématiquement un mauvais pari sur le long terme.",
  },
  {
    question: "Quand faut-il splitter (séparer) ses cartes ?",
    answer:
      "Les règles essentielles : toujours splitter les As et les 8. Ne jamais splitter les 10, les 5 et les 4. Splitter les 2, 3, 6 et 7 quand le croupier montre 2 à 7. Splitter les 9 sauf quand le croupier montre 7, 10 ou As. Ces décisions sont toutes issues de la stratégie de base et sont mathématiquement optimales.",
  },
  {
    question: "Comment fonctionne la stratégie de base du blackjack ?",
    answer:
      "La stratégie de base est un tableau qui indique la décision optimale (tirer, rester, doubler, splitter, abandonner) pour chaque combinaison possible entre votre main et la carte visible du croupier. Elle est calculée par simulation informatique de millions de mains et minimise l'avantage maison. Consultez et mémorisez ce tableau avant de jouer.",
  },
  {
    question: "Quelle variante de blackjack choisir en ligne ?",
    answer:
      "Privilégiez le blackjack classique européen avec les règles suivantes : le croupier s'arrête sur un 17 souple (Stand on Soft 17), le double est autorisé après un split, et l'abandon tardif (Late Surrender) est disponible. Évitez les variantes exotiques qui ajoutent souvent des règles défavorables au joueur. Vérifiez toujours le RTP affiché.",
  },
  {
    question: "Peut-on gagner au blackjack en ligne sur le long terme ?",
    answer:
      "Sans comptage de cartes (inutile en ligne), le blackjack reste un jeu à espérance négative, même avec un avantage maison très faible. Cependant, avec un RTP de 99.5%, vos pertes théoriques sont minimes : 5 euros pour 1000 euros misés. Combiné à des bonus casino favorables et une gestion rigoureuse de bankroll, le blackjack offre les meilleures conditions de jeu possible.",
  },
];

export default function BlackjackPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Jeux", href: "/jeux" },
          { label: "Blackjack" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gold mb-6">
        Blackjack : Stratégie de Base, Règles Complètes et Probabilités
      </h1>

      <div className="prose">
        <p className="text-lg">
          Le blackjack est le jeu de table qui offre le meilleur{" "}
          <strong>RTP</strong> (taux de redistribution) au casino, pouvant
          atteindre <strong>99.5%</strong> avec une stratégie de base parfaite.
          Contrairement à la{" "}
          <Link href="/jeux/roulette" className="text-gold hover:text-gold-light">
            roulette
          </Link>{" "}
          ou aux{" "}
          <Link href="/jeux/machines-a-sous" className="text-gold hover:text-gold-light">
            machines à sous
          </Link>
          , les décisions du joueur influencent directement le résultat. C&apos;est
          ce qui rend le blackjack unique et passionnant.
        </p>
        <p>
          Ce guide détaillé couvre les règles fondamentales, la stratégie de
          base complète, la réalité du comptage de cartes, et les meilleures
          pratiques pour gérer votre <strong>bankroll</strong> efficacement.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Règles Fondamentales du Blackjack
        </h2>
        <p>
          L&apos;objectif du blackjack est de battre le croupier en obtenant une
          main dont la valeur se rapproche le plus de 21 sans la dépasser. Les
          cartes 2 à 10 valent leur valeur faciale. Les figures (Valet, Dame,
          Roi) valent 10. L&apos;As vaut 1 ou 11 selon ce qui est le plus
          avantageux pour le joueur.
        </p>
        <p>
          Un <strong>blackjack naturel</strong> (un As + une carte valant 10)
          est payé 3:2 (soit 1.5 fois la mise). Si le joueur et le croupier ont
          tous les deux un blackjack, c&apos;est une égalité (push). Le croupier
          doit tirer jusqu&apos;à atteindre au minimum 17.
        </p>

        <h3 className="text-xl font-semibold text-gold-light mt-6 mb-3">
          Les Actions du Joueur
        </h3>
        <ul>
          <li>
            <strong>Tirer (Hit)</strong> : demander une carte supplémentaire.
          </li>
          <li>
            <strong>Rester (Stand)</strong> : conserver sa main actuelle.
          </li>
          <li>
            <strong>Doubler (Double Down)</strong> : doubler sa mise et recevoir
            exactement une seule carte supplémentaire. Action très profitable
            dans certaines situations.
          </li>
          <li>
            <strong>Séparer (Split)</strong> : si les deux premières cartes sont
            identiques, les séparer en deux mains distinctes avec une mise
            égale sur chacune.
          </li>
          <li>
            <strong>Abandonner (Surrender)</strong> : renoncer à la main en
            récupérant la moitié de sa mise. Disponible uniquement dans
            certaines variantes.
          </li>
          <li>
            <strong>Assurance</strong> : pari annexe proposé lorsque le croupier
            montre un As. Payé 2:1 si le croupier a un blackjack.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          La Stratégie de Base : Le Tableau Indispensable
        </h2>
        <p>
          La stratégie de base est le fondement de tout jeu de blackjack
          intelligent. Calculée par simulation informatique sur des millions de
          mains, elle indique la <strong>décision mathématiquement optimale</strong>{" "}
          pour chaque situation. En la suivant parfaitement, vous réduisez
          l&apos;avantage maison à son minimum absolu.
        </p>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Principes Clés de la Stratégie de Base
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Mains Dures (Hard Hands)</h4>
              <ul className="text-sm space-y-1">
                <li>8 ou moins : toujours tirer</li>
                <li>9 : doubler si le croupier montre 3 à 6, sinon tirer</li>
                <li>10 : doubler si le croupier montre 2 à 9, sinon tirer</li>
                <li>11 : toujours doubler</li>
                <li>12 : rester si le croupier montre 4 à 6, sinon tirer</li>
                <li>13 à 16 : rester si le croupier montre 2 à 6, sinon tirer</li>
                <li>17 ou plus : toujours rester</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Mains Souples (Soft Hands)</h4>
              <ul className="text-sm space-y-1">
                <li>A+2 ou A+3 : doubler si croupier montre 5-6, sinon tirer</li>
                <li>A+4 ou A+5 : doubler si croupier montre 4-6, sinon tirer</li>
                <li>A+6 : doubler si croupier montre 3-6, sinon tirer</li>
                <li>A+7 : doubler si croupier montre 3-6, rester sur 2/7/8, tirer sur 9/10/A</li>
                <li>A+8 ou A+9 : toujours rester</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Splits (Séparations)</h4>
              <ul className="text-sm space-y-1">
                <li>As-As : toujours splitter</li>
                <li>8-8 : toujours splitter</li>
                <li>10-10 : ne jamais splitter</li>
                <li>5-5 : ne jamais splitter (traiter comme un 10, doubler)</li>
                <li>4-4 : ne jamais splitter (tirer ou doubler si croupier montre 5-6)</li>
                <li>9-9 : splitter sauf contre 7, 10 ou As</li>
                <li>2-2, 3-3, 6-6, 7-7 : splitter si croupier montre 2 à 7</li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          Nous vous recommandons d&apos;imprimer ou de sauvegarder un tableau
          complet de stratégie de base. En casino en ligne, vous pouvez le
          consulter librement pendant le jeu, ce qui est un avantage considérable
          par rapport au casino physique.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Le Comptage de Cartes : Réalité vs Mythe
        </h2>
        <p>
          Le comptage de cartes est entouré d&apos;une aura romanesque entretenue
          par le cinéma et la littérature. Voici la réalité.
        </p>

        <h3 className="text-xl font-semibold text-gold-light mt-6 mb-3">
          Le Principe du Comptage (Système Hi-Lo)
        </h3>
        <p>
          Le système Hi-Lo attribue une valeur à chaque carte distribuée :
          cartes 2 à 6 = +1, cartes 7 à 9 = 0, cartes 10/figures/As = -1. Le
          joueur maintient un &quot;compte courant&quot; qu&apos;il divise par le nombre de
          sabots restants pour obtenir le &quot;vrai compte&quot;. Un vrai compte
          positif indique que le sabot est riche en grosses cartes, ce qui
          favorise le joueur.
        </p>
        <p>
          En théorie, un compteur de cartes expert peut inverser l&apos;avantage
          maison et obtenir un avantage de 0.5% à 1.5% sur le casino.
        </p>

        <h3 className="text-xl font-semibold text-gold-light mt-6 mb-3">
          Pourquoi le Comptage est Inutile en Ligne
        </h3>
        <p>
          Dans les casinos en ligne, le comptage de cartes est{" "}
          <strong>totalement inefficace</strong> pour plusieurs raisons :
        </p>
        <ul>
          <li>
            Les jeux RNG mélangent virtuellement le sabot après chaque main,
            éliminant toute corrélation entre les tours.
          </li>
          <li>
            Les tables live utilisent des sabots de 8 jeux avec une carte de
            coupe placée très tôt (50-70% de pénétration), réduisant
            drastiquement l&apos;efficacité du comptage.
          </li>
          <li>
            Les mélangeurs automatiques continus (CSM) rendent le comptage
            impossible sur certaines tables live.
          </li>
        </ul>
        <p>
          Concentrez vos efforts sur la maîtrise parfaite de la{" "}
          <strong>stratégie de base</strong>, qui est bien plus accessible et
          réellement efficace en ligne.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          L&apos;Assurance : Le Piège à Éviter
        </h2>
        <p>
          Lorsque le croupier montre un As, il vous sera proposé de prendre
          l&apos;<strong>assurance</strong>. Ce pari annexe coûte la moitié de votre
          mise initiale et paie 2:1 si le croupier a un blackjack.
        </p>
        <p>
          L&apos;assurance semble raisonnable : &quot;protéger&quot; sa main contre le
          blackjack du croupier. Mais les mathématiques sont claires : avec 16
          cartes valant 10 sur 52, la probabilité que la carte cachée vaille 10
          est de 30.8%. L&apos;avantage maison sur le pari d&apos;assurance est de{" "}
          <strong>7.7%</strong>, soit l&apos;un des pires paris disponibles au casino.
        </p>
        <p>
          La règle est simple :{" "}
          <strong>ne prenez jamais l&apos;assurance</strong>. Cette recommandation
          s&apos;applique même si vous avez un blackjack (refusez le &quot;Even Money&quot;).
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Le Double Down : L&apos;Arme Secrète du Joueur
        </h2>
        <p>
          Le double est l&apos;action la plus profitable du blackjack lorsqu&apos;elle est
          utilisée correctement. Vous doublez votre mise en recevant exactement
          une carte. C&apos;est l&apos;opportunité de maximiser vos gains dans les
          situations favorables.
        </p>
        <p>
          Les situations les plus profitables pour doubler :
        </p>
        <ul>
          <li>
            Vous avez 11 et le croupier montre 2 à 10 : situation extrêmement
            favorable. Votre espérance de gain est maximale.
          </li>
          <li>
            Vous avez 10 et le croupier montre 2 à 9 : très bonne situation
            pour doubler.
          </li>
          <li>
            Vous avez A+5 ou A+6 et le croupier montre 4, 5 ou 6 : le
            croupier est en position faible et votre main souple vous protège.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Gestion de Bankroll au Blackjack
        </h2>
        <p>
          Même avec le meilleur RTP du casino, la gestion de votre bankroll
          reste essentielle. L&apos;avantage maison de 0.5% signifie que la{" "}
          <strong>variance</strong> joue un rôle majeur sur des sessions courtes
          à moyennes.
        </p>
        <ul>
          <li>
            <strong>Taille de mise recommandée</strong> : ne misez pas plus de
            2% de votre bankroll totale par main. Avec 500 euros, misez
            maximum 10 euros par main.
          </li>
          <li>
            <strong>Prévoyez les doubles et splits</strong> : une main peut
            nécessiter jusqu&apos;à 4 fois votre mise initiale (double après split).
            Gardez toujours une réserve suffisante.
          </li>
          <li>
            <strong>Sessions limitées</strong> : fixez un stop-loss (par
            exemple -30% de votre bankroll de session) et un objectif de gain
            (+50% de votre bankroll de session).
          </li>
          <li>
            <strong>Évitez les paris annexes</strong> : les paris secondaires
            (Perfect Pairs, 21+3, etc.) ont un avantage maison bien supérieur
            au jeu principal, souvent entre 3% et 10%.
          </li>
        </ul>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Impact des Règles sur l&apos;Avantage Maison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-bg">
                  <th className="p-2 text-left">Règle</th>
                  <th className="p-2 text-center">Effet sur l&apos;avantage maison</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Blackjack payé 3:2 (vs 6:5)</td>
                  <td className="p-2 text-center text-green-400">-1.39%</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">Croupier reste sur Soft 17</td>
                  <td className="p-2 text-center text-green-400">-0.20%</td>
                </tr>
                <tr>
                  <td className="p-2">Double après split autorisé</td>
                  <td className="p-2 text-center text-green-400">-0.13%</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">Abandon tardif autorisé</td>
                  <td className="p-2 text-center text-green-400">-0.08%</td>
                </tr>
                <tr>
                  <td className="p-2">8 jeux de cartes (vs 1 jeu)</td>
                  <td className="p-2 text-center text-red-400">+0.61%</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">Blackjack payé 6:5</td>
                  <td className="p-2 text-center text-red-400">+1.39%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Liens Utiles
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/blog/strategie-blackjack"
                className="text-gold hover:text-gold-light"
              >
                Stratégie blackjack avancée : tableaux et simulations
              </Link>
            </li>
            <li>
              <Link
                href="/blog/mathematiques-casino"
                className="text-gold hover:text-gold-light"
              >
                Les mathématiques du casino : espérance et variance
              </Link>
            </li>
            <li>
              <Link
                href="/jeux/roulette"
                className="text-gold hover:text-gold-light"
              >
                Guide de la Roulette
              </Link>
            </li>
            <li>
              <Link
                href="/jeux/video-poker"
                className="text-gold hover:text-gold-light"
              >
                Vidéo Poker : un autre jeu à haut RTP
              </Link>
            </li>
            <li>
              <Link
                href="/strategies"
                className="text-gold hover:text-gold-light"
              >
                Toutes nos stratégies de casino
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <CasinoTable />

      <FAQ items={faqItems} id="faq-blackjack" />
    </div>
  );
}
