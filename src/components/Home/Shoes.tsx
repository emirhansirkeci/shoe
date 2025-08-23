import data from '../../mock/shoes.json';
import { cn } from '../../utils';
import { Link } from 'react-router';

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
  return (
    <Link
      to={`/details/${slug}`}
      className={cn(
        'relative flex h-92 w-[75%] shrink-0 snap-start flex-col gap-4 rounded-2xl px-8 py-6',
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className={cn({ 'text-white': theme === 'dark', 'text-gray-950': theme === 'light' })}>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-light tracking-widest">{price}</p>
      </div>
      <div
        className={cn('h-[100%] w-[1px] border opacity-5', {
          'border-white': theme === 'dark',
          'border-gray-700': theme === 'light',
        })}
      />
      <img
        className="absolute -right-16 bottom-0 w-72 scale-x-[-1] rotate-340"
        src={img}
        alt={name}
      />
    </Link>
  );
}
