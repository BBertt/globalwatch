import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
          About GlobalWatch
        </span>
      </h1>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="header_about mb-4">Vision</h2>
        <p className="detail_text leading-relaxed">
          At GlobalWatch, our vision is to create a world where everyone is
          informed and empowered to make a difference in addressing global
          crises. We aim to become the leading platform for real-time
          information on global crises, fostering awareness and collective
          action to support affected communities.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="header_about mb-4">Mission</h2>
        <p className="detail_text leading-relaxed">
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

      <section className="mb-8 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="header_about mb-4">What We Do</h2>
        <p className="detail_text text-gray-700 leading-relaxed">
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
