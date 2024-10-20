import React from "react";
import NewsCard from "@/components/NewsCard";
import { GlobeDemo } from "@/components/ui/globe-show";
import ArticleCard from "@/components/ArticleCard";

const Page = () => {
  return (
    <div className="container mx-auto">
      <GlobeDemo />
      <div className="flex justify-start mt-4">
        <h1 className="blue_gradient_border text-4xl font-bold cursor-pointer">
          Related News
        </h1>
      </div>
      <div>
        <NewsCard />
      </div>

      <div className="mt-8 flex justify-start">
        <h1 className="text-4xl font-bold orange_gradient_border cursor-pointer">
          Recommended Articles
        </h1>
      </div>

      <ArticleCard />
    </div>
  );
};

export default Page;
