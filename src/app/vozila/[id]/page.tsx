"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { carData, CarData } from "@/constants/index";
import { IoManSharp } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VehiclePage() {
  const params = useParams();
  const id = typeof params.id === "string" ? parseInt(params.id) : 0;
  const car = carData.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  const relatedVehicles = carData
    .filter((c) => c.type === car.type && c.id !== car.id)
    .slice(0, 3);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [car.image, ...Array(3).fill("/placeholder.svg")]; // Simulating multiple images

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8 space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl text-primary">
            {car.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="relative h-64 sm:h-80 md:h-96 mb-4">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${car.title} - Slika ${currentImageIndex + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  aria-label="Prethodna slika"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  aria-label="Sledeća slika"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Prikaži sliku ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-3xl font-bold text-primary">{car.price}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <GiGearStickPattern size={20} /> Menjač: {car.gearbox}
                </div>
                <div className="flex items-center gap-2">
                  <IoManSharp size={20} /> Broj putnika: {car.passengers}
                </div>
                <div className="flex items-center gap-2">
                  <BsFuelPumpFill size={20} /> Gorivo: {car.fuel}
                </div>
                <div>Tip: {car.type}</div>
                <div>Oblik: {car.shape}</div>
              </div>
              <Tabs defaultValue="opis" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="opis">Opis</TabsTrigger>
                  <TabsTrigger value="karakteristike">
                    Karakteristike
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="opis" className="mt-4">
                  <p className="text-muted-foreground">{car.description}</p>
                </TabsContent>
                <TabsContent value="karakteristike" className="mt-4">
                  <ul className="list-disc list-inside space-y-2">
                    {car.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
              <div className="pt-4">
                <a href="tel:+38163267202">
                  <Button size="lg" className="w-full">
                    Rezervišite odmah: +38163267202
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {relatedVehicles.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Slična vozila</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedVehicles.map((relatedCar) => (
              <VehicleCard key={relatedCar.id} car={relatedCar} />
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <Link href="/vozila">
          <Button variant="outline">Nazad na sva vozila</Button>
        </Link>
      </div>
    </motion.div>
  );
}

function VehicleCard({ car }: { car: CarData }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg text-primary">{car.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="relative h-48 mb-4">
          <Image
            src={car.image}
            alt={car.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <p className="font-semibold text-lg mb-2">{car.price}</p>
            <p className="text-muted-foreground">{car.type}</p>
          </div>
          <Link href={`/vozila/${car.id}`} className="mt-4">
            <Button className="w-full">Više detalja</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
