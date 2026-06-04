import { useState } from "react";

export default function VoiceAssistant() {
  const [text, setText] = useState("");

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl text-pink-400 mb-4">
        Voice Assistant
      </h2>

      <button
        onClick={startListening}
        className="bg-pink-500 px-5 py-2 rounded"
      >
        🎤 Start Listening
      </button>

      {text && (
        <div className="mt-4 p-3 bg-slate-700 rounded">
          <strong>You said:</strong> {text}
        </div>
      )}
    </div>
  );
}