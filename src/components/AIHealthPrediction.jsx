import { useState } from "react";

export default function AIHealthPrediction() {
  const [heartRate, setHeartRate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [result, setResult] = useState("");

  const predictHealth = () => {
    const hr = Number(heartRate);
    const temp = Number(temperature);
    const spo2 = Number(oxygen);

    if (!heartRate || !temperature || !oxygen) {
      alert("Please fill all fields");
      return;
    }

    if (hr > 110 || temp > 38 || spo2 < 90) {
      setResult("🔴 Critical Condition");
    } else if (hr > 90 || temp > 37 || spo2 < 95) {
      setResult("🟡 Warning");
    } else {
      setResult("🟢 Healthy");
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-6">
        🤖 AI Health Prediction
      </h2>

      <div className="grid gap-4">
        <input
          type="number"
          placeholder="Heart Rate (BPM)"
          value={heartRate}
          onChange={(e) => setHeartRate(e.target.value)}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          type="number"
          placeholder="Temperature (°C)"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          type="number"
          placeholder="Oxygen Level (%)"
          value={oxygen}
          onChange={(e) => setOxygen(e.target.value)}
          className="p-3 rounded-lg bg-white text-black"
        />

        <button
          onClick={predictHealth}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold p-3 rounded-lg"
        >
          Analyze Health
        </button>
      </div>

      {result && (
        <div className="mt-6 p-4 bg-slate-700 rounded-lg">
          <h3 className="text-xl font-bold">
            Prediction Result
          </h3>

          <p className="text-2xl mt-2">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}