"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { newsData } from "@/data/newsData";

export function ExpandableCard() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[800px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="w-full"
              >
                <Image
                  priority
                  width={800}
                  height={450}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-[450px] object-cover object-top"
                />
              </motion.div>

              <div className="w-full">
                <div className="flex justify-between items-start p-4">
                  <div className="w-full">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 w-full"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.excerpt}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 w-full"
                    >
                      {active.excerpt}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={`/news/${active.id}`}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white w-fit"
                  >
                    Read
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-full mx-auto w-full">
        {newsData.map((news) => (
          <motion.div
            layoutId={`card-${news.title}-${id}`}
            key={news.id}
            onClick={() => setActive(news)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer group w-full"
          >
            {/* Image on the left */}
            <motion.div
              layoutId={`image-${news.title}-${id}`}
              className="w-[200px] h-[125px] overflow-hidden rounded-lg"
            >
              <Image
                width={200}
                height={125}
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Container for the text and button on the right */}
            <div className="ml-4 w-full flex flex-col justify-between">
              <div className="w-full">
                <motion.h3
                  layoutId={`title-${news.title}-${id}`}
                  className="text-black group-hover:text-white text-left text-2xl font-bold"
                >
                  {news.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${news.excerpt}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left"
                >
                  {news.excerpt}
                </motion.p>
              </div>

              <motion.button
                layoutId={`button-${news.title}-${id}`}
                className="mt-2 px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black self-end"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
