import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Agios",
};

const h2 =
  "mt-8 font-[family-name:var(--font-fraunces)] text-xl font-bold";

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10 leading-relaxed">
      <a href="/" className="text-sm underline">
        ← Retour à l’accueil
      </a>
      <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-3xl font-bold">
        Mentions légales
      </h1>
      <p className="mt-2 text-sm opacity-70">Dernière mise à jour : octobre 2026</p>

      <h2 className={h2}>Éditeur du site</h2>
      <p className="mt-2">
        Le site Agios est édité par <strong>Thiméo Lezian</strong>, entrepreneur
        individuel (micro-entrepreneur), sous le nom commercial « Agios ».
      </p>
      <ul className="mt-2 list-disc pl-5">
        <li>SIRET : 131 127 938 00010</li>
        <li>Adresse : 7 place des Platanes, 32400 Riscle, France</li>
        <li>E-mail : tlezian@gmail.com</li>
        <li>Directeur de la publication : Thiméo Lezian</li>
        <li>TVA non applicable, article 293 B du CGI</li>
      </ul>

      <h2 className={h2}>Hébergeur</h2>
      <p className="mt-2">
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, États-Unis — vercel.com.
      </p>

      <h2 className={h2}>Paiement</h2>
      <p className="mt-2">
        Les paiements sont traités par Stripe, qui conserve les données de carte
        bancaire. Agios n’y a jamais accès.
      </p>

      <h2 className={h2}>Nature du service</h2>
      <p className="mt-2">
        Agios est un service d’analyse de relevés et de rédaction de courriers
        types. Ce n’est ni un cabinet juridique ni un établissement bancaire, et
        le service ne constitue pas un conseil juridique.
      </p>

      <h2 className={h2}>Propriété intellectuelle</h2>
      <p className="mt-2">
        Les textes, le design et le code de ce site sont la propriété de
        l’éditeur. Toute reproduction sans autorisation est interdite.
      </p>

      <h2 className={h2}>Données personnelles</h2>
      <p className="mt-2">
        Le traitement de tes données est détaillé dans la{" "}
        <a href="/confidentialite" className="underline">
          politique de confidentialité
        </a>
        .
      </p>
    </main>
  );
}
