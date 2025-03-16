// src/pages/EducationPage.js
import React from "react";
// import Chatbot from "../components/Chatbot";
import ChatbotWidget from "../components/ChatbotWidget";
import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Education Page</h2>
      <p>
        This page will feature our educational content and resources. Stay tuned
        for more updates!
      </p>
      {/* Chatbot Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Chatbot />
      </motion.section> */}
      <ChatbotWidget />
    </div>
  );
};

export default EducationPage;
