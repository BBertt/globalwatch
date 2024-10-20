"use client";

import Link from "next/link";
import styles from "styles/navbar.module.css";
import "@/styles/globals.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

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
        {/* Logo */}
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

        {/* Hamburger Icon */}
        <div className="block sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links - hidden on small screens, shows when hamburger menu is clicked */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 absolute sm:static top-16 left-0 sm:top-auto sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent py-4 sm:py-0 z-40 sm:z-auto`}
        >
          <Link
            href="/"
            className={`${styles.custom} text-gray-800 font-medium`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/news"
            className={`${styles.custom} text-gray-800 font-medium`}
            onClick={() => setMenuOpen(false)}
          >
            News
          </Link>
          <Link
            href="/articles"
            className={`${styles.custom} text-gray-800 font-medium`}
            onClick={() => setMenuOpen(false)}
          >
            Articles
          </Link>
          <Link
            href="/donations"
            className={`${styles.custom} text-gray-800 font-medium`}
            onClick={() => setMenuOpen(false)}
          >
            Donations
          </Link>
          <Link
            href="/guide"
            className={`${styles.custom} text-gray-800 font-medium`}
            onClick={() => setMenuOpen(false)}
          >
            Guides
          </Link>
          <Link
            href="/about"
            className={`${styles.custom} text-gray-800 font-medium`}
            onClick={() => setMenuOpen(false)}
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
            <div className="flex justify-center items-center h-full">
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
