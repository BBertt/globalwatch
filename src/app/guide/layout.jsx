export default function GuideLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col container">
      <header className="bg-theme text-white p-4">
        <nav className="flex justify-around">
          <a
            href="/guide"
            className="hover:underline hover:scale-110 transition-all duration-200 ease-out transform"
          >
            Guide Home
          </a>
          <a
            href="/guide/get-started"
            className="hover:underline hover:scale-110 transition-all duration-200 ease-out transform"
          >
            Getting Started
          </a>
          <a
            href="/guide/advance-tips"
            className="hover:underline hover:scale-110 transition-all duration-200 ease-out transform"
          >
            Advanced Tips
          </a>
          <a
            href="/guide/faq"
            className="hover:underline hover:scale-110 transition-all duration-200 ease-out transform"
          >
            FAQ
          </a>
        </nav>
      </header>

      <main className="flex-grow p-6 bg-gray-100">{children}</main>

      <footer className="bg-theme text-white p-4 text-center">
        <p>&copy; 2024 GlobalWatch. All rights reserved.</p>
      </footer>
    </div>
  );
}
