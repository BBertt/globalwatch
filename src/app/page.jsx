import React from "react";
import NewsCard from "@/components/NewsCard";

const Page = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-start mt-4">
        <h1 className="text-2xl font-bold cursor-pointer hover:underline underline-offset-8">
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
