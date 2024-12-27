"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-secondary py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary-foreground">
          &copy; {new Date().getFullYear()} ZEROX Starter. Sva prava zadržana.
        </p>
      </div>
    </motion.footer>
  );
}
