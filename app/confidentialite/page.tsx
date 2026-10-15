import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Agios",
};

const h2 =
  "mt-8 font-[family-name:var(--font-fraunces)] text-xl font-bold";

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10 leading-relaxed">
      <a href="/" className="text-sm underline">
        ← Retour à l’accueil
      </a>
      <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-3xl font-bold">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm opacity-70">Dernière mise à jour : octobre 2026</p>

      <h2 className={h2}>Qui est responsable de tes données</h2>
      <p className="mt-2">
        Thiméo Lezian, entrepreneur individuel (Agios), 7 place des Platanes,
        32400 Riscle — tlezian@gmail.com.
      </p>

      <h2 className={h2}>Les données que nous recevons</h2>
      <ul className="mt-2 list-disc pl-5">
        <li>Ton adresse e-mail et, le cas échéant, ton nom, lors du paiement.</li>
        <li>
          Les relevés bancaires que tu nous envoies pour l’analyse, et les
          informations qu’ils contiennent.
        </li>
        <li>
          Les échanges par e-mail avec nous (questions, demandes de
          remboursement).
        </li>
      </ul>
      <p className="mt-2">
        Nous ne recevons jamais ton numéro de carte bancaire : il est saisi
        directement chez Stripe.
      </p>

      <h2 className={h2}>Pourquoi nous les utilisons</h2>
      <ul className="mt-2 list-disc pl-5">
        <li>
          Réaliser le service que tu as acheté (analyse et courrier) — base
          légale : l’exécution du contrat.
        </li>
        <li>
          Respecter nos obligations comptables et fiscales — base légale :
          l’obligation légale.
        </li>
        <li>
          Répondre à tes demandes — base légale : notre intérêt légitime à
          assurer le suivi client.
        </li>
      </ul>
      <p className="mt-2">
        Nous ne vendons pas tes données et nous ne les utilisons pas à des fins de
        publicité.
      </p>

      <h2 className={h2}>Combien de temps nous les gardons</h2>
      <ul className="mt-2 list-disc pl-5">
        <li>
          Les relevés bancaires que tu envoies : supprimés au plus tard 30 jours
          après la livraison du courrier.
        </li>
        <li>
          Les justificatifs de paiement et la facturation : conservés pendant la
          durée légale (10 ans).
        </li>
        <li>Les e-mails d’échange : 3 ans maximum après le dernier contact.</li>
      </ul>

      <h2 className={h2}>Qui peut y accéder</h2>
      <p className="mt-2">
        Seuls l’éditeur et les prestataires techniques strictement nécessaires :
        Stripe (paiement), Vercel (hébergement du site) et Google (messagerie).
        Certains de ces prestataires sont situés aux États-Unis ; les transferts
        s’appuient sur les mécanismes prévus par le RGPD (clauses contractuelles
        types ou cadre de protection des données UE–États-Unis).
      </p>

      <h2 className={h2}>Cookies et mesure d’audience</h2>
      <p className="mt-2">
        Ce site n’utilise aucun cookie publicitaire. Si une mesure d’audience
        anonyme est ajoutée, elle fonctionnera sans cookie de suivi individuel.
      </p>

      <h2 className={h2}>Tes droits</h2>
      <p className="mt-2">
        Tu peux demander à accéder à tes données, à les corriger, à les effacer, à
        en limiter l’usage, à t’y opposer ou à les récupérer, en écrivant à
        tlezian@gmail.com. Nous répondons sous un mois. Tu peux aussi déposer une
        réclamation auprès de la CNIL (cnil.fr).
      </p>

      <h2 className={h2}>Sécurité</h2>
      <p className="mt-2">
        Tes documents ne sont consultés que pour réaliser ton analyse. Nous les
        gardons uniquement le temps nécessaire, puis nous les supprimons.
      </p>
    </main>
  );
}
