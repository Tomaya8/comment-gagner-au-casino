import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import CasinoTable from "@/components/CasinoTable";

export const metadata: Metadata = {
  title: "Baccarat : Règles, Probabilités et Stratégies du Joueur",
  description:
    "Guide complet du baccarat : Banco vs Punto, règle de la troisième carte, commissions, avantage maison et stratégies. Tout pour comprendre ce jeu au RTP exceptionnel.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/jeux/baccarat",
  },
};

const faqItems = [
  {
    question: "Faut-il miser sur le Banco ou le Punto au baccarat ?",
    answer:
      "Mathématiquement, la mise sur le Banco est légèrement plus avantageuse avec un avantage maison de 1.06% contre 1.24% pour le Punto. Cependant, la commission de 5% prélevée sur les gains du Banco est déjà intégrée dans ce calcul. Les deux paris sont excellents comparés à la plupart des jeux de casino. Évitez absolument la mise Égalité (avantage maison de 14.36%).",
  },
  {
    question: "Comment fonctionne la règle de la troisième carte ?",
    answer:
      "La règle de la troisième carte est automatique et appliquée par le croupier. Si le Punto a un total de 0 à 5, il tire une troisième carte. S'il a 6 ou 7, il reste. Le Banco suit un tableau plus complexe qui dépend de son propre total et de la troisième carte du Punto. Le joueur n'a aucune décision à prendre, ce qui rend le baccarat très simple à jouer.",
  },
  {
    question: "Pourquoi la mise Égalité est-elle un si mauvais pari ?",
    answer:
      "La mise Égalité (Tie) paie 8:1 mais ne se produit que dans environ 9.5% des mains. L'avantage maison sur ce pari est de 14.36%, soit l'un des pires du casino. Pour mettre en perspective : sur 1000 euros misés sur l'Égalité, vous perdez en moyenne 143.60 euros. Sur le Banco, vous ne perdez que 10.60 euros. La différence est colossale.",
  },
  {
    question: "Le baccarat est-il un jeu de stratégie ou de hasard ?",
    answer:
      "Le baccarat est principalement un jeu de hasard pur. Le joueur n'a qu'une seule décision à prendre : choisir entre Banco, Punto ou Égalité. Il n'y a aucune décision de jeu comme au blackjack. Cependant, le choix systématique de miser sur le Banco et la gestion de bankroll constituent une forme de stratégie qui optimise vos résultats.",
  },
  {
    question: "Les systèmes de suivi des tendances fonctionnent-ils au baccarat ?",
    answer:
      "Non. Les casinos affichent souvent un tableau des résultats passés (le \"road\") pour inciter les joueurs à chercher des tendances. C'est purement psychologique. Chaque main de baccarat est indépendante des précédentes. Le RNG (en ligne) ou le sabot physique ne \"se souvient\" pas des résultats passés. Aucun pattern ne peut prédire le résultat suivant.",
  },
  {
    question: "Quel est l'avantage du baccarat par rapport aux autres jeux de table ?",
    answer:
      "Le baccarat offre l'un des avantages maison les plus bas du casino (1.06% sur le Banco) tout en étant extrêmement simple à jouer. Contrairement au blackjack, vous n'avez pas besoin de mémoriser une stratégie de base complexe. Contrairement à la roulette européenne (2.7% d'avantage maison), le baccarat est mathématiquement plus favorable au joueur.",
  },
];

export default function BaccaratPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Jeux", href: "/jeux" },
          { label: "Baccarat" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gold mb-6">
        Baccarat : Règles Complètes, Probabilités et Stratégies
      </h1>

      <div className="prose">
        <p className="text-lg">
          Le baccarat est le jeu de table le plus populaire dans les casinos du
          monde entier, générant des milliards d&apos;euros de revenus annuels,
          notamment en Asie. Malgré sa réputation de jeu réservé aux
          VIP, le baccarat est en réalité l&apos;un des jeux les plus simples du
          casino, avec un <strong>avantage maison</strong> parmi les plus bas.
          La mise sur le Banco offre un house edge de seulement{" "}
          <strong>1.06%</strong>, ce qui en fait l&apos;un des meilleurs paris
          disponibles.
        </p>
        <p>
          Ce guide détaille les règles du baccarat, la mécanique de la
          troisième carte, les probabilités exactes de chaque mise et les
          stratégies pour maximiser vos chances tout en gérant votre{" "}
          <strong>bankroll</strong> de manière responsable.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Les Règles Fondamentales du Baccarat
        </h2>
        <p>
          Au baccarat, deux mains sont distribuées : le <strong>Punto</strong>{" "}
          (joueur) et le <strong>Banco</strong> (banquier). Votre objectif est
          de parier sur la main qui se rapprochera le plus de 9. Vous pouvez
          miser sur le Punto, le Banco ou l&apos;Égalité.
        </p>

        <h3 className="text-xl font-semibold text-gold-light mt-6 mb-3">
          Valeur des Cartes
        </h3>
        <ul>
          <li>
            <strong>As</strong> : vaut 1 point
          </li>
          <li>
            <strong>2 à 9</strong> : valeur faciale
          </li>
          <li>
            <strong>10, Valet, Dame, Roi</strong> : valent 0 point
          </li>
        </ul>
        <p>
          Si le total dépasse 9, seul le chiffre des unités compte. Par
          exemple, une main de 7 + 8 = 15 vaut 5. Une main de 4 + 6 = 10 vaut
          0. Ce système unique élimine toute possibilité de dépasser 9.
        </p>

        <h3 className="text-xl font-semibold text-gold-light mt-6 mb-3">
          Le &quot;Naturel&quot; : 8 ou 9
        </h3>
        <p>
          Si le Punto ou le Banco reçoit un total de 8 ou 9 avec ses deux
          premières cartes, c&apos;est un <strong>naturel</strong>. Aucune carte
          supplémentaire n&apos;est distribuée et la main la plus haute gagne. Un
          naturel à 9 bat un naturel à 8. Si les deux mains ont le même
          naturel, c&apos;est une égalité.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          La Règle de la Troisième Carte
        </h2>
        <p>
          La règle de la troisième carte est ce qui rend le baccarat
          mathématiquement intéressant. Elle est entièrement automatique : ni le
          joueur ni le croupier ne prennent de décision. Le tableau suivant
          résume les règles :
        </p>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Règle du Punto (Joueur)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-bg">
                  <th className="p-2 text-left">Total des 2 premières cartes</th>
                  <th className="p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">0 - 5</td>
                  <td className="p-2 text-center">Tire une 3e carte</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">6 - 7</td>
                  <td className="p-2 text-center">Reste</td>
                </tr>
                <tr>
                  <td className="p-2">8 - 9</td>
                  <td className="p-2 text-center">Naturel (pas de 3e carte)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Règle du Banco (Banquier)
          </h3>
          <p className="text-sm text-muted mb-3">
            Si le Punto reste (6 ou 7), le Banco suit la même règle que le
            Punto. Si le Punto tire une 3e carte, le Banco suit ce tableau :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-bg">
                  <th className="p-2 text-left">Total du Banco</th>
                  <th className="p-2 text-center">Tire si la 3e carte du Punto est</th>
                  <th className="p-2 text-center">Reste si la 3e carte du Punto est</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">0, 1, 2</td>
                  <td className="p-2 text-center">Toujours</td>
                  <td className="p-2 text-center">-</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">3</td>
                  <td className="p-2 text-center">0-7, 9</td>
                  <td className="p-2 text-center">8</td>
                </tr>
                <tr>
                  <td className="p-2">4</td>
                  <td className="p-2 text-center">2-7</td>
                  <td className="p-2 text-center">0, 1, 8, 9</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">5</td>
                  <td className="p-2 text-center">4-7</td>
                  <td className="p-2 text-center">0-3, 8, 9</td>
                </tr>
                <tr>
                  <td className="p-2">6</td>
                  <td className="p-2 text-center">6-7</td>
                  <td className="p-2 text-center">0-5, 8, 9</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2">7</td>
                  <td className="p-2 text-center">-</td>
                  <td className="p-2 text-center">Toujours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          En pratique, vous n&apos;avez pas besoin de mémoriser ces règles. Le
          croupier (physique ou virtuel) les applique automatiquement. Elles
          sont présentées ici pour votre compréhension des{" "}
          <strong>probabilités</strong> sous-jacentes.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Probabilités et Avantage Maison
        </h2>
        <p>
          Les probabilités exactes du baccarat, calculées sur un sabot de 8
          jeux de cartes, sont les suivantes :
        </p>

        <div className="card my-8">
          <h3 className="text-lg font-bold text-gold mb-3">
            Probabilités par Type de Mise
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-bg">
                  <th className="p-2 text-left">Mise</th>
                  <th className="p-2 text-center">Probabilité de gain</th>
                  <th className="p-2 text-center">Paiement</th>
                  <th className="p-2 text-center">Avantage maison</th>
                  <th className="p-2 text-center">RTP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 font-semibold">Banco</td>
                  <td className="p-2 text-center">45.86%</td>
                  <td className="p-2 text-center">0.95:1*</td>
                  <td className="p-2 text-center text-green-400">1.06%</td>
                  <td className="p-2 text-center">98.94%</td>
                </tr>
                <tr className="bg-card-bg">
                  <td className="p-2 font-semibold">Punto</td>
                  <td className="p-2 text-center">44.62%</td>
                  <td className="p-2 text-center">1:1</td>
                  <td className="p-2 text-center text-green-400">1.24%</td>
                  <td className="p-2 text-center">98.76%</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Egalite</td>
                  <td className="p-2 text-center">9.52%</td>
                  <td className="p-2 text-center">8:1</td>
                  <td className="p-2 text-center text-red-400">14.36%</td>
                  <td className="p-2 text-center">85.64%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-muted mt-2">
              * Commission de 5% sur les gains du Banco
            </p>
          </div>
        </div>

        <p>
          La commission de 5% prélevée sur les gains du Banco compense le léger
          avantage statistique du banquier. Sans cette commission, le pari Banco
          serait un pari avec espérance positive pour le joueur. Certaines
          variantes proposent un baccarat &quot;No Commission&quot; qui remplace la
          commission par des règles alternatives (par exemple, un gain du Banco
          avec un total de 6 ne paie que la moitié).
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Stratégie du Joueur au Baccarat
        </h2>
        <p>
          Puisque le baccarat ne propose qu&apos;une seule décision (le choix de la
          mise), la stratégie se résume à quelques principes clairs :
        </p>
        <ul>
          <li>
            <strong>Misez systématiquement sur le Banco</strong> : avec un
            avantage maison de 1.06%, c&apos;est le pari optimal. La commission de
            5% est déjà prise en compte dans ce calcul.
          </li>
          <li>
            <strong>Évitez absolument la mise Égalité</strong> : avec 14.36%
            d&apos;avantage maison, c&apos;est l&apos;un des pires paris du casino. Le
            paiement de 8:1 est trompeur.
          </li>
          <li>
            <strong>Ignorez les tableaux de tendances</strong> : les casinos
            affichent les résultats passés pour encourager la recherche de
            patterns. Chaque main est indépendante, aucune tendance n&apos;existe.
          </li>
          <li>
            <strong>Gérez votre bankroll rigoureusement</strong> : fixez un
            budget de session, ne misez pas plus de 5% de votre bankroll par
            main, et arrêtez-vous après avoir atteint votre limite de perte ou
            votre objectif de gain.
          </li>
          <li>
            <strong>Profitez du rythme rapide</strong> avec prudence : les
            mains de baccarat sont rapides. En live, comptez environ 40 à 60
            mains par heure. Cela signifie que même un faible avantage maison
            se cumule rapidement.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Les Variantes du Baccarat
        </h2>
        <p>
          Plusieurs variantes de baccarat sont disponibles en ligne, chacune
          avec des règles légèrement différentes :
        </p>
        <ul>
          <li>
            <strong>Punto Banco</strong> : la variante standard décrite dans ce
            guide. Toutes les décisions sont automatiques. C&apos;est la plus
            courante en ligne et dans les casinos occidentaux.
          </li>
          <li>
            <strong>Baccarat Chemin de Fer</strong> : les joueurs peuvent
            choisir de tirer ou non. Plus stratégique mais rarissime en ligne.
          </li>
          <li>
            <strong>Baccarat Banque</strong> : similaire au Chemin de Fer mais
            le rôle du banquier est fixe. Très rare en ligne.
          </li>
          <li>
            <strong>Mini-Baccarat</strong> : version accélérée avec des mises
            minimales plus basses. Même règles que le Punto Banco.
          </li>
          <li>
            <strong>Speed Baccarat</strong> : version ultra-rapide disponible en
            live casino. Les cartes sont retournées immédiatement sans suspense.
            Attention au rythme de mise élevé.
          </li>
          <li>
            <strong>Lightning Baccarat</strong> (Evolution Gaming) : ajoute des
            multiplicateurs aléatoires sur certains résultats. Le RTP de base
            est ajusté pour compenser les multiplicateurs.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10 mb-4">
          Baccarat en Ligne vs Casino Physique
        </h2>
        <p>
          Le baccarat en ligne, notamment en version live, offre plusieurs
          avantages par rapport au casino physique : mises minimales plus
          basses (souvent 1 euro contre 25 euros ou plus en casino), accès
          permanent sans file d&apos;attente, et possibilité de consulter les
          règles et probabilités pendant le jeu.
        </p>
        <p>
          Les tables de baccarat live sont proposées par les principaux
          fournisseurs comme Evolution Gaming, Pragmatic Play et Playtech, avec
          des croupiers professionnels en direct. Le <strong>RNG</strong>{" "}
          garantit l&apos;intégrité des versions non-live.
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
                Guide du Blackjack : un autre jeu de table à faible avantage maison
              </Link>
            </li>
            <li>
              <Link
                href="/jeux/roulette"
                className="text-gold hover:text-gold-light"
              >
                Guide de la Roulette : comparer les probabilités
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
                Guide du débutant au casino
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

      <FAQ items={faqItems} id="faq-baccarat" />
    </div>
  );
}
