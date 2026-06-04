export default function HealthStatus() {
  return (
    <div className="bg-slate-900 border border-green-500 rounded-2xl p-6 mt-8">
      <h2 className="text-2xl text-green-400 mb-4">
        Live Health Status
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-slate-800 p-4 rounded-xl">
          <h3>Status</h3>
          <p className="text-green-400 font-bold text-xl">
            Stable
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h3>Risk Level</h3>
          <p className="text-yellow-400 font-bold text-xl">
            Low
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h3>Monitoring</h3>
          <p className="text-cyan-400 font-bold text-xl">
            Active
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h3>Last Update</h3>
          <p className="font-bold text-xl">
            Just Now
          </p>
        </div>

      </div>
    </div>
  );
}