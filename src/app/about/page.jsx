"use client";
import React, { useState, useEffect } from "react";
import { FaEye, FaBullseye, FaHandsHelping } from 'react-icons/fa'; // Importing icons

const About = () => {
  const [animateUnderline, setAnimateUnderline] = useState(false);

  useEffect(() => {
    setAnimateUnderline(true); 
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-6xl">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            About GlobalWatch
          </span>
        </h1>
        <span
          className={`block w-20 h-2 bg-blue-600 mx-auto mt-2 rounded ${
            animateUnderline ? "animate-underline-disappear" : ""
          }`}
        ></span>
      </div>

      {/* Vision Section */}
      <section className="mb-12 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <FaEye className="text-blue-600 w-8 h-8 mr-2" /> {/* Vision Icon */}
        </div>
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-4 tracking-wider">
          Vision
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At GlobalWatch, our vision is to create a world where everyone is
          informed and empowered to make a difference in addressing global
          crises. We aim to become the leading platform for real-time
          information on global crises, fostering awareness and collective
          action to support affected communities.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <FaBullseye className="text-blue-600 w-8 h-8 mr-2" /> {/* Mission Icon */}
        </div>
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-4 tracking-wider">
          Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission at GlobalWatch is to provide timely, accurate, and
          insightful news coverage on global crises while offering a unique
          opportunity for users to engage and contribute. By raising awareness
          and providing a platform for targeted donations, we enable individuals
          to support those affected by natural disasters, humanitarian issues,
          and other global emergencies. We are committed to solving pressing
          global issues and contributing to the achievement of the UN's
          Sustainable Development Goals (SDGs), particularly SDG 3 (Good Health
          and Well-being) and SDG 13 (Climate Action).
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <FaHandsHelping className="text-blue-600 w-8 h-8 mr-2" /> {/* What We Do Icon */}
        </div>
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-4 tracking-wider">
          What We Do
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          GlobalWatch serves as a bridge between global events and individual
          action. We provide in-depth articles, up-to-date news, guides for
          crises, and offer a platform where users can donate to causes that
          align with their values. Whether it's a natural disaster or a
          humanitarian crisis, GlobalWatch empowers people to stay informed and
          make meaningful contributions to the world.
        </p>
      </section>
    </div>
  );
};

export default About;
