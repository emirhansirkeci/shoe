import data from '../../mock/shoes.json';
import { cn } from '../../utils';
import { Link } from 'react-router';
import { motion, type Variants } from 'framer-motion';

export default function Shoes() {
  return (
    <div className="no-scrollbar -mr-4 flex snap-x snap-mandatory gap-18 overflow-x-auto overflow-y-hidden">
      {data.map((shoe) => (
        <Shoe
          key={shoe.slug}
          name={shoe.name}
          slug={shoe.slug}
          price={shoe.price}
          img={shoe.img}
          bgColor={shoe.bgColor}
          theme={shoe.theme as 'light' | 'dark'}
        />
      ))}
    </div>
  );
}

type ShoeProps = {
  name: string;
  slug: string;
  price: string;
  img: string;
  bgColor: string;
  theme: 'light' | 'dark';
};

function Shoe({ name, slug, price, img, bgColor, theme = 'light' }: ShoeProps) {
  const shoeVariants: Variants = {
    offscreen: {
      rotate: 360,
    },
    onscreen: {
      rotate: 320,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 22,
        mass: 0.8,
      },
    },
  };

  return (
    <Link
      to={`/details/${slug}`}
      className={cn(
        'relative flex h-92 w-[75%] shrink-0 snap-start flex-col gap-4 rounded-2xl px-8 py-6 sm:w-[60%]',
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className={cn({ 'text-white': theme === 'dark', 'text-gray-950': theme === 'light' })}>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-light tracking-widest">{price}</p>
      </div>
      <div
        className={cn('h-[70%] w-0 border-r opacity-20', {
          'border-white': theme === 'dark',
          'border-gray-600': theme === 'light',
        })}
      />

      <motion.img
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.5 }}
        variants={shoeVariants}
        className="absolute -right-16 bottom-16 w-92"
        src={img}
        alt={name}
      />
    </Link>
  );
}
