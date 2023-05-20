'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const DesktopNavigation = () => {
  const isUserLogged = false;
  return (
    <div className="sm:flex hidden">
      {isUserLogged ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>
          <button type="button" className="outline_btn" onClick={signOut}>
            Sign Out
          </button>
          <Link href="/profile">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
            />
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default DesktopNavigation;
