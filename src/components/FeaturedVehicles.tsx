import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { carData } from "@/constants/index";

export default function FeaturedVehicles() {
  const featuredVehicles = carData.slice(0, 3);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Istaknuta vozila
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVehicles.map((vehicle) => (
            <Card key={vehicle.id}>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  {vehicle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <CardDescription>
                  <div className="font-semibold text-lg mb-2">
                    {vehicle.price}
                  </div>
                  <div>{vehicle.type}</div>
                </CardDescription>
                <Link href={`/vozila/${vehicle.id}`}>
                  <Button className="w-full mt-4">Više detalja</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/vozila">
            <Button variant="outline" size="lg">
              Pogledajte sva vozila
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
