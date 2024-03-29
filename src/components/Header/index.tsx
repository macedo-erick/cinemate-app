import Image from 'next/image';

import PopCorn from '@images/popcorn.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-950 fixed w-full flex items-center justify-between px-12 h-20 z-50">
      <Link href="/" className="flex gap-2 select-none">
        <Image src={PopCorn} alt="Site Logo" width={30}></Image>
        <h1 className="font-bold text-white text-2xl">Cinemate</h1>
      </Link>
      <span className="text-sm font-extrabold text-yellow-500">en-US</span>
    </header>
  );
};

export default Header;
