import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Welcome to My Fullstack Website
      </h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
