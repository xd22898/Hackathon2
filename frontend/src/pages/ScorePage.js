import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ScorePage = () => {
  const { state } = useLocation();
  const { score, riskCategory, answers } = state;
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  let circleColor =
    riskCategory === "Low Risk"
      ? "bg-green-500"
      : riskCategory === "Medium Risk"
      ? "bg-yellow-500"
      : "bg-red-500";

  const fetchSuggestions = async () => {
    setLoading(true);
    try {
      const prompt = `
        A user completed an inflammation assessment. Their inflammation score is ${score} and they fall under the category: ${riskCategory}.
        
        Here are their detailed questionnaire responses:
        ${Object.entries(answers)
          .map(([question, response]) => `${question}: ${response}`)
          .join("\n")}

        Based on this information, provide the **top 5 actionable steps** they can take to **reduce inflammation**. Each suggestion should be specific, practical, and backed by research.
      `;

      const response = await axios.post("http://127.0.0.1:5000/generate", {
        prompt,
        temp: 0.7,
      });

      if (response.data.status === "ok") {
        setSuggestions(response.data.text.split("\n").filter((line) => line.trim())); // Split into array
      } else {
        console.error("Error generating suggestions:", response.data.text);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">
        Inflammation Score Result
      </h2>
      <div
        className={`w-32 h-32 rounded-full mx-auto ${circleColor} flex items-center justify-center`}
      >
        <p className="text-white text-2xl text-center">{riskCategory}</p>
      </div>
      <p className="text-gray-600 mt-4">
        Your total inflammation score is: {score}
      </p>

      {/* Button to Fetch Suggestions */}
      <button
        onClick={fetchSuggestions}
        className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
      >
        What do I do?
      </button>

      {/* Loading state */}
      {loading && <p className="mt-2 text-gray-500">Generating suggestions...</p>}

      {/* Display Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Suggested Actions:</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-gray-600">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScorePage;
