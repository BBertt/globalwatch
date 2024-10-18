import { ExpandableCard } from "@/components/ui/ExpandableCards";
import React from "react";

const news = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-6">
        {/* Left */}
        <div className="col-span-3 bg-black">
          <h2 className="text-lg font-bold text-white">Content</h2>
        </div>

        {/* Mid - News */}
        <div className="col-span-6">
          <h1 className="text-2xl font-bold mb-4">News</h1>
          <ExpandableCard />
        </div>

        {/* Right */}
        <div className="col-span-3 bg-black">
          <h2 className="text-lg font-bold text-white">Content</h2>
        </div>
      </div>
    </div>
  );
};

export default news;
