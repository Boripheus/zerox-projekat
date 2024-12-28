'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ArrowRightIcon, CookingPot, PenToolIcon, TvIcon, WarehouseIcon } from 'lucide-react'

import Link from 'next/link'

import { motion } from 'framer-motion';

const services = [
  {
    icon: <CookingPot className='text-primary w-[32px] h-[32px]' />,
    title: 'Kuhinje',
    subt: 'Dizajn i izrada kuhinja po meri',
    desc: 'Naše kuhinje su dizajnirane da maksimalno iskoriste prostor i odgovaraju vašem stilu života. Koristimo visokokvalitetne materijale i najnovije tehnologije za stvaranje funkcionalnih i estetski privlačnih kuhinja.',
    link: 'https://dominoenterijer.rs/usluge/kuhinje'
  },
  {
    icon: <WarehouseIcon className='text-primary w-[32px] h-[32px]' />,
    title: 'Plakari',
    subt: 'Funkcionalni plakari prilagođeni vašem prostoru',
    desc: 'Naši plakari su projektovani da maksimalno iskoriste prostor i pruže optimalna rešenja za organizaciju. Bez obzira na veličinu ili oblik vašeg prostora, mi ćemo kreirati plakar koji savršeno odgovara vašim potrebama.',
    link: 'https://dominoenterijer.rs/usluge/plakari'
  },
  {
    icon: <TvIcon className='text-primary w-[32px] h-[32px]' />,
    title: 'TV komode',
    subt: 'Elegantne TV komode za svaki enterijer',
    desc: 'Naše TV komode kombinuju funkcionalnost i stil. Dizajniramo ih tako da se savršeno uklapaju u vaš prostor, pružajući optimalno rešenje za smeštaj elektronike i dekorativnih elemenata.',
    link: 'https://dominoenterijer.rs/usluge/tv-komode'
  },
  {
    icon: <PenToolIcon className='text-primary w-[32px] h-[32px]' />,
    title: 'Projektovanje enterijera i 3D dizajn',
    subt: 'Kompletno projektovanje i vizualizacija vašeg prostora',
    desc: 'Naš tim stručnih dizajnera koristi najsavremenije 3D tehnologije za vizualizaciju vašeg prostora. Pružamo kompletnu uslugu projektovanja enterijera, od idejnog rešenja do finalnog dizajna, uključujući i detaljne 3D vizualizacije.',
    link: 'https://dominoenterijer.rs/usluge/projektovanje-enterijera'
  },
]

const ServiceCard = ({
  icon,
  title,
  subt,
  desc,
  link
}: {
  icon: React.ReactNode,
  title: string,
  subt: string,
  desc: string,
  link: string
}) => (
  <Card className='bg-card-background flex flex-col justify-between'>
    <CardHeader>
      <div className='p-4 bg-primary/10 w-min rounded-full mb-5'>
        {icon}
      </div>
      <CardTitle className='text-primary'>{title}</CardTitle>
      <CardDescription className='text-accent-foreground'>{subt}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className='text-accent-foreground text-sm max-w-[600px]'>{desc}</p>
    </CardContent>
    <CardFooter>
      <Link href={link} className='w-full'>
        <motion.button whileHover={{ paddingRight: '8px', backgroundColor: 'hsl(var(--primary))' }} className='flex items-center justify-between w-full border-[1px] border-secondary font-medium text-sm px-4 py-1 rounded-lg transition-all'>
          Saznajte više
          <ArrowRightIcon />
        </motion.button>
      </Link>
    </CardFooter>
  </Card>
)

const Services = () => {
  return (
    <div className='flex justify-center py-[3rem] px-4 md:px-10 bg-secondary/30'>
      <div className='flex flex-col gap-8 md:gap-[4rem] items-center text-xl text-primary max-w-[1536px]'>
        <h2 className='md:text-[3rem] text-[2rem]'>Naše usluge</h2>
        <div className='grid grid-col md:grid-cols-2 gap-10 md:gap-x-[6rem]'>
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} subt={service.subt} desc={service.desc} link={service.link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;