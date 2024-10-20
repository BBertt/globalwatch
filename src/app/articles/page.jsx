import { HoverEffect } from "@/components/ui/card-hover-effect-articles"; // Import the HoverEffect
import { articlesData } from "@/data/articlesData"; // Import your articles data
import Link from "next/link"; // Import Link from Next.js

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
      <h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
      
      {/* Use HoverEffect to display the articles with hover animations */}
      <HoverEffect items={items} className="gap-1" />
    </div>
  );
};

export default ArticlesPage;
