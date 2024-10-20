import { HoverEffect } from "@/components/ui/card-hover-effect-articles";
import { articlesData } from "@/data/articlesData";
import Link from "next/link";

const ArticlesPage = () => {
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
      <h1 className="font-bold mb-8 text-center head_text">
        <span className="blue_gradient">Articles</span>
      </h1>

      <HoverEffect items={items} className="gap-1" />
    </div>
  );
};

export default ArticlesPage;
