import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHero, { getThemeStyle } from "@/components/BlogHero";
import FAQ from "@/components/FAQ";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleCTA from "@/components/ArticleCTA";

const theme = getThemeStyle("psychologie-joueur");

export const metadata: Metadata = {
  title: "Psychologie du Joueur : Biais et Discipline",
  description:
    "Découvrez les biais cognitifs qui influencent vos décisions au casino. Apprenez à jouer avec discipline et à reconnaître les pièges psychologiques.",
  alternates: {
    canonical: "https://comment-gagner-au-casino.com/strategies/psychologie",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que le biais du joueur (Gambler's Fallacy) ?",
    answer:
      "Le biais du joueur est la croyance erronée qu'un événement aléatoire passé influence les résultats futurs. Par exemple, penser que le rouge est « dû » après 10 noirs consécutifs à la roulette. En réalité, chaque tour est indépendant et les probabilités restent identiques.",
  },
  {
    question: "Comment savoir si je joue de manière émotionnelle ?",
    answer:
      "Les signes incluent : augmenter vos mises après une perte pour « se refaire », jouer plus longtemps que prévu, ressentir de l'irritation ou de la frustration intense, ignorer vos limites de budget, et avoir du mal à quitter la table même quand vous perdez.",
  },
  {
    question: "La discipline peut-elle me faire gagner au casino ?",
    answer:
      "La discipline ne change pas l'avantage mathématique du casino, mais elle vous permet de limiter vos pertes, de prolonger vos sessions de jeu et de profiter du divertissement sans mettre en danger votre situation financière. C'est la différence entre un joueur responsable et un joueur en difficulté.",
  },
  {
    question: "Comment gérer le tilt au casino ?",
    answer:
      "Le tilt est un état émotionnel qui pousse à prendre de mauvaises décisions. Pour le gérer : fixez des limites de pertes avant de jouer, prenez des pauses régulières, ne jouez jamais pour récupérer des pertes, et quittez immédiatement si vous ressentez de la frustration ou de la colère.",
  },
  {
    question: "Le near miss effect est-il dangereux ?",
    answer:
      "Oui, l'effet de quasi-victoire (near miss) est l'un des biais les plus dangereux. Il donne l'impression que vous étiez « proche de gagner » et vous incite à continuer de jouer. En réalité, un near miss est une perte comme une autre — les machines à sous sont spécifiquement conçues pour en provoquer.",
  },
  {
    question: "Quels sont les signes d'un problème de jeu ?",
    answer:
      "Les principaux signes sont : jouer avec de l'argent destiné aux factures, mentir sur le temps ou l'argent dépensé, emprunter pour jouer, négliger travail ou famille pour jouer, ressentir de l'anxiété quand on ne joue pas, et être incapable de s'arrêter malgré des pertes croissantes. Si vous reconnaissez ces signes, contactez Joueurs Info Service au 09 74 75 13 13.",
  },
  {
    question: "Comment fixer des limites efficaces ?",
    answer:
      "Fixez trois types de limites avant chaque session : une limite de perte (montant maximum que vous acceptez de perdre), une limite de temps (durée maximale de jeu) et une limite de gain (objectif atteint, vous vous arrêtez). Utilisez les outils de jeu responsable proposés par les casinos en ligne pour rendre ces limites contraignantes.",
  },
];

export default function PsychologiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleSchema
        title="Psychologie du Joueur : Biais et Discipline"
        description="Découvrez les biais cognitifs qui influencent vos décisions au casino. Apprenez à jouer avec discipline et à reconnaître les pièges psychologiques."
        url="/strategies/psychologie"
        datePublished="2026-03-29"
      />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Stratégies", href: "/strategies" },
          { label: "Psychologie du Joueur" },
        ]}
      />

      <BlogHero
        title="Psychologie du Joueur : Biais et Discipline"
        description="Comprendre les mécanismes psychologiques qui influencent vos décisions au casino est la première étape pour jouer de manière responsable et lucide."
        icon={theme.icon}
        gradient={theme.gradient}
      />

      <div className="prose">
        <h2>Introduction : Votre Pire Ennemi au Casino, c'est Vous</h2>
        <p>
          Le casino n'a pas besoin de tricher pour gagner. L'avantage mathématique suffit amplement. Mais ce qui accélère
          les pertes de la plupart des joueurs, ce n'est pas la malchance — ce sont les <strong>biais cognitifs</strong> et
          les <strong>réactions émotionnelles</strong> qui poussent à prendre de mauvaises décisions. Comprendre la
          psychologie du jeu est essentiel pour quiconque franchit les portes d'un casino, qu'il soit physique ou en ligne.
        </p>
        <p>
          Notre cerveau est câblé pour détecter des patterns, même là où il n'y en a pas. Il cherche du sens dans le
          hasard, construit des superstitions et rationalise les pertes. Ces mécanismes, parfaitement normaux dans la
          vie quotidienne, deviennent de véritables pièges dans un environnement de jeu. Les casinos le savent
          et conçoivent leur expérience pour exploiter ces failles naturelles de notre raisonnement.
        </p>

        <h2>Les Biais Cognitifs au Casino</h2>
        <p>
          Voici les principaux biais cognitifs qui affectent les joueurs de casino. Les reconnaître est la première
          étape pour s'en protéger.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card-bg">
              <th className="p-3 text-left text-gold border border-card-border">Biais</th>
              <th className="p-3 text-left text-gold border border-card-border">Description</th>
              <th className="p-3 text-left text-gold border border-card-border">Exemple au Casino</th>
              <th className="p-3 text-center text-gold border border-card-border">Dangerosité</th>
              <th className="p-3 text-left text-gold border border-card-border">Comment l'Éviter</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-surface">
              <td className="p-3 font-semibold border border-card-border">Biais du Joueur</td>
              <td className="p-3 border border-card-border">Croire que les résultats passés influencent les résultats futurs</td>
              <td className="p-3 border border-card-border">« 8 rouges d'affilée, le noir est dû ! »</td>
              <td className="p-3 text-center border border-card-border">🔴 Très élevée</td>
              <td className="p-3 border border-card-border">Rappeler que chaque tour est indépendant</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold border border-card-border">Illusion de Contrôle</td>
              <td className="p-3 border border-card-border">Croire que vos actions influencent un résultat aléatoire</td>
              <td className="p-3 border border-card-border">Souffler sur les dés, choisir « ses » numéros</td>
              <td className="p-3 text-center border border-card-border">🟠 Élevée</td>
              <td className="p-3 border border-card-border">Accepter que le hasard est incontrôlable</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 font-semibold border border-card-border">Biais de Confirmation</td>
              <td className="p-3 border border-card-border">Ne retenir que les événements qui confirment vos croyances</td>
              <td className="p-3 border border-card-border">Se souvenir des gains, oublier les pertes</td>
              <td className="p-3 text-center border border-card-border">🟠 Élevée</td>
              <td className="p-3 border border-card-border">Tenir un journal de jeu détaillé</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold border border-card-border">Near Miss Effect</td>
              <td className="p-3 border border-card-border">Interpréter une quasi-victoire comme un signe encourageant</td>
              <td className="p-3 border border-card-border">Deux cerises sur trois aux slots</td>
              <td className="p-3 text-center border border-card-border">🔴 Très élevée</td>
              <td className="p-3 border border-card-border">Un near miss = une perte, point final</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 font-semibold border border-card-border">Sunk Cost Fallacy</td>
              <td className="p-3 border border-card-border">Continuer à jouer pour « rentabiliser » les pertes passées</td>
              <td className="p-3 border border-card-border">« J'ai déjà perdu 200€, je ne peux pas partir maintenant »</td>
              <td className="p-3 text-center border border-card-border">🔴 Très élevée</td>
              <td className="p-3 border border-card-border">Fixer une limite de perte et la respecter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose">
        <h2>Jeu Émotionnel vs Jeu Discipliné</h2>
        <p>
          La différence entre un joueur qui s'amuse et un joueur qui se met en danger tient souvent à une seule chose :
          la <strong>discipline</strong>. Voici un comparatif entre ces deux approches du jeu.
        </p>
      </div>

      {/* Pros/Cons Section */}
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="card p-6 border-l-4 border-red-500">
          <h3 className="text-lg font-bold text-red-400 mb-4">Jeu Émotionnel</h3>
          <ul className="space-y-2 text-sm">
            <li>❌ Mises augmentées après les pertes (chasing losses)</li>
            <li>❌ Aucune limite de temps ou de budget</li>
            <li>❌ Décisions basées sur l'intuition et la superstition</li>
            <li>❌ Incapacité à s'arrêter après un gain important</li>
            <li>❌ Jouer pour « se refaire » après une mauvaise journée</li>
            <li>❌ Négligence des probabilités réelles</li>
            <li>❌ Irritabilité et frustration croissantes</li>
          </ul>
        </div>
        <div className="card p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-green-400 mb-4">Jeu Discipliné</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Budget fixe défini avant chaque session</li>
            <li>✅ Limites de temps respectées rigoureusement</li>
            <li>✅ Décisions basées sur les probabilités et le RTP</li>
            <li>✅ Capacité à quitter la table après un gain</li>
            <li>✅ Le jeu reste un divertissement, jamais une source de revenus</li>
            <li>✅ Connaissance des biais cognitifs et vigilance active</li>
            <li>✅ Pauses régulières pour garder l'esprit clair</li>
          </ul>
        </div>
      </div>

      <div className="prose">
        <h2>Reconnaître les Signes d'un Problème de Jeu</h2>
        <p>
          Le jeu problématique ne se développe pas du jour au lendemain. Il s'installe progressivement, souvent sans que
          le joueur en prenne conscience. Voici les signaux d'alerte à surveiller :
        </p>
        <ul>
          <li><strong>Financiers :</strong> jouer avec l'argent des factures, emprunter pour jouer, cacher ses dépenses de jeu à ses proches, vendre des biens pour financer le jeu.</li>
          <li><strong>Comportementaux :</strong> passer de plus en plus de temps à jouer, négliger le travail ou les obligations familiales, mentir sur ses activités, devenir irritable quand on ne peut pas jouer.</li>
          <li><strong>Émotionnels :</strong> jouer pour échapper au stress ou à la déprime, ressentir de la culpabilité après les sessions, être incapable de s'arrêter malgré la volonté de le faire.</li>
        </ul>
        <p>
          Si vous reconnaissez un ou plusieurs de ces signes chez vous ou chez un proche, n'hésitez pas à demander de l'aide.
          <strong> Joueurs Info Service</strong> est disponible au <strong>09 74 75 13 13</strong> (appel non surtaxé) et sur{" "}
          <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer">joueurs-info-service.fr</a>.
        </p>

        <h2>Conseils Pratiques pour la Gestion Émotionnelle</h2>
        <p>
          Gérer ses émotions au casino est une compétence qui se travaille. Voici des techniques concrètes pour garder
          le contrôle de vos décisions :
        </p>
        <ol>
          <li><strong>Fixez trois limites avant de jouer :</strong> une limite de perte, une limite de gain et une limite de temps. Inscrivez-les et respectez-les sans exception.</li>
          <li><strong>Utilisez la règle des 10 minutes :</strong> avant toute décision impulsive (augmenter la mise, continuer après la limite), attendez 10 minutes. Si l'envie persiste, quittez le casino.</li>
          <li><strong>Tenez un journal de jeu :</strong> notez chaque session (durée, mise, résultat, état émotionnel). Les chiffres ne mentent pas et vous aideront à identifier vos comportements à risque.</li>
          <li><strong>Ne jouez jamais sous l'influence :</strong> l'alcool et la fatigue altèrent votre jugement et réduisent votre discipline. Les casinos offrent des boissons gratuites pour une raison précise.</li>
          <li><strong>Considérez votre mise comme une dépense :</strong> comme pour un spectacle ou un restaurant, l'argent est dépensé pour du divertissement. Si vous gagnez, c'est un bonus — pas un dû.</li>
        </ol>

        <h2>Savoir Quand S'Arrêter</h2>
        <p>
          La capacité à s'arrêter est peut-être la compétence la plus importante pour un joueur de casino.
          Les casinos sont conçus pour vous garder en jeu : absence d'horloges, lumières constantes, récompenses
          intermittentes. Votre meilleure défense est la <strong>préparation</strong>.
        </p>
        <p>
          Avant chaque session, définissez un point de sortie clair. Que ce soit après avoir perdu votre budget
          prévu, atteint un certain gain ou passé un temps défini, quittez sans hésitation. Rappelez-vous :
          le casino sera toujours là demain. Votre argent et votre bien-être, eux, ne sont pas garantis.
        </p>

        <h2>Pour Aller Plus Loin</h2>
        <p>
          Approfondissez votre compréhension de la psychologie du jeu avec nos articles détaillés :
        </p>
        <ul>
          <li><Link href="/blog/psychologie-joueur/pourquoi-on-perd">Pourquoi on perd au casino : les vraies raisons</Link></li>
          <li><Link href="/blog/psychologie-joueur/biais-cognitifs">Les biais cognitifs en détail</Link></li>
          <li><Link href="/blog/psychologie-joueur/gestion-emotionnelle">Guide complet de gestion émotionnelle</Link></li>
          <li><Link href="/strategies/guide-debutant">Guide du débutant au casino</Link></li>
        </ul>
      </div>

      <FAQ items={faqItems} id="faq-psychologie" />

      <ArticleCTA />
    </div>
  );
}
