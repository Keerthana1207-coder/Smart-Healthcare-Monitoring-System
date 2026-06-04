import { useEffect, useState } from "react";

export default function LiveVitals() {
  const [heartRate, setHeartRate] = useState(78);
  const [oxygen, setOxygen] = useState(98);
  const [temperature, setTemperature] = useState(36.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(70 + Math.floor(Math.random() * 20));
      setOxygen(95 + Math.floor(Math.random() * 5));
      setTemperature((36 + Math.random() * 2).toFixed(1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className="bg-red-800 p-5 rounded-xl">
        <h3>❤️ Heart Rate</h3>
        <p className="text-4xl font-bold">{heartRate} BPM</p>
      </div>

      <div className="bg-blue-800 p-5 rounded-xl">
        <h3>🫁 Oxygen Level</h3>
        <p className="text-4xl font-bold">{oxygen}%</p>
      </div>

      <div className="bg-yellow-700 p-5 rounded-xl">
        <h3>🌡 Temperature</h3>
        <p className="text-4xl font-bold">{temperature}°C</p>
      </div>
    </div>
  );
}