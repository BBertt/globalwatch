"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-10 items-stretch",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-100/20 rounded-lg z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card hovered={hoveredIndex === idx}>
            <div className="relative z-0 flex flex-col h-full">
              <div className="relative h-48 w-full mb-4 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex-grow">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  {item.date} &middot; {item.author}
                </p>
                <span className="text-indigo-600 mt-2 block font-medium transition-opacity duration-300 group-hover:opacity-75">
                  Read More &rarr;
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ hovered, className, children }) => {
  return (
    <div
      className={cn(
        "rounded-lg p-6 bg-white border border-gray-200 transition-all duration-300 transform flex flex-col h-full",
        hovered
          ? "shadow-lg scale-105 border-transparent glow-effect" 
          : "shadow-sm"
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-xl font-semibold text-gray-800 mb-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-base text-gray-600 leading-relaxed", className)}>
      {children}
    </p>
  );
};
