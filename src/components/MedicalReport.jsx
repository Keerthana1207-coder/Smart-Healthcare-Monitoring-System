import { useState } from "react";

export default function MedicalReport() {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");
  const [doctor, setDoctor] = useState("");
  const [report, setReport] = useState("");

  const generateReport = () => {
    if (!patientName || !age || !disease || !doctor) {
      alert("Please fill all fields");
      return;
    }

    const reportData = `
SMART HEALTHCARE MONITORING SYSTEM

Patient Name : ${patientName}
Age          : ${age}
Disease      : ${disease}
Doctor       : ${doctor}

Diagnosis:
Patient diagnosed with ${disease}.

Recommendation:
• Take prescribed medication regularly
• Follow doctor's advice
• Attend regular health checkups

Status:
Stable

Generated On:
${new Date().toLocaleString()}
`;

    setReport(reportData);
  };

  const downloadReport = () => {
    if (!report) {
      alert("Generate report first");
      return;
    }

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${patientName}_Medical_Report.txt`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        📄 Medical Report Generator
      </h2>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) =>
            setPatientName(e.target.value)
          }
          className="p-3 rounded bg-white text-black"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) =>
            setAge(e.target.value)
          }
          className="p-3 rounded bg-white text-black"
        />

        <input
          type="text"
          placeholder="Disease"
          value={disease}
          onChange={(e) =>
            setDisease(e.target.value)
          }
          className="p-3 rounded bg-white text-black"
        />

        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) =>
            setDoctor(e.target.value)
          }
          className="p-3 rounded bg-white text-black"
        />

        <button
          onClick={generateReport}
          className="bg-cyan-500 text-black font-bold p-3 rounded"
        >
          Generate Report
        </button>
      </div>

      {report && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-3">
            Generated Report
          </h3>

          <pre className="bg-slate-700 p-4 rounded whitespace-pre-wrap">
            {report}
          </pre>

          <button
            onClick={downloadReport}
            className="mt-4 bg-green-500 text-black font-bold p-3 rounded"
          >
            Download Report
          </button>
        </div>
      )}
    </div>
  );
}