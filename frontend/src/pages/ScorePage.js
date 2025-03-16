import React from 'react';
import { useLocation } from 'react-router-dom';

const ScorePage = () => {
  const { state } = useLocation();
  const { score, riskCategory } = state;

  // Set color based on risk category
  let circleColor = '';
  if (riskCategory === 'Low Risk') {
    circleColor = 'bg-green-500'; // Green for Low Risk
  } else if (riskCategory === 'Medium Risk') {
    circleColor = 'bg-yellow-500'; // Yellow for Medium Risk
  } else {
    circleColor = 'bg-red-500'; // Red for High Risk
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">Inflammation Score Result</h2>
      <div className={`w-32 h-32 rounded-full mx-auto ${circleColor} flex items-center justify-center`}>
        <p className="text-white text-xl font-semibold">{riskCategory}</p> {/* Adjusted text size */}
      </div>
      <p className="text-gray-600 mt-4">Your total inflammation score is: {score}</p>
    </div>
  );
};

export default ScorePage;
