import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agios — Récupère les frais bancaires prélevés à tort",
  description:
    "Repère les frais bancaires abusifs sur ton relevé et obtiens un courrier de réclamation prêt à envoyer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
