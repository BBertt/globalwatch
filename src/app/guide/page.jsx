"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GuidePage() {
  const [openSection, setOpenSection] = useState(null);
  const [animateUnderline, setAnimateUnderline] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimateUnderline(true);
    }, 500);
  }, []);

  return (
    <div className="mt-0 pt-0 mt-h-screen">
        <h1 className="head_text text-center"><span className="blue_gradient">Natural Disaster Guides</span></h1>
      <span
          className={`block w-80 h-1 bg-blue-600 mx-auto mt-2 rounded ${
            animateUnderline ? "animate-underline-disappear" : ""
          }`}
        ></span>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <section className="mb-12 w-full max-w-3xl">
          <div
            className="cursor-pointer text-center"
            onClick={() => toggleSection("earthquake-guide")}
          >
            <h1 className="head_text font-bold mb-4"><span className="green_gradient">Earthquake Guide</span></h1>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openSection === "earthquake-guide" ? "auto" : 0,
              opacity: openSection === "earthquake-guide" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-lg leading-relaxed text-left header_guide">
              Earthquakes can strike suddenly and without warning. Here’s what you should do:
            </p>
            <ol className="list-decimal mt-6 pl-5 space-y-4 text-left detail_text">
              <li><strong>Before:</strong> Prepare an emergency kit with essentials like water, food, and first-aid supplies.</li>
              <li><strong>During:</strong> Drop, cover, and hold on. Stay indoors, away from windows and objects that could fall.</li>
              <li><strong>After:</strong> Check yourself for injuries and be ready for aftershocks. Seek medical help if needed.</li>
            </ol>
          </motion.div>
        </section>

        <section className="mb-12 w-full max-w-3xl">
          <div
            className="cursor-pointer text-center"
            onClick={() => toggleSection("tsunami-guide")}
          >
            <h1 className="head_text font-bold mb-4"><span className="orange_gradient">Tsunami Guide</span></h1>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openSection === "tsunami-guide" ? "auto" : 0,
              opacity: openSection === "tsunami-guide" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-lg leading-relaxed text-left header_guide">
              Tsunamis often follow earthquakes. Here’s what to do if you're near the coast:
            </p>
            <ul className="list-disc mt-6 pl-5 space-y-4 text-left detail_text">
              <li><strong>Before:</strong> Know your evacuation routes and follow local tsunami warnings.</li>
              <li><strong>During:</strong> Move inland or to higher ground immediately if you receive a warning or see water receding abnormally.</li>
              <li><strong>After:</strong> Stay away from the coast until officials declare it safe. Avoid floodwaters as they may be contaminated.</li>
            </ul>
          </motion.div>
        </section>

        <section className="mb-12 w-full max-w-3xl">
          <div
            className="cursor-pointer text-center"
            onClick={() => toggleSection("flood-guide")}
          >
            <h1 className="head_text font-bold mb-4"><span className="green_gradient">Flood Guide</span></h1>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openSection === "flood-guide" ? "auto" : 0,
              opacity: openSection === "flood-guide" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-lg leading-relaxed text-left header_guide">
              Floods are among the most common natural disasters. Here’s how to stay safe:
            </p>
            <ol className="list-decimal mt-6 pl-5 space-y-4 text-left detail_text">
              <li><strong>Before:</strong> Know if you live in a flood-prone area. Have an evacuation plan in place.</li>
              <li><strong>During:</strong> Move to higher ground immediately. Never walk or drive through floodwaters.</li>
              <li><strong>After:</strong> Wait for authorities to declare the area safe. Avoid contact with floodwater as it may be contaminated.</li>
            </ol>
          </motion.div>
        </section>

        <section className="mb-12 w-full max-w-3xl">
          <div
            className="cursor-pointer text-center"
            onClick={() => toggleSection("wildfire-guide")}
          >
            <h1 className="head_text font-bold mb-4"><span className="orange_gradient">Wildfire Guide</span></h1>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openSection === "wildfire-guide" ? "auto" : 0,
              opacity: openSection === "wildfire-guide" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="leading-relaxed text-left header_guide">
              Wildfires spread rapidly and can be highly destructive. Here’s what to do:
            </p>
            <ul className="list-disc mt-6 pl-5 space-y-4 text-left detail_text">
              <li><strong>Before:</strong> Prepare an emergency kit and create a defensible space around your home by clearing debris.</li>
              <li><strong>During:</strong> If evacuation orders are issued, leave immediately. If trapped, stay inside a vehicle or building.</li>
              <li><strong>After:</strong> Stay clear of burned areas as hot spots and smoke may linger. Follow the instructions of emergency personnel.</li>
            </ul>
          </motion.div>
        </section>
      </div>
    </div>
    
  );
}
