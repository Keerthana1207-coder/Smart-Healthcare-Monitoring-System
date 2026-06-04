import { useState } from "react";

export default function PatientSearch() {
  const [search, setSearch] = useState("");

  const patients = [
    "John",
    "Priya",
    "Rahul",
    "Arun",
    "Karthik",
  ];

  const filtered = patients.filter((patient) =>
    patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        Patient Search
      </h2>

      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded text-black mb-4"
      />

      {filtered.map((patient, index) => (
        <div
          key={index}
          className="bg-slate-700 p-3 rounded mb-2"
        >
          {patient}
        </div>
      ))}
    </div>
  );
}