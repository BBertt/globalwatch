"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect-articles";
import { articlesData } from "@/data/articlesData";
import Link from "next/link";
import { useEffect, useState } from "react";

const ArticlesPage = () => {
  const [animateUnderline, setAnimateUnderline] = useState(false);

  useEffect(() => {
    setAnimateUnderline(true);
  }, []);

  const items = articlesData.map((article) => ({
    title: article.title,
    description: article.excerpt,
    link: `/articles/${article.id}`,
    image: article.image || "/assets/placeholder.png",
    author: article.author,
    date: article.date,
  }));

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex justify-center items-center mb-8">
        <h1 className="blue_gradient text-5xl font-extrabold text-gray-800 tracking-wide leading-tight text-center relative">
          Articles
          <span
            className={`block w-20 h-2 bg-blue-600 mx-auto mt-2 rounded ${
              animateUnderline ? "animate-underline-disappear" : ""
            }`}
          ></span>
        </h1>
      </div>

      <HoverEffect items={items} className="gap-1" />
    </div>
  );
};

export default ArticlesPage;
