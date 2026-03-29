import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import CasinoTable from "@/components/CasinoTable";

export const metadata: Metadata = {
  title: "Vidéo Poker : Stratégie et RTP",
  description:
    "Guide du vidéo poker : Jacks or Better, Deuces Wild, tableaux de paiement, stratégie optimale et RTP supérieur à 99 %.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/jeux/video-poker",
  },
};

const faqItems = [
  {
    question: "Quel est le RTP du vidéo poker par rapport aux machines à sous ?",
    answer:
      "Le vidéo poker offre un RTP considérablement supérieur aux machines à sous classiques. Avec une stratégie optimale, Jacks or Better 9/6 atteint 99.54%, Deuces Wild Full Pay atteint 100.76%, et même les variantes les moins favorables dépassent généralement 97%. En comparaison, les machines à sous typiques se situent entre 92% et 96%. Cette différence est significative sur le long terme.",
  },
  {
    question: "Deuces Wild a-t-il vraiment un RTP supérieur à 100% ?",
    answer:
      "Oui, la version Full Pay de Deuces Wild offre un RTP théorique de 100.76% avec une stratégie parfaite. Cela signifie que le joueur a un avantage mathématique sur le casino. Cependant, cette version est extrêmement rare dans les casinos en ligne modernes. La plupart proposent des versions avec un tableau de paiement réduit et un RTP inférieur à 99%. Vérifiez toujours le tableau de paiement avant de jouer.",
  },
  {
    question: "Comment lire un tableau de paiement au vidéo poker ?",
    answer:
      "Le tableau de paiement affiche les gains pour chaque combinaison de main en fonction du nombre de pièces misées. Le ratio clé est le paiement du Full House et du Flush. Pour Jacks or Better : 9/6 (9 pour Full House, 6 pour Flush) est la version complète avec un RTP de 99.54%. Un tableau 8/5 réduit le RTP à 97.30%. Un tableau 7/5 descend à 96.15%. Ces différences ont un impact énorme sur vos résultats.",
  },
  {
    question: "Faut-il toujours garder une paire au vidéo poker ?",
    answer:
      "Pas toujours. La stratégie optimale dépend de ce que vous avez en main. Par exemple, avec une paire basse et 4 cartes d'une quinte flush, il est plus profitable de tenter la quinte flush. Avec une paire de Valets ou mieux, vous la gardez presque toujours. La stratégie optimale est un ensemble de règles de priorité qui classent chaque situation possible par espérance mathématique.",
  },
  {
    question: "Le vidéo poker est-il un jeu de hasard ou d'adresse ?",
    answer:
      "Le vidéo poker est un hybride unique. La distribution des cartes est aléatoire (déterminée par un RNG), mais la décision de garder ou d'échanger chaque carte est une décision d'adresse qui influence directement le RTP. Un joueur utilisant la stratégie optimale obtient un RTP de 99.54% sur Jacks or Better 9/6, tandis qu'un joueur novice obtient souvent 95-97%. L'écart est de 2 à 4 points de RTP, ce qui est considérable.",
  },
  {
    question: "Combien de bankroll faut-il pour jouer au vidéo poker ?",
    answer:
      "Le vidéo poker, malgré son excellent RTP, est un jeu à variance significative. Pour jouer confortablement au Jacks or Better avec des mises de 1.25 euro (5 pièces de 0.25 euro), prévoyez une bankroll de 200 à 400 mises, soit 250 à 500 euros. Misez toujours le maximum de pièces (généralement 5) pour bénéficier du paiement bonus sur la Quinte Flush Royale.",
  },
  {
    question: "Pourquoi faut-il toujours miser le maximum de pièces ?",
    answer:
      "La Quinte Flush Royale est payée proportionnellement plus avec la mise maximale. Typiquement : 250 pour 1 avec 1 à 4 pièces, mais 800 pour 1 avec 5 pièces. Ce bonus représente environ 2% du RTP total. Ne pas miser le maximum réduit donc significativement votre RTP effectif. Si votre budget est limité, choisissez une dénomination de pièce plus basse mais misez toujours 5 pièces.",
  },
];

export default function VideoPokerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Jeux", href: "/jeux" },
          { label: "Vidéo Poker" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gold mb-6">
        Vidéo Poker : Variantes, Stratégie Optimale et Tableaux de Paiement
      </h1>

      <div className="prose">
        <p className="text-lg">
          Le vidéo poker est le jeu de casino le plus sous-estimé. Avec une{" "}
          <strong>stratégie optimale</strong>, certaines variantes offrent un{" "}
          <strong>RTP supérieur à 99.5%</strong>, rivalisant avec le{" "}
          <Link href="/jeux/blackjack" className="text-gold hover:text-gold-light">
            blackjack
          </Link>{" "}
          comme le jeu le plus favorable au joueur. Contrairement aux{" "}
          <Link href="/jeux/machines-a-sous" className="text-gold hover:text-gold-light">
            machines à sous
          </Link>
          , vos décisions influencent directement vos résultats. Chaque main
          est un problème de probabilité à résoudre.
        </p>
        <p>
          Ce guide couvre les principales variantes, explique comment lire un
          tableau de paiement, détaille la stratégie optimale et vous donne
          toutes les clés pour tirer le maximum de votre{" "}
          <strong>bankroll</strong> au vidéo poker.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Le Fonctionnement du Vidéo Poker
        </h2>
        <p>
          Le vidéo poker se joue avec un jeu standard de 52 cartes (53 avec un
          Joker selon les variantes). Le principe est simple :
        </p>
        <ol>
          <li>Vous placez votre mise (idéalement le maximum de pièces).</li>
          <li>Cinq cartes vous sont distribuées aléatoirement par le <strong>RNG</strong>.</li>
          <li>
            Vous choisissez quelles cartes garder et lesquelles échanger.
            C&apos;est la décision stratégique cruciale.
          </li>
          <li>
            Les cartes échangées sont remplacées par de nouvelles cartes du
            même jeu.
          </li>
          <li>
            Votre main finale est évaluée selon le tableau de paiement de la
            machine.
          </li>
        </ol>
        <p>
          La combinaison de l&apos;aléatoire et de la décision du joueur fait du
          vidéo poker un jeu unique au casino, où l&apos;adresse réduit
          significativement l&apos;<strong>avantage maison</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Jacks or Better : La Référence
        </h2>
        <p>
          Jacks or Better est la variante fondamentale du vidéo poker. La main
          minimum payante est une paire de Valets ou mieux. C&apos;est sur cette
          variante que la stratégie de base est la plus documentée et la plus
          accessible.
        </p>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Tableau de Paiement Jacks or Better (version 9/6 - Full Pay)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-bg">
                  <th className="p-2 text-left">Main</th>
                  <th className="p-2 text-center">1 piece</th>
                  <th className="p-2 text-center">2 pieces</th>
                  <th className="p-2 text-center">3 pieces</th>
                  <th className="p-2 text-center">4 pieces</th>
                  <th className="p-2 text-center">5 pieces</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 font-semibold">Quinte Flush Royale</td>
                  <td className="p-2 text-center">250</td>
                  <td className="p-2 text-center">500</td>
                  <td className="p-2 text-center">750</td>
                  <td className="p-2 text-center">1000</td>
                  <td className="p-2 text-center text-gold font-bold">4000</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2 font-semibold">Quinte Flush</td>
                  <td className="p-2 text-center">50</td>
                  <td className="p-2 text-center">100</td>
                  <td className="p-2 text-center">150</td>
                  <td className="p-2 text-center">200</td>
                  <td className="p-2 text-center">250</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Carré</td>
                  <td className="p-2 text-center">25</td>
                  <td className="p-2 text-center">50</td>
                  <td className="p-2 text-center">75</td>
                  <td className="p-2 text-center">100</td>
                  <td className="p-2 text-center">125</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2 font-semibold">Full House</td>
                  <td className="p-2 text-center">9</td>
                  <td className="p-2 text-center">18</td>
                  <td className="p-2 text-center">27</td>
                  <td className="p-2 text-center">36</td>
                  <td className="p-2 text-center">45</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Flush (Couleur)</td>
                  <td className="p-2 text-center">6</td>
                  <td className="p-2 text-center">12</td>
                  <td className="p-2 text-center">18</td>
                  <td className="p-2 text-center">24</td>
                  <td className="p-2 text-center">30</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2 font-semibold">Quinte (Suite)</td>
                  <td className="p-2 text-center">4</td>
                  <td className="p-2 text-center">8</td>
                  <td className="p-2 text-center">12</td>
                  <td className="p-2 text-center">16</td>
                  <td className="p-2 text-center">20</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Brelan</td>
                  <td className="p-2 text-center">3</td>
                  <td className="p-2 text-center">6</td>
                  <td className="p-2 text-center">9</td>
                  <td className="p-2 text-center">12</td>
                  <td className="p-2 text-center">15</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2 font-semibold">Deux Paires</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">4</td>
                  <td className="p-2 text-center">6</td>
                  <td className="p-2 text-center">8</td>
                  <td className="p-2 text-center">10</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Paire de Valets+</td>
                  <td className="p-2 text-center">1</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">3</td>
                  <td className="p-2 text-center">4</td>
                  <td className="p-2 text-center">5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-3">
            <strong>RTP avec stratégie optimale : 99.54%</strong> | Notez le
            bonus disproportionné sur la Quinte Flush Royale avec 5 pièces
            (4000 au lieu de 1250 proportionnel).
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gold-light mt-6 mb-3">
          Impact du Tableau de Paiement sur le RTP
        </h3>
        <p>
          La version 9/6 est dite &quot;Full Pay&quot;. Les casinos proposent souvent
          des versions réduites. Chaque point de réduction a un impact direct
          et mesurable :
        </p>

        <div className="card my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-bg">
                  <th className="p-2 text-left">Version</th>
                  <th className="p-2 text-center">Full / Flush</th>
                  <th className="p-2 text-center">RTP</th>
                  <th className="p-2 text-center">Avantage maison</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-green-400 font-semibold">9/6 (Full Pay)</td>
                  <td className="p-2 text-center">9 / 6</td>
                  <td className="p-2 text-center">99.54%</td>
                  <td className="p-2 text-center">0.46%</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">9/5</td>
                  <td className="p-2 text-center">9 / 5</td>
                  <td className="p-2 text-center">98.45%</td>
                  <td className="p-2 text-center">1.55%</td>
                </tr>
                <tr>
                  <td className="p-2">8/6</td>
                  <td className="p-2 text-center">8 / 6</td>
                  <td className="p-2 text-center">98.39%</td>
                  <td className="p-2 text-center">1.61%</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">8/5</td>
                  <td className="p-2 text-center">8 / 5</td>
                  <td className="p-2 text-center">97.30%</td>
                  <td className="p-2 text-center">2.70%</td>
                </tr>
                <tr>
                  <td className="p-2 text-red-400">7/5</td>
                  <td className="p-2 text-center">7 / 5</td>
                  <td className="p-2 text-center">96.15%</td>
                  <td className="p-2 text-center">3.85%</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2 text-red-400">6/5</td>
                  <td className="p-2 text-center">6 / 5</td>
                  <td className="p-2 text-center">95.00%</td>
                  <td className="p-2 text-center">5.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          La leçon est claire : <strong>vérifiez toujours le tableau de paiement</strong>{" "}
          avant de jouer. La différence entre une version 9/6 et une version
          6/5 représente 4.54 points de RTP. Sur 10 000 euros misés, c&apos;est la
          différence entre perdre 46 euros et perdre 500 euros.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Deuces Wild : La Variante aux 2 Sauvages
        </h2>
        <p>
          Deuces Wild transforme les quatre 2 du jeu en cartes sauvages
          (Wilds) qui peuvent remplacer n&apos;importe quelle autre carte. Cela
          modifie radicalement les probabilités et la stratégie.
        </p>
        <p>
          La version Full Pay de Deuces Wild offre un <strong>RTP de 100.76%</strong>{" "}
          avec une stratégie parfaite, ce qui signifie théoriquement un
          avantage pour le joueur. Cependant, cette version est quasi
          introuvable dans les casinos modernes. Les versions courantes offrent
          un RTP entre 96% et 99%.
        </p>
        <p>
          Les différences clés avec Jacks or Better :
        </p>
        <ul>
          <li>
            La main minimum payante est le brelan (trois identiques), pas la
            paire de Valets, car les Deuces sauvages rendent les petites
            combinaisons trop fréquentes.
          </li>
          <li>
            La Quinte Flush Royale naturelle (sans Deuces) paie un bonus
            supérieur.
          </li>
          <li>
            La stratégie est plus complexe car il faut intégrer les Deuces
            dans chaque décision.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Autres Variantes Populaires
        </h2>
        <ul>
          <li>
            <strong>Bonus Poker</strong> : paiements augmentés pour certains
            carrés (quatre As paient plus que quatre Rois). RTP Full Pay :
            99.17%.
          </li>
          <li>
            <strong>Double Bonus Poker</strong> : paiements encore plus élevés
            pour les carrés, mais réduits pour deux paires (1:1 au lieu de
            2:1). RTP Full Pay : 100.17% (théorique).
          </li>
          <li>
            <strong>Joker Poker</strong> : ajout d&apos;un Joker sauvage (53
            cartes). Main minimum : paire de Rois. RTP Full Pay : jusqu&apos;à
            100.65%.
          </li>
          <li>
            <strong>Aces and Faces</strong> : bonus sur les carrés d&apos;As et les
            carrés de figures. RTP typique : 99.26%.
          </li>
          <li>
            <strong>Tens or Better</strong> : la main minimum payante est une
            paire de 10. Tableau de paiement ajusté en conséquence. RTP
            typique : 99.14%.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Stratégie Optimale : Les Règles de Priorité
        </h2>
        <p>
          La stratégie optimale au vidéo poker consiste à connaître l&apos;ordre de
          priorité des mains à garder. Voici la stratégie simplifiée pour
          Jacks or Better 9/6, classée par <strong>espérance mathématique</strong>{" "}
          décroissante :
        </p>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Stratégie Simplifiée Jacks or Better
          </h3>
          <ol className="space-y-2 text-sm">
            <li><strong>1.</strong> Quinte Flush Royale, Quinte Flush, Carré : garder la main complète</li>
            <li><strong>2.</strong> 4 cartes d&apos;une Quinte Flush Royale</li>
            <li><strong>3.</strong> Full House, Flush, Quinte : garder la main complète</li>
            <li><strong>4.</strong> Brelan : garder les trois cartes identiques</li>
            <li><strong>5.</strong> 4 cartes d&apos;une Quinte Flush</li>
            <li><strong>6.</strong> Deux paires : garder les deux paires</li>
            <li><strong>7.</strong> Paire haute (Valets+) : garder la paire</li>
            <li><strong>8.</strong> 3 cartes d&apos;une Quinte Flush Royale</li>
            <li><strong>9.</strong> 4 cartes d&apos;un Flush</li>
            <li><strong>10.</strong> Paire basse : garder la paire</li>
            <li><strong>11.</strong> 4 cartes d&apos;une Quinte ouverte (open-ended)</li>
            <li><strong>12.</strong> 2 cartes hautes de même couleur (potentiel Flush Royale)</li>
            <li><strong>13.</strong> 3 cartes d&apos;un Flush avec 2 cartes hautes</li>
            <li><strong>14.</strong> 2 cartes hautes non assorties</li>
            <li><strong>15.</strong> 1 carte haute (V, D, R, A) : garder uniquement cette carte</li>
            <li><strong>16.</strong> Rien de tout cela : tout échanger</li>
          </ol>
        </div>

        <p>
          Cette liste simplifiée couvre environ 95% des situations. La
          stratégie complète comporte davantage de nuances, mais maîtriser ces
          16 règles de priorité vous rapprochera considérablement du RTP
          optimal.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Gestion de Bankroll et Conseils Pratiques
        </h2>
        <ul>
          <li>
            <strong>Misez toujours le maximum de pièces (5)</strong> : le
            bonus sur la Quinte Flush Royale avec 5 pièces représente environ
            2% du RTP. Si votre budget est limité, réduisez la dénomination
            (0.10 euro au lieu de 0.25 euro) mais gardez 5 pièces.
          </li>
          <li>
            <strong>Prévoyez une bankroll suffisante</strong> : la variance au
            vidéo poker est significative. Une Quinte Flush Royale (qui
            représente 2% du RTP) ne tombe en moyenne qu&apos;une fois sur 40 000
            mains. Prévoyez 200 à 500 mises.
          </li>
          <li>
            <strong>Entraînez-vous en mode gratuit</strong> : la stratégie
            optimale nécessite de la pratique. Jouez en mode démo jusqu&apos;à ce
            que les bonnes décisions deviennent automatiques.
          </li>
          <li>
            <strong>Vérifiez le tableau de paiement</strong> : c&apos;est la
            première chose à faire. Refusez de jouer sur une machine 7/5 ou
            6/5 quand des versions 9/6 ou 8/6 sont disponibles.
          </li>
          <li>
            <strong>Ne jouez pas à la vitesse maximale</strong> : prenez le
            temps de réfléchir à chaque main. Une erreur de stratégie coûte
            plus cher que quelques secondes de réflexion.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Vidéo Poker vs Autres Jeux : Comparaison
        </h2>

        <div className="card my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-bg">
                  <th className="p-2 text-left">Jeu</th>
                  <th className="p-2 text-center">RTP optimal</th>
                  <th className="p-2 text-center">Influence du joueur</th>
                  <th className="p-2 text-center">Complexité</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 font-semibold text-gold">Video Poker (JoB 9/6)</td>
                  <td className="p-2 text-center">99.54%</td>
                  <td className="p-2 text-center">Elevee</td>
                  <td className="p-2 text-center">Moyenne-haute</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">
                    <Link href="/jeux/blackjack" className="text-gold hover:text-gold-light">
                      Blackjack
                    </Link>
                  </td>
                  <td className="p-2 text-center">99.50%</td>
                  <td className="p-2 text-center">Elevee</td>
                  <td className="p-2 text-center">Moyenne</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <Link href="/jeux/baccarat" className="text-gold hover:text-gold-light">
                      Baccarat (Banco)
                    </Link>
                  </td>
                  <td className="p-2 text-center">98.94%</td>
                  <td className="p-2 text-center">Aucune</td>
                  <td className="p-2 text-center">Tres faible</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">
                    <Link href="/jeux/roulette" className="text-gold hover:text-gold-light">
                      Roulette (Europeenne)
                    </Link>
                  </td>
                  <td className="p-2 text-center">97.30%</td>
                  <td className="p-2 text-center">Aucune</td>
                  <td className="p-2 text-center">Faible</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <Link href="/jeux/machines-a-sous" className="text-gold hover:text-gold-light">
                      Machines a sous
                    </Link>
                  </td>
                  <td className="p-2 text-center">92-98%</td>
                  <td className="p-2 text-center">Aucune</td>
                  <td className="p-2 text-center">Tres faible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          Le vidéo poker se distingue par la combinaison unique d&apos;un RTP
          excellent et d&apos;une forte influence du joueur sur les résultats.
          C&apos;est le jeu idéal pour les joueurs qui recherchent l&apos;optimisation
          mathématique et sont prêts à investir du temps dans l&apos;apprentissage
          de la stratégie.
        </p>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Liens Utiles
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/jeux/blackjack"
                className="text-gold hover:text-gold-light"
              >
                Guide du Blackjack : stratégie de base et comptage
              </Link>
            </li>
            <li>
              <Link
                href="/jeux/machines-a-sous"
                className="text-gold hover:text-gold-light"
              >
                Machines à sous : comprendre le RTP et la volatilité
              </Link>
            </li>
            <li>
              <Link
                href="/blog/mathematiques-casino"
                className="text-gold hover:text-gold-light"
              >
                Les mathématiques du casino expliquées
              </Link>
            </li>
            <li>
              <Link
                href="/blog/guide-debutant"
                className="text-gold hover:text-gold-light"
              >
                Guide complet pour les débutants au casino
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

      <FAQ items={faqItems} id="faq-video-poker" />
    </div>
  );
}
