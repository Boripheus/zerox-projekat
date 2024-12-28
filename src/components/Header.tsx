"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <motion.header
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-10 border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <img
                src="/rent-a-car-beograd-GOLD.png"
                alt="/rent-a-car-beograd-GOLD-logo"
                className="w-[110px]"
              />
            </Link>
          </motion.div>
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors uppercase"
                >
                  Rent a car Beograd
                </Link>
              </li>
              <li>
                <Link
                  href="/o-projektu"
                  className="text-foreground hover:text-primary transition-colors uppercase"
                >
                  Naša vozila
                </Link>
              </li>
            </ul>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
