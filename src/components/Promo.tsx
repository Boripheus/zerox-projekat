import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import Degustation from '@/../public/degustation.jpg';
import Vineyard from '@/../public/vineyard.jpg';
import Education from '@/../public/education.jpg';

const AlternatingPromo = ({
  title,
  text,
  img
}: {
  title: string,
  text: string[],
  img: StaticImport | string
}) => {
  return (
    <div className='flex flex-col lg:flex-row gap-8 px-4 py-6 max-w-[1400px] group'>
      <div className='lg:group-even:order-2'>
        <Image src={img} alt={title} className='object-cover w-full aspect-[16/9] rounded-xl' />
      </div>
      <div className='flex flex-col gap-4 max-w-[600px]'>
        <p className='font-medium text-[2.43rem] text-primary'>{title}</p>
        {text.map((par, ind) => (
          <p key={ind} className='font-regular text-[1rem] text-[#2D2D38]'>{par}</p>
        ))}
      </div>
    </div>
  )
}

const Promo = () => (
  <div className='bg-white flex justify-center pt-[3rem] md:pt-[7rem]'>
    <div className='flex flex-col gap-4'>
      <AlternatingPromo title='Naša ponuda' text={['Crvena vina: Bogata, elegantna i punog tela, savršena za svaku priliku.', 'Bela vina: Osvežavajuća, voćna i delikatna, idealna za opuštanje uz lagan obrok.', 'Rose vina: Harmoničan spoj svežine i kompleksnosti, savršena za sunčane dane.', 'Specijalna izdanja: Vrhunska vina sa pažljivo odabranim grožđem, koja će zadovoljiti i najzahtevnije vinske znalce.']} img={Degustation} />
      <AlternatingPromo title='Obilazak vinograda' text={['U našoj vinariji, vinogradarstvo je više od posla – to je tradicija, ljubav i predanost koju ulažemo u svaki korak proizvodnje. Naša vina su rezultat pažljive obrade vinove loze, strpljenja u procesu zrenja i posvećenosti svakom detalju. Pozivamo vas da uživate u vrhunskim vinima koja odražavaju jedinstvene karakteristike našeg terroira i strast naših vinara.']} img={Vineyard} />
      <AlternatingPromo title='Degustacija vina' text={['Doživite jedinstven trenutak i upoznajte sve nijanse okusa naših vina kroz vođene degustacije sa stručnjacima. Otkrijte kako se spajaju savršeni okusi i mirisi, a svaki gutljaj postaje užitak za vaša čula.']} img={Education} />
    </div>
  </div>
)

export default Promo;