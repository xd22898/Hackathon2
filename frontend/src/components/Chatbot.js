import React, { useState } from "react";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseText(""); // clear previous response
    try {
      const res = await fetch("/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, temp: 0.7 }),
      });
      const data = await res.json();
      if (data.status === "ok") {
        setResponseText(data.text);
      } else {
        setResponseText("Error: " + data.text);
      }
    } catch (error) {
      console.error("Error fetching suggestion:", error);
      setResponseText("Error fetching suggestion.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">
        Hey! I am InflaBuddy, your AI Teacher.
      </h2>
      <form onSubmit={handleSend}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
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
