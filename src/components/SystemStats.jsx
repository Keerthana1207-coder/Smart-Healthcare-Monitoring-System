export default function SystemStats() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Total Patients</h3>
        <p className="text-3xl font-bold">125</p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Active Monitoring</h3>
        <p className="text-3xl font-bold">43</p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Appointments Today</h3>
        <p className="text-3xl font-bold">18</p>
      </div>
    </div>
  );
}