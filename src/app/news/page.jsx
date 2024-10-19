import { ExpandableCard } from "@/components/ui/ExpandableCards";
import React from "react";
import Link from "next/link";

const news = () => {
  return (
    <div className="container mx-auto p-6 h-screen">
      <div className="grid grid-cols-12 gap-6 h-full items-center">
        {/* Left */}
        <div className="col-span-3 bg-black flex justify-center items-center">
          {/* Content removed for brevity */}
        </div>
        {/* Mid - News */}
        <div className="col-span-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">News</h1>
          <ExpandableCard />
        </div>
        {/* Right - Donation */}
        <div className="col-span-3 bg-theme flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-bold text-white mb-4">
            Support Our Cause
          </h2>
          <p className="text-white text-center mb-6">
            Help us continue our work. Your support is invaluable to us. Click
            below to donate!
          </p>
          <Link href="/donations">
            <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300 ease-in-out">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default news;
