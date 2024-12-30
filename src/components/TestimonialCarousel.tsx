"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marko Petrović",
    text: "Odlična usluga! Automobil je bio u savršenom stanju, a osoblje veoma ljubazno. Definitivno ću ponovo koristiti GoldRent.",
  },
  {
    id: 2,
    name: "Ana Jovanović",
    text: "Iznajmila sam auto za vikend putovanje i bila sam oduševljena. Proces je bio brz i jednostavan, a cene su zaista konkurentne.",
  },
  {
    id: 3,
    name: "Nikola Đorđević",
    text: "Kao čest putnik, koristio sam mnoge rent-a-car usluge, ali GoldRent se ističe po kvalitetu i profesionalnosti. Toplo preporučujem!",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 text-center">
              <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
