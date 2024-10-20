"use client";
import { ExpandableCard } from "@/components/ui/ExpandableCards";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const News = () => {
  const [animateUnderline, setAnimateUnderline] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateUnderline(true);
    }, 500);
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-6 h-full">
      <div className="relative">
        <h1 className="head_text text-center font-bold mb-4">
          <span className="blue_gradient">News</span>
        </h1>
        <span
          className={`block w-32 h-1 bg-blue-600 mx-auto mt-2 rounded ${
            animateUnderline ? "animate-underline-disappear" : ""
          }`}
        ></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-8">
        <div className="hidden md:col-span-2 md:flex bg-black justify-center items-center"></div>

        <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
          <ExpandableCard />
        </div>

        <div className="col-span-12 md:col-span-2 bg-theme flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-bold text-white mb-4 text-center md:text-left">
            Support Our Cause
          </h2>
          <p className="text-white text-center mb-6">
            Every penny counts. Help those in need and make a difference in
            their lives today.
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

export default News;
