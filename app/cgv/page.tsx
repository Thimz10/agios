import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Agios",
};

const h2 =
  "mt-8 font-[family-name:var(--font-fraunces)] text-xl font-bold";

export default function CGV() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10 leading-relaxed">
      <a href="/" className="text-sm underline">
        ← Retour à l’accueil
      </a>
      <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-3xl font-bold">
        Conditions générales de vente
      </h1>
      <p className="mt-2 text-sm opacity-70">Dernière mise à jour : octobre 2026</p>

      <h2 className={h2}>1. Vendeur</h2>
      <p className="mt-2">
        Thiméo Lezian, entrepreneur individuel, nom commercial « Agios » — SIRET
        131 127 938 00010 — 7 place des Platanes, 32400 Riscle — tlezian@gmail.com.
        TVA non applicable, article 293 B du CGI.
      </p>

      <h2 className={h2}>2. Service</h2>
      <p className="mt-2">
        Agios analyse les relevés bancaires que le client lui transmet, repère les
        lignes de frais, les compare aux plafonds légaux applicables et rédige un
        courrier de réclamation prêt à envoyer à l’agence bancaire du client.
      </p>

      <h2 className={h2}>3. Nature du service et limites</h2>
      <p className="mt-2">
        Agios n’est ni un cabinet juridique ni un établissement bancaire. Le
        courrier fourni est un modèle adapté à la situation du client : il ne
        constitue pas un conseil juridique. Agios s’engage à fournir son meilleur
        travail, mais ne peut pas garantir qu’une banque accepte de rembourser tout
        ou partie des frais : la décision appartient à la banque.
      </p>

      <h2 className={h2}>4. Prix et paiement</h2>
      <p className="mt-2">
        Le prix est de 19 € par analyse, payable en une fois, sans abonnement, par
        carte bancaire via Stripe. Le prix est net de TVA (TVA non applicable,
        article 293 B du CGI).
      </p>

      <h2 className={h2}>5. Exécution et livraison</h2>
      <p className="mt-2">
        Le service est livré par voie électronique, à l’adresse e-mail indiquée lors
        du paiement, dans un délai maximum de 5 jours ouvrés après réception des
        relevés du client.
      </p>

      <h2 className={h2}>6. Droit de rétractation</h2>
      <p className="mt-2">
        Le client consommateur dispose d’un délai de 14 jours à compter de la
        commande pour se rétracter, sans avoir à se justifier, en écrivant à
        tlezian@gmail.com. S’il demande expressément que le service commence
        avant la fin de ce délai, il reconnaît qu’il perd son droit de rétractation
        une fois le service pleinement exécuté.
      </p>

      <h2 className={h2}>7. Remboursement si aucun frais n’est détecté</h2>
      <p className="mt-2">
        Si l’analyse ne repère aucun frais pouvant être contesté, le client est
        intégralement remboursé sur simple demande à tlezian@gmail.com.
      </p>

      <h2 className={h2}>8. Obligations du client</h2>
      <p className="mt-2">
        Le client transmet des relevés qui le concernent, complets et lisibles, et
        garantit l’exactitude des informations fournies. Il reste responsable de
        l’envoi du courrier à sa banque.
      </p>

      <h2 className={h2}>9. Données personnelles</h2>
      <p className="mt-2">
        Les données sont traitées conformément à la{" "}
        <a href="/confidentialite" className="underline">
          politique de confidentialité
        </a>
        .
      </p>

      <h2 className={h2}>10. Médiation de la consommation</h2>
      <p className="mt-2">
        En cas de litige, le client peut, après une réclamation écrite restée sans
        réponse satisfaisante, recourir gratuitement au médiateur de la
        consommation : le Centre de la Médiation de la Consommation de
        Conciliateurs de Justice (CM2C), 49 rue de Ponthieu, 75008 Paris —{" "}
        <a
          href="https://www.cm2c.net"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.cm2c.net
        </a>
        .
      </p>

      <h2 className={h2}>11. Droit applicable</h2>
      <p className="mt-2">
        Les présentes conditions sont soumises au droit français. Le client
        consommateur peut saisir la juridiction du lieu où il demeure.
      </p>
    </main>
  );
}
