import Categories from '../components/Home/Categories';
import Options from '../components/Home/Options';
import Shoes from '../components/Home/Shoes';

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Categories />
      <Shoes />
      <Options />
    </div>
  );
}
