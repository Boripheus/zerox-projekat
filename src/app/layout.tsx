import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from '@/components/Header';

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Vinarija Davidović",
  description: "Vinarija Davidović je prestižna vinarija koja se ponosi tradicijom i strašću prema proizvodnji vrhunskih vina. Smeštena u srcu Srbije, na prelepim vinogradima, naša vinarija nudi širok asortiman kvalitetnih vina, od autohtonih sorti do internacionalnih.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='h-full'>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
