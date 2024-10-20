"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NewsDetail = ({ params }) => {
  const { id } = params;
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/news/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setNewsItem(data);
          setLoading(false);
        })
        .catch(() => {
          setNewsItem(null);
          setLoading(false);
        });
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

  return (
    <div className="w-full p-8 bg-gray-50">
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

        <div className="px-10 py-8 space-y-6 leading-relaxed text-gray-800 text-lg">
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
    </div>
  );
};

export default NewsDetail;
