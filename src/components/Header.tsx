"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/rent-a-car-beograd-GOLD.png"
                alt="GoldRent logo"
                width={110}
                height={40}
              />
              <span className="font-bold text-xl hidden md:inline">
                GoldRent
              </span>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <ThemeToggle setTheme={setTheme} theme={theme} />
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background"
        >
          <div className="container mx-auto px-4 py-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
            <div className="mt-4">
              <ThemeToggle setTheme={setTheme} theme={theme} />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLinks({
  mobile,
  setIsMenuOpen,
}: {
  mobile?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
}) {
  const linkClass = `text-foreground hover:text-primary transition-colors uppercase ${
    mobile ? "block py-2" : ""
  }`;
  const handleClick = () => {
    if (mobile && setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <ul className={mobile ? "flex flex-col" : "flex space-x-6"}>
      <li>
        <Link href="/" className={linkClass} onClick={handleClick}>
          Početna
        </Link>
      </li>
      <li>
        <Link href="/vozila" className={linkClass} onClick={handleClick}>
          Naša vozila
        </Link>
      </li>
      <li>
        <Link href="/o-nama" className={linkClass} onClick={handleClick}>
          O nama
        </Link>
      </li>
      <li>
        <Link href="/kontakt" className={linkClass} onClick={handleClick}>
          Kontakt
        </Link>
      </li>
    </ul>
  );
}

function ThemeToggle({
  setTheme,
  theme,
}: {
  setTheme: (theme: string) => void;
  theme: string | undefined;
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
