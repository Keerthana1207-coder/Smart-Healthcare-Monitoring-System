export default function LabReports() {
  const reports = [
    {
      test: "Blood Test",
      result: "Normal",
      date: "01-06-2026",
    },
    {
      test: "Sugar Test",
      result: "110 mg/dL",
      date: "28-05-2026",
    },
    {
      test: "Cholesterol",
      result: "180 mg/dL",
      date: "20-05-2026",
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-cyan-400 mb-4">
        🧪 Laboratory Reports
      </h2>

      {reports.map((report, index) => (
        <div
          key={index}
          className="bg-slate-700 p-4 rounded mb-3"
        >
          <p><strong>Test:</strong> {report.test}</p>
          <p><strong>Result:</strong> {report.result}</p>
          <p><strong>Date:</strong> {report.date}</p>
        </div>
      ))}
    </div>
  );
}