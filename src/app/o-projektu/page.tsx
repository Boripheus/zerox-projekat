"use client";

import { motion } from "framer-motion";
import { Book, Code2, Palette, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OProjektu() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center space-y-4">
        <motion.h1
          className="text-3xl font-bold text-primary"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          O ZEROX Starter Šablonu
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Ovaj starter šablon je dizajniran da vam pomogne da brzo započnete
          svoje Next.js 15 projekte. Uključuje najnovije tehnologije i alate za
          moderni web razvoj.
        </motion.p>
      </section>

      <motion.section
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-primary">Karakteristike:</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureItem
            icon={<Code2 className="w-6 h-6 text-primary" />}
            title="Next.js 15 sa App Router-om"
            description="Iskoristite najnovije funkcionalnosti Next.js-a za brze i optimizovane aplikacije."
          />
          <FeatureItem
            icon={<Palette className="w-6 h-6 text-primary" />}
            title="Tailwind CSS i shadcn/ui"
            description="Brzo kreirajte prilagođene dizajne sa unapred stilizovanim komponentama."
          />
          <FeatureItem
            icon={<Book className="w-6 h-6 text-primary" />}
            title="TypeScript podrška"
            description="Pišite sigurniji i čitljiviji kod uz TypeScript integraciju."
          />
          <FeatureItem
            icon={<Layers className="w-6 h-6 text-primary" />}
            title="Framer Motion animacije"
            description="Dodajte glatke i interaktivne animacije vašem korisničkom interfejsu."
          />
        </div>
      </motion.section>

      <motion.section
        className="bg-secondary p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Kako početi:
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-secondary-foreground">
          <li>Klonirajte repozitorijum</li>
          <li>
            Instalirajte zavisnosti:{" "}
            <code className="bg-background px-2 py-1 rounded text-foreground">
              npm install / bun install
            </code>
          </li>
          <li>
            Pokrenite razvojni server:{" "}
            <code className="bg-background px-2 py-1 rounded text-foreground">
              npm run dev / bun run dev
            </code>
          </li>
          <li>
            Otvorite{" "}
            <code className="bg-background px-2 py-1 rounded text-foreground">
              http://localhost:3000
            </code>{" "}
            u vašem pregledaču
          </li>
          <li>
            Počnite sa uređivanjem{" "}
            <code className="bg-background px-2 py-1 rounded text-foreground">
              app/page.tsx
            </code>
          </li>
        </ol>
      </motion.section>
    </motion.div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            {icon}
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
