"use client";

import Image from 'next/image';
import Logo from '@/../public/logo.webp';

import Link from 'next/link';

import { ChevronDownIcon, MenuIcon, PhoneIcon } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { motion } from 'framer-motion';

import { Fragment, useEffect, useState } from 'react';
import { navList } from '@/assets/nav';

const mobTitleStyles = 'text-lg py-2';

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className='lg:hidden'>
      <MenuIcon className='text-primary cursor-pointer' />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <Image src={Logo} alt='Domino Enterijer' className='mt-[-20px] mb-[-20px] mx-[-50px] h-[120px] block' />
          <ul>
            {
              navList.map((item, index) => {
                if (item.list) return (
                  <Fragment key={index}>
                    <Accordion type="single" collapsible>
                      <AccordionItem className='border-none' value="item-1">
                        <motion.div whileHover={{ color: 'hsl(var(--primary))' }}>
                          <AccordionTrigger className={`${mobTitleStyles} hover:no-underline`}>{item.title}</AccordionTrigger>
                        </motion.div>
                        <AccordionContent>
                          {item.list.map((link, index2) => (
                            <Link className='pl-6 block font-light py-2' key={`${index}.${index2}`} href={link.link}>
                              <motion.li whileHover={{ color: 'hsl(var(--primary))' }}>{link.title}</motion.li>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Fragment>
                )

                return (
                  <Link key={index} href={item.link}>
                    <motion.li whileHover={{ color: 'hsl(var(--primary))' }} className={mobTitleStyles}>{item.title}</motion.li>
                  </Link>
                )
              })
            }
          </ul>
          <motion.button whileHover={{ color: 'hsl(var(--foreground))', backgroundColor: 'hsl(var(--primary))' }} className='flex items-center justify-center w-full rounded-full text-primary border-primary border-2 text-lg py-3 px-6 mt-4 transition-colors'>
            <PhoneIcon />
            <Link href='tel:+381603050704'>
              <p>+381 60 30 50 704</p>
            </Link>
          </motion.button>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
)

const DesktopNav = () => (
  <ul className='hidden gap-8 lg:flex'>
    {navList.map((item, index) => {
      if (item.list) return (
        <HoverCard key={index} openDelay={0} closeDelay={50}>
          <HoverCardTrigger>
            <motion.div whileHover={{ color: 'hsl(var(--primary))' }} className='flex gap-1 transition-colors'>
              {item.title}
              <ChevronDownIcon className='w-[18px]' />
            </motion.div>
          </HoverCardTrigger>
          <HoverCardContent className='p-0'>
            {item.list.map((link, index2) => (
              <motion.li key={`${index}.${index2}`} whileHover={{ backgroundColor: 'hsl(var(--primary))' }}>
                <Link className='px-2 py-2 block' href={link.link}>
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </HoverCardContent>
        </HoverCard>
      )

      return (
        <Link key={index} href={item.link}>
          <motion.li className='transition-colors underline-animation' whileHover={{ color: 'hsl(var(--primary))' }}>{item.title}</motion.li>
        </Link>
      )
    })}
  </ul>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = (e: Event) => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    }

    document.addEventListener('scroll', HandleScroll);

    return () => {
      document.removeEventListener('scroll', HandleScroll);
    }
  }, []);

  return (
    <header
      className={`flex justify-center ${scrolled ? 'bg-white' : 'bg-primary/5'} backdrop-blur fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full">
        <Link href='/' className='mt-[-20px] mb-[-40px] mx-[-50px] h-[120px]'>
          <Image src={Logo} alt='Domino Enterijer' className='block h-full w-full' />
        </Link>
        <DesktopNav />
        <motion.button whileHover={{ color: 'hsl(var(--foreground))', backgroundColor: 'hsl(var(--primary))' }} className='hidden items-center justify-center rounded-full text-primary border-primary border-2 text-md py-3 px-6 transition-colors lg:flex'>
          <PhoneIcon />
          <Link href='tel:+381603050704'>
            <p>+381 60 30 50 704</p>
          </Link>
        </motion.button>
        <MobileMenu />
      </nav>
    </header>
  );
}
