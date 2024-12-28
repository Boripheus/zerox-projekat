import Avatar from '@/../public/user.jpg';
import Image from 'next/image';

const reviews = [
  {
    avatar: Avatar,
    name: 'Ana Petrović',
    country: 'Srbija',
    desc: 'Vrhunska usluga i fantastična selekcija vina. Vinarija Davidović je definitivno naš prvi izbor za nabavku vina za naš restoran.'
  },
  {
    avatar: Avatar,
    name: 'Milena Petrović',
    country: 'Srbija',
    desc: 'Poseta vinariji bila je savršeno iskustvo. Prelepi vinogradi, degustacija vina i ljubazno osoblje su me ostavili bez reči.'
  },
  {
    avatar: Avatar,
    name: 'Ivana Petrović',
    country: 'Srbija',
    desc: 'Uživala sam u organizovanoj vinskoj turi i naučila mnogo novo o vinskoj kulturi Srbije.'
  },
]
const Card = ({
  avatar,
  name,
  country,
  desc
}: {
  avatar: React.ReactNode,
  name: string,
  country: string,
  desc: string
}) => (
  <div className='flex flex-col rounded-3xl shadow-2xl relative text-center shrink-0'>
    <div className='w-[116px] absolute top-[-58px] left-[calc(50%-58px)] rounded-full'>
      {avatar}
    </div>
    <div className='flex flex-col gap-2 pt-[4.5rem] pb-6 px-4'>
      <p className='text-3xl font-bold'>{name}</p>
      <p className='text-xl'>{country}</p>
    </div>
    <div className='bg-primary rounded-b-3xl text-white h-full py-6 px-4'>
      <p className='max-w-[300px] font-medium'>{desc}</p>
    </div>
  </div>
)

const Reviews = () => (
  <div className='flex justify-center pt-[3rem] md:pt-[6rem] pb-[6rem] px-10'>
    <div className='max-w-[1536px] w-full'>
      <h2 className='text-primary text-[2.5rem] leading-[1.1] md:text-[3rem] font-bold text-center mb-[6rem]'>Šta naši posetioci kažu o nama</h2>
      <div className='flex flex-col justify-center md:flex-row gap-[8rem] md:gap-10'>
        {reviews.map((review, index) => (
          <Card key={index} avatar={<Image src={review.avatar} alt={review.name} className='w-full rounded-full' />} name={review.name} country={review.country} desc={review.desc} />
        ))}
      </div>
    </div>
  </div>
)

export default Reviews;