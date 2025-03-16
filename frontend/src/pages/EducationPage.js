import React from "react";
import { motion } from "framer-motion";
import ChatbotWidget from "../components/ChatbotWidget";

const EducationPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Understanding Inflammation and Health Risks
      </motion.h1>

      {/* Big Statement */}
      <motion.div
        className="bg-blue-100 p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-purple-400">
          The Global Impact of Inflammation
        </h2>
        <p className="text-gray-400">
          3 out of 5 people globally succumb to chronic inflammatory diseases,
          including stroke, heart disease, cancer, and diabetes (National
          Library of Medicine). Addressing inflammation is critical to improving
          health outcomes, particularly in aging populations.
        </p>
      </motion.div>

      {/* Why It Matters */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Why This Information Is Crucial
        </h2>
        <p className="text-gray-400">
          In the UK, the leading causes of death in 2022 were ischaemic heart
          disease and dementia. Research shows that high levels of inflammation
          (measured by CRP) are significantly associated with these conditions.
          With over 67% of adults over 35 being overweight or obese,
          inflammation risks are on the rise (UK Parliament).
        </p>
      </motion.section>

      {/* CRP Explanation */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">
          C-Reactive Protein (CRP) - The Key Inflammation Marker
        </h2>
        <p className="text-gray-400">
          CRP levels are easily obtained through routine blood tests. Elevated
          CRP is linked to obesity, diabetes, and autoimmune diseases.
          Understanding CRP levels can help individuals take proactive measures
          against chronic inflammation.
        </p>
      </motion.section>

      {/* AI-Powered Health Solutions */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 bg-blue-100 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">
          Innovative AI-Powered Health Insights
        </h2>
        <p className="text-gray-400">
          Unlike generic health websites, our platform uses an AI-driven
          suggestion service for greater in-depth and engaging health insights.
          Our dynamic questionnaires and real-time feedback help users make
          informed decisions to manage inflammation and improve well-being.
        </p>
      </motion.section>

      {/* Future Improvements */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Future Improvements</h2>
        <p className="text-gray-400">
          We plan to integrate our platform with NHS systems to help users
          interpret blood test results and personalize recommendations based on
          ethnicity-related inflammation risks.
        </p>
      </motion.section>
      <ChatbotWidget />
    </div>
  );
};

export default EducationPage;
