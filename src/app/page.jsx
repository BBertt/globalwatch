import React from "react";
import NewsCard from "@/components/NewsCard";

const Page = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-start mt-4">
        <h1 className="blue_gradient_border text-4xl font-bold cursor-pointer">
          Related News
        </h1>
      </div>
      <div>
        <NewsCard />
      </div>
    </div>
  );
};

export default Page;
