import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

const Navbar = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={'/'} className="flex gap-2 flex-center">
        <Image
          src={'/assets/images/logo.svg'}
          alt={'Logo'}
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">YPrompts</p>
      </Link>
      {/* Desktop Navigation */}
      <DesktopNavigation />
    </nav>
  );
};
export default Navbar;
