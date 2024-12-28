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
import { IoManSharp } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { carData } from "@/constants/index";
import { Button } from "@/components/ui/button";

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
          className="text-3xl font-bold text-primary uppercase"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Rent a car Beograd - GoldRent
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Najjeftiniji rent a car, iznajmljivanje automobila NAJPOVOLJNIJE cene.
          Veliki izbor vozila od ekonomičnih do lux modela.
        </motion.p>
      </section>

      <motion.section
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
          {carData.map((car, i) => {
            return (
              <FeatureItem
                key={i}
                title={car.title}
                image={car.image}
                price={car.price}
                type={car.type}
                shape={car.shape}
                gearbox={car.gearbox}
                passengers={car.passengers}
                fuel={car.fuel}
              />
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
}

function FeatureItem({
  title,
  image,
  price,
  type,
  shape,
  gearbox,
  passengers,
  fuel,
}: {
  title: string;
  image: string;
  price: string;
  type: string;
  shape: string;
  gearbox: string;
  passengers: string;
  fuel: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <span className="text-center md:text-nowrap">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={image}
            alt={image}
            className="mx-auto w-full h-[230px] object-contain"
          />

          <CardDescription>
            <div className="flex justify-between py-2">
              <p>{type}</p>
              <p>{shape}</p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-3 items-center">
                <GiGearStickPattern />
                {gearbox}
              </p>
              <p className="flex gap-3 items-center">
                <IoManSharp />
                {passengers}
              </p>
              <p className="flex gap-3 items-center">
                <BsFuelPumpFill />
                {fuel}
              </p>
            </div>
          </CardDescription>
          <p className="py-5 font-bold">{price}</p>

          <a href="tel:+38163267202">
            <Button className="w-full">Pozovite odmah +38163267202</Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
