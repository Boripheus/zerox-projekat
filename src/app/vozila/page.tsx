"use client";

import { motion } from "framer-motion";
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
import { title } from "process";

export default function OProjektu() {
  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto pt-[150px] pb-[70px] space-y-16 px-2 lg:px-4">
        <section className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-primary uppercase">
            Rent a car Beograd - GoldRent
          </h1>
          <h2 className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Najjeftiniji rent a car, iznajmljivanje automobila NAJPOVOLJNIJE
            cene. Veliki izbor vozila od ekonomičnih do lux modela.
          </h2>
        </section>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carData.map((car, i) => {
            return (
              <motion.div
                key={i}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <FeatureItem
                  title={car.title}
                  image={car.image}
                  price={car.price}
                  type={car.type}
                  shape={car.shape}
                  gearbox={car.gearbox}
                  passengers={car.passengers}
                  fuel={car.fuel}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
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
            className="mx-auto w-full aspect-[1/1] object-contain"
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
