export default function HospitalOverview() {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">
      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Total Doctors</h3>
        <p className="text-3xl font-bold">15</p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Total Patients</h3>
        <p className="text-3xl font-bold">125</p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Available Beds</h3>
        <p className="text-3xl font-bold">32</p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Emergency Cases</h3>
        <p className="text-3xl font-bold">4</p>
      </div>
    </div>
  );
}