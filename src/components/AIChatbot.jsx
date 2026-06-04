import { useState } from "react";

export default function AIChatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getResponse = () => {
    const q = question.toLowerCase();

    if (q.includes("fever")) {
      setAnswer("🌡 Fever may indicate an infection. Drink fluids and consult a doctor if symptoms persist.");
    } else if (q.includes("heart")) {
      setAnswer("❤️ A normal resting heart rate is usually between 60 and 100 BPM.");
    } else if (q.includes("oxygen")) {
      setAnswer("🫁 Normal oxygen saturation is typically 95%–100%.");
    } else {
      setAnswer("🤖 Please consult a healthcare professional for accurate medical advice.");
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-purple-400 mb-4">
        AI Healthcare Chatbot
      </h2>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a health question..."
        className="w-full p-3 rounded text-black mb-3"
      />

      <button
        onClick={getResponse}
        className="bg-purple-500 px-5 py-2 rounded"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-4 p-4 bg-slate-700 rounded">
          {answer}
        </div>
      )}
    </div>
  );
}