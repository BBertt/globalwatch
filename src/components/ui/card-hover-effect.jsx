"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  mainItem,
  firstRowItems,
  secondRowItems,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`container mx-auto grid grid-cols-3 gap-6 py-10 ${className}`}
    >
      {/* Main News (Spanning Two Rows) */}
      <div className="col-span-1 row-span-2 h-full">
        <Link
          href={mainItem.link}
          className="relative block h-full bg-theme rounded-lg overflow-hidden"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === 0 && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-800/50 dark:bg-blue-600/50 block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card item={mainItem} />
        </Link>
      </div>

      {/* First Row News (Right Side) */}
      <div className="col-span-2 grid grid-cols-3 gap-4">
        {firstRowItems.map((item, idx) => (
          <Link
            href={item.link}
            key={item.key}
            className="relative group block"
            onMouseEnter={() => setHoveredIndex(idx + 1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx + 1 && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-black/10 dark:bg-black/40 block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card item={item} />
          </Link>
        ))}
      </div>

      {/* Second Row News (Right Side) */}
      <div className="col-span-2 grid grid-cols-3 gap-4">
        {secondRowItems.map((item, idx) => (
          <Link
            href={item.link}
            key={item.key}
            className="relative group block"
            onMouseEnter={() => setHoveredIndex(idx + 4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx + 4 && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-black/10 dark:bg-black/40 block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Card = ({ item }) => {
  const { title, image, author, date, excerpt, main } = item;
  const cardClasses = `flex flex-col h-full overflow-hidden shadow-lg rounded-lg ${
    main ? "bg-theme text-white" : "bg-white border border-gray-300"
  }`;

  return (
    <div className={cardClasses}>
      <img
        className={`${main ? "h-1/2" : "h-40"} w-full object-cover`}
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <div className="font-semibold text-lg leading-snug mb-2">{title}</div>
          {main && <p className="text-sm">{excerpt}</p>}
        </div>
        <div className="mt-auto text-xs text-gray-500 flex justify-between">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
