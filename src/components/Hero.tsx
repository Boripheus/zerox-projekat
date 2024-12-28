import Image from 'next/image';

import HeroImg from '@/../public/hero.jpg';

const Hero = () => (
  <div className='relative flex justify-center '>
    <div className='absolute top-0 left-0 w-[100vw] h-[100dvh] bg-foreground/40 z-[1]' />
    <Image src={HeroImg} alt='Vinarija Davidović' className='top-0 left-0 w-[100vw] h-[100dvh] object-cover' />
    <div className='absolute flex flex-col items-center gap-10 z-[1] text-center px-4 bottom-[4rem] md:bottom-[40%] md:right-[20rem]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-white text-[2rem] md:text-[4rem] font-bold'>Vinarija Davidović</h1>
        <h2 className='text-white font-medium text-base md:text-[1.2rem] md:leading-[1.2] max-w-[600px]'>Prestižna vinarija koja se ponosi tradicijom i strašću prema proizvodnji vrhunskih vina. Smeštena u srcu Srbije, na prelepim vinogradima, naša vinarija nudi širok asortiman kvalitetnih vina, od autohtonih sorti do internacionalnih.</h2>
      </div>
      <button className='text-black rounded-full border-[2px] border-primary bg-primary font-bold px-4 py-2 max-w-[300px] w-full'>Pogledajte našu ponudu</button>
    </div>
  </div>
)

export default Hero;