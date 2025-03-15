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
import { motion } from "framer-motion";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white font-sans">
        {/* Header */}
        <header className="py-6 shadow-lg bg-gray-900">
          <div className="container mx-auto flex flex-col items-center">
            <motion.h1
              className="text-5xl font-extrabold text-center text-purple-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              Your Company Name
            </motion.h1>
            <nav className="mt-4 flex space-x-6 text-lg">
              <Link to="/" className="px-4 py-2 rounded-lg transition hover:bg-blue-500">
                Home
              </Link>
              <Link to="/education" className="px-4 py-2 rounded-lg transition hover:bg-blue-500">
                Education
              </Link>
              <Link to="/client-form" className="px-4 py-2 rounded-lg transition hover:bg-blue-500">
                Client Form
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/client-form" element={<ClientFormPage />} />
              <Route path="/score" element={<ScorePage />} />
            </Routes>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
