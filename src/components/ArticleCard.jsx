import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect-articles";
import { articlesData } from "@/data/articlesData";

const recommendedArticles = articlesData
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

const ArticleCard = () => {
  return (
    <div>
      <HoverEffect items={recommendedItems} className="gap-4" />
    </div>
  );
};

export default ArticleCard;
