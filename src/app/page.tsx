import Hero from '@/components/Hero';
import Promo from '@/components/Promo';
import Reviews from '@/components/Reviews';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Promo />
      <Reviews />
    </div>
  );
}

export default Home;