"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { newsData } from "@/data/newsData";

const NewsDetail = ({ params }) => {
  const { id } = params;
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundNewsItem = newsData.find((news) => news.id === id);
      if (foundNewsItem) {
        setNewsItem(foundNewsItem);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Image
            src="/assets/icons/loader.svg"
            width={50}
            height={50}
            alt="loader"
            className="mx-auto object-contain"
          />
          <p className="mt-2 text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return <p>News not found</p>;
  }

  const relatedNews = newsData.filter((news) => news.id !== id).slice(0, 3); // Select 3 random related news items

  return (
    <div className="w-full p-8 bg-gray-50">
      <div className="w-[85vw] mx-auto">
        <button
          onClick={() => window.history.back()}
          className="mb-6 p-3 bg-gray-50 text-gray-600 font-medium rounded flex items-center space-x-2 transition duration-300 ease-in-out shadow hover:shadow-lg transform hover:-translate-y-1"
        >
          <span className="text-2xl">&larr;</span>
          <span className="text-lg">Back</span>
        </button>

        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-10 py-6 bg-gray-100 border-b border-gray-300">
            <h1 className="text-5xl font-bold text-gray-900 leading-snug">
              {newsItem.title}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              {newsItem.date} | {newsItem.author}
            </p>
          </div>

          <div className="w-full h-[500px] mt-4 overflow-hidden relative">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="px-10 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg mt-6">
            <p className="text-xl font-serif italic text-gray-700">
              {newsItem.excerpt}
            </p>
          </div>

          <div className="px-10 py-8 space-y-6 leading-relaxed text-gray-800 text-lg border-l-[6px] border-gradient-orange pl-6">
            {newsItem.content ? (
              newsItem.content.split("\n").map((paragraph, index) => (
                <p key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>No content available</p>
            )}
          </div>

          <div className="flex justify-center py-8">
            <a
              href={newsItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Related News Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Related News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedNews.map((related) => (
              <div
                key={related.id}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105 hover:backdrop-blur-lg"
                onClick={() => (window.location.href = `/news/${related.id}`)}
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-[full] h-full object-cover transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {related.date} | {related.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
