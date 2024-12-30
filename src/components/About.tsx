"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { firstPagedata } from "@/constants/index";
import { Button } from "@/components/ui/button";
import { title } from "process";

export default function Vozila() {
  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto space-y-12 px-4 py-14">
        <div className="space-y-4">
          <p className="text-xl mx-auto">
            Rent a car bez depozita - Neograničena kilometraža - Full kasko
            osiguranja - Dostava vozila na adresu - Isporuka na aerodromu - Bez
            ograničenja na pređenu kilometražu! - Zeleni karton, GPS i dečje
            sedište BESPLATNO
          </p>

          <p className="text-xl mx-auto">
            Rent a car Beograd GoldRent iznajmljivanje vozila vrši na bilo kojoj
            adresi u Beogradu.Bez obzira dali se nalazite na
            Vračaru,Dorćolu,Zemunu ili bilo gde, potrebno je samo da nam se
            javite i rezervišete Vaše vozilo koje ćemo Vam dovesti na određenu
            adresu. GoldRent u svakom trenutku može da Vam omogući da Vas
            iznajmljeni automobil čeka na aerodromu Nikola Tesla u Beogradu.
          </p>
          <p className="text-xl mx-auto">
            Potrebno Vam je vozilo na duži vremenski period, u tom slučaju Rent
            a car Beograd Gold može da Vam ponudi specijalne uslove i cene kod
            iznajlmljivanja auta.
          </p>
          <p className="text-xl mx-auto">
            Gold Rent a car Beograd nudi široku ponudu iznajmljivanja
            automobila. Svaki automobil je redovno servisiran i održavan i dobro
            pripremljen za letnju i zimsku vožnju. Sva vozila su KASKO osigurana
            sa neograničenom kilometražom.Kada iznamjite automobil kod nas, mi
            Vam dovozimo vozilo na Vašu adresu.
          </p>
        </div>

        {firstPagedata.map((data, i) => {
          return (
            <FeatureCard
              key={i}
              i={i}
              title={data.title}
              image={data.image}
              text={data.text}
            />
          );
        })}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  image,
  text,
  i,
}: {
  i: number;
  title: string;
  image: string;
  text: string[];
}) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-none">
        <CardHeader className="">
          <CardTitle className="text-lg text-center lg:text-3xl flex items-center lg:pt-20 lg:pb-10 text-primary mx-auto uppercase">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent
          className={`flex lg:px-16 ${
            i % 2 !== 0
              ? "flex-col gap-4 lg:gap-0 lg:flex-row-reverse "
              : "flex-col lg:flex-row "
          } items-center justify-between`}
        >
          <img
            src={image}
            alt={image}
            className="w-full object-contain aspect-[4/3] lg:w-[50%]"
          />

          <CardDescription className="flex flex-col gap-2 lg:gap-3 text-muted-foreground lg:text-2xl lg:w-[40%]">
            {" "}
            {text.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <a href="tel:+38163267202">
              <Button className="w-full mt-4 md:mt-12">
                Pozovite odmah +38163267202
              </Button>
            </a>
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
