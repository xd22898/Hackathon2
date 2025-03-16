import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientFormPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  
  const questions = [
    { category: "Symptoms and Severity", items: [
      "Joint pain or stiffness?",
      "Unexplained fever or chills?",
      "Muscle aches or body pain?",
      "Chronic fatigue or low energy?",
      "Swelling in joints or limbs?"
    ]},
    { category: "Digestive and Gut Health", items: [
      "Bloating after meals?",
      "Frequent acid reflux or heartburn?",
      "Irregular bowel movements?"
    ]},
    { category: "Skin and Immune System", items: [
      "Skin rashes, acne, eczema?",
      "Frequent infections, cold, flu?"
    ]},
    { category: "Lifestyle Factors", items: [
      "How often do you consume processed foods/ready meals (ham, refined carbs, crisps)?",
      "Sleep deprivation (<6 hours per night)?",
      "Low physical activity (<3 times per week)?",
      "High levels of stress or anxiety?"
    ]}
  ];

  const handleChange = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleOptionalChange = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const calculateScore = () => {
    // Define weights for different categories based on many research and medical websites
    const questionWeights = {
      "Symptoms and Severity": 2,
      "Digestive and Gut Health": 1.5,
      "Skin and Immune System": 1,
      "Lifestyle Factors": 2,
    };
  
    let scoreFromQuestions = 0;
    
    // Loop through each category and apply weights to questions
    questions.forEach(section => {
      section.items.forEach((question, qIndex) => {
        let questionScore = parseInt(answers[question]) || 0;
        // Apply weight to the score from the question
        scoreFromQuestions += questionScore * questionWeights[section.category];
      });
    });
  
    // Calculate the CRP score
    let CRPScore = 0;
    const CRPValue = parseFloat(answers["CRP"]);
    if (CRPValue) {
      if (CRPValue <= 0.3) CRPScore = 0; // Normal
      else if (CRPValue > 0.3 && CRPValue <= 1.0) CRPScore = 1; // Minor Elevation
      else if (CRPValue > 1.0 && CRPValue <= 10.0) CRPScore = 2; // High
      else if (CRPValue > 10.0) CRPScore = 3; // Very High
    }
  
    // Calculate the ESR score
    let ESRScore = 0;
    const ESRValue = parseFloat(answers["ESR"]);
    if (ESRValue) {
      if (ESRValue <= 15) ESRScore = 0; // Normal
      else if (ESRValue > 15 && ESRValue <= 40) ESRScore = 1; // Mild Elevation
      else if (ESRValue > 40 && ESRValue <= 60) ESRScore = 2; // Moderate Elevation
      else if (ESRValue > 60) ESRScore = 3; // Very High
    }
  
    // Total score = weighted score from questions + CRP score + ESR score
    const totalScore = scoreFromQuestions + CRPScore + ESRScore;
  
    // Determine the risk category based on the total score
    let riskCategory = '';
    if (totalScore <= 14) {
      riskCategory = 'Low Risk'; // Green
    } else if (totalScore > 14 && totalScore <= 30) {
      riskCategory = 'Medium Risk'; // Yellow
    } else {
      riskCategory = 'High Risk'; // Red
    }
  
    // Navigate to the score page and pass the total score and risk category
    // Navigate to ScorePage and pass answers
    navigate("/score", { state: { score: totalScore, riskCategory, answers } });

  };
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">Inflammation Score Assessment</h2>
      <p className="text-gray-600 mb-6">Rate each question on a scale of 0 (None) to 3 (Severe).</p>
      <form>
        {questions.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{section.category}</h3>
            {section.items.map((question, qIndex) => (
              <div key={qIndex} className="mb-2">
                <label className="block text-gray-700 mb-2">{question}</label>
                <select
                  className="mt-1 text-gray-700 p-2 border rounded w-full mb-2"
                  value={answers[question] || "0"} // Default to "0" if not set
                  onChange={(e) => handleChange(question, e.target.value)} // Update state on change
                >
                  <option value="0">0 - None</option>
                  <option value="1">1 - Mild</option>
                  <option value="2">2 - Moderate</option>
                  <option value="3">3 - Severe</option>
                </select>
              </div>
            ))}
          </div>
        ))}
        
        <div className="text-xl font-semibold text-blue-600 mb-2"> Blood Test Markers </div>
        {/* Optional ESR and CRP Fields */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">ESR (Erythrocyte Sedimentation Rate) (Optional)</label>
          <input
            type="text"
            placeholder="Enter ESR value"
            className="mt-1 text-gray-700 p-2 border rounded w-full mb-2"
            value={answers["ESR"] || ""}
            onChange={(e) => handleOptionalChange("ESR", e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">CRP (C-reactive Protein) (Optional)</label>
          <input
            type="text"
            placeholder="Enter CRP value"
            className="mt-1 text-gray-700 p-2 border rounded w-full mb-2"
            value={answers["CRP"] || ""}
            onChange={(e) => handleOptionalChange("CRP", e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={calculateScore}
          className="w-full bg-blue-700 text-white py-3 mt-4 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate Score
        </button>
      </form>
    </div>
  );
};

export default ClientFormPage;
