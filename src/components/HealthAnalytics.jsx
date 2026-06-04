export default function HealthAnalytics() {
  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        Health Analytics
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-green-400">Average Heart Rate</h3>
          <p className="text-3xl font-bold">76 BPM</p>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-blue-400">Oxygen Level</h3>
          <p className="text-3xl font-bold">98%</p>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-yellow-400">Temperature</h3>
          <p className="text-3xl font-bold">36.8°C</p>
        </div>
      </div>
    </div>
  );
}