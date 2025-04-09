# Cureation - AI-Powered Inflammation Education & Health Insights Platform

## Overview

Cureation is a personalized platform designed to empower users with knowledge and actionable insights into bodily and cellular inflammation. Developed as part of a hackathon project, Cureation integrates an AI chatbot into the Education page to answer questions about inflammation and provide tailored health suggestions based on NHS guidelines. Using a thorough questionnaire, the system calculates an inflammation risk score through a weighted algorithm, delivering personalized recommendations and further educational content.

## Features

- **AI Chatbot for Education**
  - Integrated directly on the Education page.
  - Provides real-time answers to user queries about inflammation.
  - Enhances understanding of complex health topics with interactive dialogue.

- **Personalized Health Suggestions**
  - Utilizes the OpenAI API (GPT-3.5-turbo) to generate tailored insights.
  - Incorporates trusted sources and guidelines (eg. NHS) to ensure recommendations are clinically sound.
  - Leverages user responses from a smart questionnaire to calculate a personalized inflammation risk score.

- **Questionnaire & Weighted Algorithm**
  - Inflammation questionnaire that takes in user responses (symptoms, lifestyle choices, blood test markers).
  - Calculates an inflammation risk score to provide relevant, personalized health recommendations with AI.

- **Modern, Responsive Design**
  - Built with the MERN stack (Express, React, Node.js, excluding MongoDB).
  - Styled using TailwindCSS and animated with Framer Motion for a sleek, interactive user experience.

## Project Motivation & Goals

Chronic inflammation is a significant factor in many diseases, including heart disease, diabetes, and neurodegenerative disorders. Our goal with Cureation is to:

- Increase public awareness and understanding of the impacts of inflammation.
- Empower users with personalized, actionable health recommendations.
- Combine clinical insights from NHS guidelines with modern AI and data science techniques.
- Foster a proactive approach to health management through education and technology.

Cureation represents a convergence of clinical expertise and digital innovation, aiming to make health education and personalized care accessible to everyone.

## Usage

- **Exploring the Platform:**
  - Navigate to the Education page to interact with the integrated AI chatbot. Ask questions about inflammation and receive personalized insights.
  - Use the questionnaire to input your inflammatory markers (CRP & ESR) and other health data. The system calculates your inflammation risk score and provides tailored health recommendations.

- **Interacting with the Chatbot:**
  - The chatbot uses the OpenAI API to deliver real-time responses based on NHS guidelines.
  - Simply type your question in the chat interface and click “Send” to receive answers and suggestions.

## Team

  ## Applied Clinical Medicine Team
  
  - **Beverley**
    - 3rd Year Medicine MBBS (King’s College London) – Intercalating at Imperial College to learn more on how cancer affects different organs.
  
  - **Joyce**
    - 3rd Year Nutrition & Medical Sciences (University College London) – Focused on Nutrition and combating health misinformation through innovative start-up ideas.
  
  - **Paris**
    - 3rd Year Medicine MBBS (King’s College London) – Aspiring to intercalate in Maths, Computers, and Medicine to deepen expertise in digital health.

  ## Digital HealthTech Team
    
  - **Louis**
    - 3rd Year Mechatronics and Robotics (University of Birmingham) – Developing AI-driven applications to connect users and promote physical well-being.

  - **Valentina**
    - 3rd Year Computer Science (University of Bristol) – Passionate about advancing machine learning and coding across multiple languages to deliver robust digital solutions.

## Technologies Used

- **Frontend:** React, TailwindCSS, Framer Motion
- **Backend:** Express, Node.js
- **AI Integration:** OpenAI API Platform (GPT-3.5-turbo)
- **Additional Services:** Python Flask service for processing NHS guidelines and interfacing with the OpenAI API
- **Database (optional):** MongoDB (for storing user responses and scores)

## Improvements/ Lessons Learned

- **Data Security & Confidentiality**
  - Emphasizes protecting user data throughout the application (following GDPR guidelines).
  - Designed to ensure user confidentiality while delivering actionable health insights.
  - Use JWT/ two-step authentication if using and accessing a database if the user wants to store data and check up on their progress in the future.

## Disclaimer

The content provided by Cureation is for informational purposes only. The AI-driven insights and health suggestions are based on publicly available NHS (and other similar trusted websites) guidelines and user input, and they are not a substitute for professional medical advice. Always consult with a qualified healthcare professional before making any decisions regarding your health or treatment options.

