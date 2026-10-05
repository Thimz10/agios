const LIEN_PAIEMENT = "#offre";
const titre = "font-[family-name:var(--font-fraunces)]";

function Bouton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={LIEN_PAIEMENT}
      className="flex min-h-14 w-full items-center justify-center rounded-full bg-[#12372A] px-6 text-lg font-bold text-[#F6F1E7] active:scale-[0.98] md:w-auto md:px-10"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-xl px-5 pb-28 pt-10 md:pb-16 md:pt-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#E4572E]">
          Agios
        </p>
        <h1 className={`${titre} mt-3 text-4xl font-bold leading-tight md:text-5xl`}>
          Récupère les frais bancaires prélevés à tort.
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          Dépose ton relevé. On repère chaque ligne de frais, on la compare aux
          plafonds légaux, et tu obtiens un courrier prêt à envoyer à ton agence.
        </p>
        <div className="mt-6">
          <Bouton>Récupérer mes frais — 19 €</Bouton>
          <p className="mt-2 text-center text-sm opacity-70 md:text-left">
            Paiement unique. Pas d’abonnement.
          </p>
        </div>

        <section className="mt-12">
          <div className="rotate-[-1deg] rounded-md border border-dashed border-[#12372A]/40 bg-white/60 p-5 font-mono text-sm">
            <p className="mb-3 text-xs uppercase tracking-widest opacity-60">
              Exemple fictif de relevé
            </p>
            <div className="flex justify-between py-1">
              <span>Commission d’intervention</span>
              <span>8,00 €</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Commission d’intervention</span>
              <span>8,00 €</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Commission d’intervention</span>
              <span>8,00 €</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Option « Alerte solde »</span>
              <span>2,10 €</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-dashed border-[#12372A]/40 pt-3 font-bold">
              <span>Total du mois</span>
              <span className="text-[#E4572E]">26,10 €</span>
            </div>
          </div>
          <h2 className={`${titre} mt-8 text-2xl font-bold leading-snug`}>
            Chaque ligne paraît petite. Sur douze mois, elles s’additionnent.
          </h2>
          <p className="mt-3 leading-relaxed">
            La loi plafonne les commissions d’intervention à{" "}
            <strong>8 € par opération</strong> et{" "}
            <strong>80 € par mois</strong> (4 € et 20 € pour les clients en
            situation de fragilité financière). Beaucoup de frais ne sont
            jamais contestés.
          </p>
        </section>

        <section className="mt-12 space-y-6">
          {[
            ["Chaque ligne repérée", "Commissions, rejets, options inutiles : tout est listé, mois par mois."],
            ["Comparé aux plafonds légaux", "Tu vois d’un coup d’œil ce qui dépasse et le total sur douze mois."],
            ["Courrier prêt à envoyer", "Adressé à la bonne agence. Tu suis ensuite les remboursements obtenus."],
          ].map(([t, d], i) => (
            <div key={t} className="flex gap-4">
              <span className={`${titre} text-3xl font-bold text-[#E4572E]`}>
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-1 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </section>

        <section
          id="offre"
          className="mt-12 rounded-2xl border-2 border-[#12372A] p-6 text-center"
        >
          <span className="inline-block rotate-[-6deg] border-2 border-[#E4572E] px-3 py-1 text-sm font-bold tracking-widest text-[#E4572E]">
            REMBOURSÉ ?
          </span>
          <p className={`${titre} mt-4 text-5xl font-bold`}>19 €</p>
          <p className="mt-1 opacity-70">une seule fois</p>
          <div className="mt-5">
            <Bouton>Payer 19 €</Bouton>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-xl px-5 pb-28 text-sm opacity-70 md:pb-10">
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="/mentions-legales" className="underline">Mentions légales</a>
          <a href="/cgv" className="underline">CGV</a>
          <a href="/confidentialite" className="underline">Confidentialité</a>
        </nav>
        <p className="mt-3">© Agios</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 border-t border-[#12372A]/20 bg-[#F6F1E7]/95 p-3 md:hidden">
        <Bouton>Récupérer mes frais — 19 €</Bouton>
      </div>
    </>
  );
}
