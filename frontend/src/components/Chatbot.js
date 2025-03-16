import React, { useState } from "react";
import axios from "axios"; // Import Axios

const Chatbot = () => {
  const [prompt, setPrompt] = useState(""); // User input
  const [responseText, setResponseText] = useState(""); // AI's response
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission
  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading state to true
    setResponseText("");  // Clear previous response

    try {
      // Define prompt structure (change prompt as needed)
      const promptText = `
        A user asked a question: "${prompt}"
        
        Based on this information, provide a helpful, well-researched response. Limit the response to 3 simple sentences for a user who is not too knowledgeable about this subject.
      `;

      // Make API request using Axios to send prompt and retrieve AI response
      const response = await axios.post("http://127.0.0.1:5000/generate", {
        prompt: promptText,  // The user’s question as prompt
        temp: 0.7,  // Temperature for response generation
      });

      // Check if the API responded successfully
      if (response.data.status === "ok") {
        setResponseText(response.data.text);  // Set the response text to display
      } else {
        setResponseText("Error: " + response.data.text);  // Set error message
      }
    } catch (error) {
      console.error("Error fetching response:", error);  // Log the error
      setResponseText("Error fetching response.");  // Set error message
    }

    setLoading(false);  // Reset loading state
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">
        Hey! I am InflaBuddy, your AI Teacher.
      </h2>
      <form onSubmit={handleSend}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}  // Update prompt as user types
          placeholder="Ask me a health question..."
          className="w-full p-3 rounded text-black mb-4"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </form>
      {responseText && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h3 className="font-bold">Response:</h3>
          <p>{responseText}</p>
          <small className="text-gray-400">
            Disclaimer: This is not professional medical advice.
          </small>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
