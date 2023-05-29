import Image from 'next/image';

import PopCorn from '@public/popcorn.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-950 fixed w-full flex items-center justify-between px-12 h-20">
      <Link href="/" className="flex gap-2">
        <Image src={PopCorn} alt={''} width={30}></Image>
        <h1 className="font-bold text-white text-2xl">Cinemate</h1>
      </Link>
      <span className="text-sm font-extrabold text-yellow-500">en-US</span>
    </header>
  );
};

export default Header;
