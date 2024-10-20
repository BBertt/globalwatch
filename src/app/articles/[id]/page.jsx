"use client";

import { useState, useEffect } from "react";
import { articlesData } from "@/data/articlesData";
import { useParams } from "next/navigation";

const ArticleDetail = () => {
  const params = useParams();
  const { id } = params;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold mb-6">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {article.date} | {article.author}
      </p>

      {/* Featured Image */}
      <img
        src={article.image || "/assets/placeholder.png"}
        alt={article.title}
        className="w-full h-80 object-cover rounded-md mb-6"
      />

      {/* Article Content */}
      <p className="text-lg leading-relaxed mb-8">{article.excerpt}</p>

      <div className="text-md leading-relaxed space-y-4 mb-8">
        {article.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      {/* Read More Button */}
      <div className="rounded-lg p-3 bg-blue-500 w-fit mt-4 hover:bg-yellow-200 hover:text-neutral-800 transition">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-neutral-800 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleDetail;
