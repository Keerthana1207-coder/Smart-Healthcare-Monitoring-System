import { useState, useEffect } from "react";

export default function HealthAlerts() {
  const [heartRate, setHeartRate] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(
        Math.floor(Math.random() * (130 - 60) + 60)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-red-400 mb-4">
        🚨 Health Alerts
      </h2>

      <p className="mb-3">
        Current Heart Rate: {heartRate} BPM
      </p>

      {heartRate > 100 ? (
        <div className="bg-red-500 p-3 rounded">
          ⚠️ High Heart Rate Detected!
        </div>
      ) : (
        <div className="bg-green-500 p-3 rounded">
          ✅ Heart Rate Normal
        </div>
      )}
    </div>
  );
}