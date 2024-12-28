"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carData, CarData } from "@/constants/index";
import { IoManSharp } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";

export default function VehiclesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredCars = carData.filter(
    (car) =>
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === "all" || car.type === filterType)
  );

  const uniqueTypes = Array.from(new Set(carData.map((car) => car.type)));

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center">Naša vozila</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Input
          className="max-w-sm"
          placeholder="Pretraži vozila..."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtriraj po tipu" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Svi tipovi</SelectItem>
            {uniqueTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <VehicleCard key={car.id} car={car} />
        ))}
      </div>
      {filteredCars.length === 0 && (
        <p className="text-center text-lg text-muted-foreground">
          Nema pronađenih vozila za datu pretragu.
        </p>
      )}
    </motion.div>
  );
}

function VehicleCard({ car }: { car: CarData }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="h-full flex flex-col">
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
          <CardDescription className="flex-grow">
            <div className="font-semibold text-lg mb-2">{car.price}</div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center gap-2">
                <GiGearStickPattern />
                {car.gearbox}
              </div>
              <div className="flex items-center gap-2">
                <IoManSharp />
                {car.passengers}
              </div>
              <div className="flex items-center gap-2">
                <BsFuelPumpFill />
                {car.fuel}
              </div>
              <div>{car.type}</div>
            </div>
          </CardDescription>
          <Link href={`/vozila/${car.id}`} className="mt-auto">
            <Button className="w-full">Više detalja</Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
