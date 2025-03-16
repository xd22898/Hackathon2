import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ScorePage = () => {
  const { state } = useLocation();
  const { score, riskCategory } = state;

  // State to store the generated suggestions
  const [suggestions, setSuggestions] = useState('');

  // Set color based on risk category
  let circleColor = '';
  if (riskCategory === 'Low Risk') {
    circleColor = 'bg-green-500'; // Green for Low Risk
  } else if (riskCategory === 'Medium Risk') {
    circleColor = 'bg-yellow-500'; // Yellow for Medium Risk
  } else {
    circleColor = 'bg-red-500'; // Red for High Risk
  }

  // Function to fetch suggestions from the backend based on the inflammation score
  const fetchSuggestions = async () => {
    try {
      const prompt = `Give some suggestions for reducing inflammation with a score of ${score}.`;
      const temp = 0.7; // You can adjust this based on user preferences

      // Make a POST request to your Flask API
      const response = await axios.post('http://localhost:5000/generate', {
        prompt: prompt,
        temp: temp,
      });

      if (response.data.status === 'ok') {
        setSuggestions(response.data.text);  // Set the suggestions state with the response text
      } else {
        console.error('Error generating suggestions:', response.data.text);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, [score]);  // Fetch suggestions when the score changes

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">Inflammation Score Result</h2>
      <div className={`w-32 h-32 rounded-full mx-auto ${circleColor} flex items-center justify-center`}>
        <p className="text-white text-2xl">{riskCategory}</p>
      </div>
      <p className="text-gray-600 mt-4">Your total inflammation score is: {score}</p>

      {/* Display the suggestions if available */}
      {suggestions && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Suggestions to reduce inflammation:</h3>
          <p className="text-gray-600">{suggestions}</p>
        </div>
      )}
    </div>
  );
};

export default ScorePage;
