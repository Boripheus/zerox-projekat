import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Domino Enterijer - Jer mi krojimo i rezemo vase snove BAS PO MERI",
  description: "Od ideje do realizacije. Kompletno opremanje stambenih i poslovnih enterijera nameštajem po meri. Kuhinje, plakari, TV komode, projektovanje enterijera i 3D dizajn."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={raleway.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
