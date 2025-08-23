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
        className="absolute -top-64 -right-20 h-128 w-128 rounded-full"
        style={{ backgroundColor: shoe.bgColor }}
      />

      <img src={shoe.img} className="z-50 w-92" />

      <Info description={shoe.description} name={shoe.name} price={shoe.price} />
      <Types types={shoe.types} />
      <Sizes sizes={shoe.sizes} />

      <button className="w-full rounded-xl bg-gray-800 p-4 text-white">Add to Bag</button>
    </div>
  );
}
