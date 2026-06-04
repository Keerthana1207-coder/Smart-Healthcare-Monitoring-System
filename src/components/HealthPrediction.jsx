export default function HealthPrediction() {
  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-purple-400 mb-4">
        🤖 AI Health Prediction
      </h2>

      <div className="bg-slate-700 p-4 rounded">
        <p>Risk Level: Low</p>
        <p>Heart Condition Risk: 8%</p>
        <p>Diabetes Risk: 12%</p>
        <p>Blood Pressure Risk: 15%</p>
      </div>
    </div>
  );
}