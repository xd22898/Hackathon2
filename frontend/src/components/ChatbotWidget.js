// src/components/ChatbotWidget.jsx
import React, { useState } from "react";
import Chatbot from "./Chatbot"; // Adjust the path if needed

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat window: only show when isOpen is true */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-gray-800 p-4 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-white">Chatbot</h2>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300"
            >
              X
            </button>
          </div>
          <Chatbot />
        </div>
      )}

      {/* Toggle button: always fixed at bottom right */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg z-50 focus:outline-none"
      >
        Chat with me
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </>
  );
};

export default ChatbotWidget;
