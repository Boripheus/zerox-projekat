"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-secondary py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">O nama</h3>
            <p className="text-muted-foreground">
              GoldRent je vodeća rent-a-car agencija u Beogradu, posvećena
              pružanju vrhunske usluge i kvalitetnih vozila našim klijentima.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/vozila"
                  className="text-muted-foreground hover:text-primary"
                >
                  Naša vozila
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nama"
                  className="text-muted-foreground hover:text-primary"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-muted-foreground hover:text-primary"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/uslovi-koriscenja"
                  className="text-muted-foreground hover:text-primary"
                >
                  Uslovi korišćenja
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-muted-foreground">
              Adresa: Glavna ulica 123, 11000 Beograd
            </p>
            <p className="text-muted-foreground">Telefon: +381 63 267 202</p>
            <p className="text-muted-foreground">Email: info@goldrent.rs</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GoldRent. Sva prava zadržana.</p>
        </div>
      </div>
    </motion.footer>
  );
}
