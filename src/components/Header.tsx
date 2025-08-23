import { ArrowLeft, Heart, Hexagon, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function Header() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <div className="relative z-50 flex h-12 w-full justify-between">
      {isHome ? (
        <>
          <Link to="/" className="touch-hitbox">
            <Hexagon />
          </Link>
          <Search className="touch-hitbox" />
        </>
      ) : (
        <>
          <Link to="/" className="touch-hitbox">
            <ArrowLeft color="white" />
          </Link>
          <Heart color="white" className="touch-hitbox" />
        </>
      )}
    </div>
  );
}
