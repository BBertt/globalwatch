import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">GlobalWatch</h1>
        <div>
          <Link href="/" className="mx-4 hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="mx-4 hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="mx-4 hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
