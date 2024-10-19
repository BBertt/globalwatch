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
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return <p>News not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {newsItem.date} | {newsItem.author}
      </p>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-80 object-cover rounded-md mb-6"
      />
      <p className="text-lg leading-relaxed">{newsItem.excerpt}</p>
      {newsItem.content ? (
        <div className="text-md leading-relaxed space-y-4">
          {newsItem.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p>No content available</p> // Handle missing content
      )}
      <div className="rounded-lg p-2 bg-theme w-fit mt-4 hover:bg-yellow-200 hover:text-neutral-800 transition ">
        <a
          href={newsItem.link}
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

export default NewsDetail;
