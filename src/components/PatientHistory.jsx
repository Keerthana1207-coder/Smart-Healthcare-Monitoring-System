import { useState } from "react";

export default function PatientHistory() {
  const [patients, setPatients] = useState([
    {
      name: "John",
      age: 28,
      condition: "Fever",
    },
    {
      name: "Priya",
      age: 24,
      condition: "Normal",
    },
  ]);

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-cyan-400 mb-4">
        Patient History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-700">
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Condition</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={index}
                className="border-b border-slate-700"
              >
                <td className="p-3">{patient.name}</td>
                <td className="p-3">{patient.age}</td>
                <td className="p-3">{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}