"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-12">
      <motion.section
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-primary">
          Dobrodošli u ZEROX Starter Šablon
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Profesionalni početni šablon za vaše web projekte. Brzo započnite
          razvoj uz moderne tehnologije i čistu strukturu.
        </p>
      </motion.section>

      <motion.section
        className="grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        <FeatureCard
          icon={<Zap className="w-10 h-10 text-primary" />}
          title="Brz početak"
          description="Započnite razvoj odmah sa predkonfigurisanim okruženjem i osnovnom strukturom projekta."
        />
        <FeatureCard
          icon={<Layers className="w-10 h-10 text-primary" />}
          title="Moderna arhitektura"
          description="Izgrađeno sa Next.js 15 App Router-om, React-om i TypeScript-om za robusne i skalabilne aplikacije."
        />
        <FeatureCard
          icon={<Code className="w-10 h-10 text-primary" />}
          title="Prilagodljiv dizajn"
          description="Koristite Tailwind CSS i shadcn komponente za brzo i fleksibilno stilizovanje vaših komponenti i stranica."
        />
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button asChild>
          <Link href="/o-projektu" className="inline-flex items-center">
            Saznajte više
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.section>
    </div>
  );
}

function FeatureCard({
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
