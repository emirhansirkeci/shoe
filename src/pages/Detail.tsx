import { useParams } from 'react-router';
import data from '../mock/shoes.json';
import Info from '../components/Details/Info';
import Types from '../components/Details/Types';
import Sizes from '../components/Details/Sizes';

export default function Detail() {
  const { slug } = useParams();
  const shoe = data.find((s) => s.slug === slug);

  if (!shoe) {
    return <div>Product not found</div>;
  }

  return (
    <div className="relative flex flex-col gap-6">
      <div
        className="absolute -top-86 -right-48 h-148 w-148 rounded-full"
        style={{ backgroundColor: shoe.bgColor }}
      />

      <div className="z-50 flex h-64 items-end justify-center">
        <img src={shoe.img} className="mb-8 w-80" />
      </div>

      <Info description={shoe.description} name={shoe.name} price={shoe.price} />
      <Types types={shoe.types} />
      <Sizes sizes={shoe.sizes} />

      <button className="w-full rounded-xl bg-gray-800 p-4 text-white">Add to Bag</button>
    </div>
  );
}
