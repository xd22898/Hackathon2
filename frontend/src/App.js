// import React, { useEffect, useState } from "react";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:9000")
//       .then((response) => response.text())
//       .then((data) => setMessage(data))
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1 className="text-3xl font-bold underline">
//         Welcome to My Fullstack Website
//       </h1>
//       <p>Backend says: {message}</p>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ClientFormPage from "./pages/ClientFormPage";
import ScorePage from "./pages/ScorePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Shared Header */}
        <header className="py-4">
          <div className="container mx-auto">
            {/* Company Name */}
            <h1 className="text-center text-4xl font-bold">
              Your Company Name
            </h1>
            {/* Navigation Menu (Score page is omitted) */}
            <nav className="mt-4 flex justify-center space-x-4">
              <Link to="/" className="px-4 py-2 hover:bg-gray-700 rounded">
                Home
              </Link>
              <Link
                to="/education"
                className="px-4 py-2 hover:bg-gray-700 rounded"
              >
                Education
              </Link>
              <Link
                to="/client-form"
                className="px-4 py-2 hover:bg-gray-700 rounded"
              >
                Client Form
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/client-form" element={<ClientFormPage />} />
            <Route path="/score" element={<ScorePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
