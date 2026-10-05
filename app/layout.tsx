import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const titre = "Agios — Récupère les frais bancaires prélevés à tort";
const description =
  "Repère les frais abusifs sur ton relevé et reçois un courrier de réclamation prêt à envoyer à ta banque. 19 €, une seule fois.";

export const metadata: Metadata = {
  metadataBase: new URL("https://agios-murex.vercel.app"),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    type: "website",
    locale: "fr_FR",
    siteName: "Agios",
  },
  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${dmSans.variable} bg-[#F6F1E7] text-[#12372A] antialiased`}
        style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
