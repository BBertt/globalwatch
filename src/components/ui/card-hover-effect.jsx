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

  const displayedFirstRowItems = firstRowItems.slice(0, 3);
  const displayedSecondRowItems = secondRowItems.slice(0, 3);

  return (
    <div
      className={`container mx-auto grid grid-cols-3 gap-6 py-10 ${className}`}
    >
      <div className="col-span-1 row-span-2 h-full">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/news/${mainItem.id}`}
            className="relative block h-full bg-theme rounded-lg overflow-hidden"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === 0 && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-white dark:bg-white/50 block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card item={mainItem} />
          </Link>
        </motion.div>
      </div>

      <div className="col-span-2 grid grid-cols-3 gap-4">
        {displayedFirstRowItems.map((item, idx) => (
          <Link
            href={`/news/${item.id}`}
            key={item.key}
            className="relative group block"
            onMouseEnter={() => setHoveredIndex(idx + 1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {hoveredIndex === idx + 1 && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-white/10 dark:bg-white/40 block rounded-lg"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <Card item={item} />
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="col-span-2 grid grid-cols-3 gap-4">
        {displayedSecondRowItems.map((item, idx) => (
          <Link
            href={`/news/${item.id}`}
            key={item.key}
            className="relative group block"
            onMouseEnter={() => setHoveredIndex(idx + 4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {hoveredIndex === idx + 4 && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-white/10 dark:bg-white/40 block rounded-lg"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <Card item={item} />
            </motion.div>
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
        <div
          className={`${
            main ? "text-white" : "text-gray-500"
          } mt-auto text-xs text-gray-500 flex justify-between gap-2`}
        >
          <p
            className={`${
              main ? " text-white font-bold" : ""
            } text-sm text-gray-500 mb-2`}
          >
            {date} | {author}
          </p>
        </div>
      </div>
    </div>
  );
};
