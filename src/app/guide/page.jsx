export default function GuideHome() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to the Guide Section</h1>
      <p className="text-lg leading-relaxed">
        In this section, you'll find everything you need to know about our
        platform. Whether you're getting started or looking for advanced tips,
        we've got you covered.
      </p>

      <ul className="list-disc mt-6 pl-5 space-y-2">
        <li>
          <a
            href="/guide/get-started"
            className="text-neutral-800 hover:underline"
          >
            Getting Started
          </a>
        </li>
        <li>
          <a
            href="/guide/advance-tips"
            className="text-neutral-800 hover:underline"
          >
            Advanced Tips
          </a>
        </li>
        <li>
          <a href="/guide/faq" className="text-neutral-800 hover:underline">
            Frequently Asked Questions (FAQ)
          </a>
        </li>
      </ul>
    </div>
  );
}
