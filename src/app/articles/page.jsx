import Link from "next/link";
import { articlesData } from "@/data/articlesData";

const ArticlesPage = () => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articlesData.map((article) => (
          <div
            key={article.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={article.image || "/assets/placeholder.png"}
              alt={article.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{article.date} | {article.author}</p>
              <p className="text-base text-gray-700 mb-4">{article.excerpt}</p>

              <Link href={`/articles/${article.id}`} className="text-blue-500 hover:underline font-semibold">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
