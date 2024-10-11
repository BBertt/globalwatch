import Link from "next/link";
import styles from "styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <Image
            src="/assets/kizu.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full object-contain ml-4"
          />
        </div>
        <div className="flex space-x-8">
          <Link
            href="/"
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
            href="/guides"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
