'use client';

import Link from 'next/link';

const MobileNavigation = () => {
  const isUserLogged = true;
  return (
    <div className="sm:flex hidden">
      {isUserLogged ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MobileNavigation;
