export default function MedicalRecords() {
  const records = [
    {
      date: "01-06-2026",
      diagnosis: "Common Cold",
      doctor: "Dr. Kumar",
    },
    {
      date: "15-05-2026",
      diagnosis: "Routine Checkup",
      doctor: "Dr. Priya",
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-green-400 mb-4">
        📋 Medical Records
      </h2>

      {records.map((record, index) => (
        <div
          key={index}
          className="bg-slate-700 p-4 rounded mb-3"
        >
          <p><strong>Date:</strong> {record.date}</p>
          <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
          <p><strong>Doctor:</strong> {record.doctor}</p>
        </div>
      ))}
    </div>
  );
}