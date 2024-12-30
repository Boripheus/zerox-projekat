"use client";

import React from "react";
import Image from "next/image";
import Hero1 from "../../public/RentacarBeogradAudiA6Automatik.png";
import Link from "../../node_modules/next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex justify-center">
      <div className="absolute left-0 top-0 w-full h-screen bg-black/50" />
      <Image
        src={Hero1}
        alt="rent a car gold beograd"
        className="w-full top-0 left-0 h-screen object-contain "
      />

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="absolute flex flex-col items-center gap-20 z-[1] text-center px-4 bottom-[7rem] md:bottom-[15%] "
      >
        <h1 className="text-primary text-[2rem] md:text-[3.3rem] font-bold mb-28 ">
          Rent a car Beograd - GoldRent - Bez depozita
        </h1>
        <h2 className=" text-gray-100 font-medium text-base md:text-[1.5rem] md:leading-[1.4] max-w-[800px]">
          {" "}
          Najjeftiniji rent a car, iznajmljivanje automobila NAJPOVOLJNIJE cene.
          Veliki izbor vozila od ekonomičnih do lux modela.
        </h2>
        <Link href={"/vozila"}>
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" bg-primary font-bold text-foreground px-4 py-2 md:px-14 md:py-3 rounded-md max-w-[300px] w-full"
          >
            Pogledajte našu flotu
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
