"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { articlesData } from "@/data/articlesData";
import { HoverEffect } from "@/components/ui/card-hover-effect-articles"; 
import { useParams } from "next/navigation";

const ArticleDetail = () => {
  const params = useParams();
  const { id } = params;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const foundArticle = articlesData.find((item) => item.id === id);
      if (foundArticle) {
        setArticle(foundArticle);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  // Filter and shuffle articles for recommendations
  const recommendedArticles = articlesData
    .filter((item) => item.id !== id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  };

  const recommendedItems = recommendedArticles.map((recommended) => ({
    title: recommended.title,
    description: truncateDescription(recommended.excerpt, 80),
    link: `/articles/${recommended.id}`,
    image: recommended.image || "/assets/placeholder.png",
    author: recommended.author,
    date: recommended.date,
  }));

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      {/* Enhanced Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 p-2 bg-gray-50 text-gray-600 font-medium rounded flex items-center space-x-2 transition duration-300 ease-in-out shadow hover:shadow-lg transform hover:-translate-y-1"
      >
        <span className="text-2xl">&larr;</span>
        <span className="text-lg">Back</span>
      </button>

      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold leading-tight text-gray-800 hover:text-black transition duration-300">
          {article.title}
        </h1>
        <p className="text-md text-gray-500 mb-4 italic">
          {article.date} | {article.author}
        </p>
      </div>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-300 mb-8" />

      {/* Featured Image with Border */}
      <div className="overflow-hidden rounded-lg border-2 border-gray-300 shadow-lg mb-8 transition-transform duration-500 hover:scale-105">
        <img
          src={article.image || "/assets/placeholder.png"}
          alt={article.title}
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Article Excerpt with Blue Line on the Left */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-8 border-l-4 border-blue-600">
        <p className="text-lg text-gray-700 italic leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      {/* Article Content with Blue Line on the Left */}
      <div className="text-lg leading-relaxed space-y-6 mb-12 text-gray-700 border-l-4 border-blue-600 pl-6">
        {article.content.split("\n").map((paragraph, index) => (
          <p
            key={index}
            className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg shadow-sm transition duration-300"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Read More Button */}
      <div className="rounded-lg p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white w-fit mb-12 hover:bg-yellow-400 hover:text-gray-800 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-lg font-medium text-white hover:text-gray-800"
        >
          Read More
        </a>
      </div>

      {/* Recommended Articles Section with HoverEffect */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Recommended Articles</h2>
        <HoverEffect items={recommendedItems} className="gap-4" />
      </div>
    </div>
  );
};

export default ArticleDetail;
