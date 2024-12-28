"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Car,
  CreditCard,
  MapPin,
  ChevronRight,
  Clock,
  ThumbsUp,
  Shield,
  Star,
} from "lucide-react";
import { carData, CarData } from "@/constants/index";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24">
      <HeroSection currentSlide={currentSlide} />
      <FeaturesSection />
      <PopularVehiclesSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
  );
}

function HeroSection({ currentSlide }: { currentSlide: number }) {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {carData.map(
          (car, index) =>
            index === currentSlide && (
              <motion.div
                key={car.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={car.image}
                  alt={car.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
              </motion.div>
            )
        )}
      </AnimatePresence>
      <div className="relative z-10 text-left max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Rent a car Beograd - GoldRent
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Najpovoljnije iznajmljivanje automobila u Beogradu. Širok izbor vozila
          za sve prilike.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/vozila">
            <Button
              size="lg"
              className="text-lg bg-primary hover:bg-primary/90"
            >
              Pogledajte našu ponudu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "Širok izbor vozila",
      description: "Od gradskih ljubimaca do luksuznih limuzina",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary" />,
      title: "Bez depozita",
      description: "Jednostavno iznajmljivanje bez skrivenih troškova",
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Besplatna dostava",
      description: "Dovozimo vozilo na vašu adresu u Beogradu",
    },
    {
      icon: <PhoneCall className="w-12 h-12 text-primary" />,
      title: "24/7 podrška",
      description: "Uvek smo tu za vas, u bilo koje doba",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Zašto izabrati GoldRent?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function PopularVehiclesSection() {
  const popularVehicles = carData.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Popularna vozila
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularVehicles.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/vozila">
            <Button variant="outline" size="lg" className="text-lg">
              Pogledajte sva vozila <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ car }: { car: CarData }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 sm:h-56 lg:h-64">
        <Image src={car.image} alt={car.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{car.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-lg font-semibold">{car.price}</p>
        <p className="text-muted-foreground">{car.type}</p>
        <Link href={`/vozila/${car.id}`}>
          <Button className="w-full mt-4">Više detalja</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Brza usluga",
      description: "Rezervišite i preuzmite vozilo u najkraćem roku",
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-primary" />,
      title: "Kvalitetna vozila",
      description: "Redovno održavana i čista vozila",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Sigurnost",
      description: "Potpuno osiguranje za bezbrižnu vožnju",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-primary" />,
      title: "Povoljne cene",
      description: "Konkurentne cene za svaki budžet",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Zašto klijenti biraju GoldRent?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/o-nama">
            <Button size="lg" variant="outline" className="text-lg">
              Saznajte više o nama <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      name: "Petar M.",
      text: "Izuzetna usluga! Automobil je bio u odličnom stanju, a osoblje veoma ljubazno.",
      rating: 5,
    },
    {
      name: "Ana J.",
      text: "Iznajmila sam auto za vikend putovanje i bila oduševljena. Proces je bio brz i jednostavan.",
      rating: 5,
    },
    {
      name: "Nikola Đ.",
      text: "Kao čest putnik, koristio sam mnoge rent-a-car usluge, ali GoldRent se ističe po kvalitetu.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Šta kažu naši klijenti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  text,
  rating,
}: {
  name: string;
  text: string;
  rating: number;
}) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="italic mb-4 text-lg">&ldquo;{text}&rdquo;</p>
        <p className="font-semibold text-primary">{name}</p>
      </CardContent>
    </Card>
  );
}

function CallToActionSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Spremni za vožnju?
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Rezervišite svoje vozilo odmah i uživajte u najboljoj usluzi
          rent-a-car-a u Beogradu!
        </p>
        <a href="tel:+38163267202">
          <Button size="lg" variant="secondary" className="text-lg">
            Pozovite nas: +38163267202
          </Button>
        </a>
      </div>
    </section>
  );
}
