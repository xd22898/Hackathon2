// src/pages/HomePage.js
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white rounded-lg">
      {/* Hero Section */}
      <header className="py-12">
        <h1 className="text-center text-5xl font-bold mb-4">Cureation</h1>
        <p className="text-center text-xl">
          A Personalized Platform for Inflammation Analysis and Health Insights
        </p>
      </header>

      {/* Our Solution Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <ul className="list-disc ml-5 text-lg space-y-2">
            <li>
              Educate the general public on the significance of inflammation in
              overall health.
            </li>
            <li>
              Provide users with a personalized inflammation score using a
              weighted algorithm
            </li>
            <li>
              Offer tailored health recommendations from trusted medical
              websites to improve well-being
            </li>
          </ul>
        </div>
      </section>

      {/* Applied Clinical Medicine Team Section */}
      <section className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Applied Clinical Medicine Team
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold">Beverley</h3>
              <p className="text-lg">
                3rd Year Medicine MBBS (King’s College London) – Intercalating
                at Imperial College to learn more on how cancer affects
                different organs. This is something I am very interested in.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold">Joyce</h3>
              <p className="text-lg">
                3rd Year Nutrition & Medical Sciences (University College
                London) – I am interested in Nutrition and create a start-up
                regarding the issue on social media spread of misinformation.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold">Paris</h3>
              <p className="text-lg">
                3rd Year Medicine MBBS (King’s College London) – I want to
                intercalate in Maths, Computers, and Medicine to further my
                learning within digital health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital HealthTech Team Section */}
      <section className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Digital HealthTech Team</h2>
          <div className="space-y-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold">Louis</h3>
              <p className="text-lg">
                3rd Year Mechatronics and Robotics (University of Birmingham) –
                I am currently working on a fitness app that uses AI-driven
                techniques to connect users digitally to meet up in the real
                world, ultimately to encourage well-being and health.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold">Valentina</h3>
              <p className="text-lg">
                3rd Year Computer Science (University of Bristol) – I am willing
                to pursue an integrated Masters in computer science to further
                my knowledge in machine learning. This is to learn to write code
                in numerous languages to the highest level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4 bg-gray-800 rounded-lg">
          <p className="text-center text-gray-400 py-4">
            © 2025 InflammaTrack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
