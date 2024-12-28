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

export default function Home() {
  return (
    <div className="space-y-12 relative ">
      <div
        className=" absolute w-full h-screen bg-cover bg-center "
        style={{
          backgroundImage: "url('/RentacarBeogradAudiA6Automatik.png')",
          zIndex: -1,
        }}
      >
        {" "}
      </div>
      <motion.section
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl lg:text-4xl font-bold text-primary ">
          Rent a car Beograd - GoldRent - Bez depozita
        </h1>
        <p className="text-lg lg:text-3xl  text-white font-bold  mx-auto pt-96 pb-48 lg:pt-72 lg:pb-64 w-[80%]">
          Najjeftiniji rent a car, iznajmljivanje automobila NAJPOVOLJNIJE cene.
          Veliki izbor vozila od ekonomičnih do lux modela.
        </p>
      </motion.section>

      <motion.section
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl text-muted-foreground  mx-auto">
          Rent a car bez depozita - Neograničena kilometraža - Full kasko
          osiguranja - Dostava vozila na adresu - Isporuka na aerodromu - Bez
          ograničenja na pređenu kilometražu! - Zeleni karton, GPS i dečje
          sedište BESPLATNO
        </p>

        <p className="text-xl text-muted-foreground mx-auto">
          Rent a car Beograd GoldRent iznajmljivanje vozila vrši na bilo kojoj
          adresi u Beogradu.Bez obzira dali se nalazite na
          Vračaru,Dorćolu,Zemunu ili bilo gde, potrebno je samo da nam se javite
          i rezervišete Vaše vozilo koje ćemo Vam dovesti na određenu adresu.
          GoldRent u svakom trenutku može da Vam omogući da Vas iznajmljeni
          automobil čeka na aerodromu Nikola Tesla u Beogradu.
        </p>
        <p className="text-xl text-muted-foreground mx-auto">
          Potrebno Vam je vozilo na duži vremenski period, u tom slučaju Rent a
          car Beograd Gold može da Vam ponudi specijalne uslove i cene kod
          iznajlmljivanja auta.
        </p>
        <p className="text-xl text-muted-foreground mx-auto">
          Gold Rent a car Beograd nudi široku ponudu iznajmljivanja automobila.
          Svaki automobil je redovno servisiran i održavan i dobro pripremljen
          za letnju i zimsku vožnju. Sva vozila su KASKO osigurana sa
          neograničenom kilometražom.Kada iznamjite automobil kod nas, mi Vam
          dovozimo vozilo na Vašu adresu.
        </p>
      </motion.section>

      <motion.section
        className=" flex flex-col gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
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
      </motion.section>
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
      <Card>
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
          <img src={image} alt={image} className="w-full lg:w-[50%]" />

          <CardDescription className="flex flex-col gap-2 lg:gap-3 text-muted-foreground lg:text-2xl lg:w-[40%]">
            {" "}
            {text.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <a href="tel:+38163267202">
              <Button className="w-full mt-6">
                Pozovite odmah +38163267202
              </Button>
            </a>
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
