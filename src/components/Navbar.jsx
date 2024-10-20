"use client";

import Link from "next/link";
import styles from "styles/navbar.module.css";
import "@/styles/globals.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-1 font-bold">
          <div>
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full object-contain ml-4"
            />
          </div>
          <div className="flex items-center justify-center">GlobalWatch</div>
        </div>
        <div className="flex space-x-8">
          <Link
            href="/"
            className={`${styles.custom} text-gray-800 font-medium `}
          >
            Home
          </Link>
          <Link
            href="/news"
            className={`${styles.custom} text-gray-800 font-medium `}
          >
            News
          </Link>
          <Link
            href="/articles"
            className={`${styles.custom} text-gray-800 font-medium `}
          >
            Articles
          </Link>
          <Link
            href="/donations"
            className={`${styles.custom} text-gray-800 font-medium `}
          >
            Donations
          </Link>
          <Link
            href="/guide"
            className={`${styles.custom} text-gray-800 font-medium `}
          >
            Guides
          </Link>
          <Link
            href="/about"
            className={`${styles.custom} text-gray-800 font-medium `}
          >
            About Us
          </Link>

          {session?.user ? (
            <div className="flex space-x-8">
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
