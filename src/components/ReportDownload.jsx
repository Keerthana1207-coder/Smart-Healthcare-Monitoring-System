import { jsPDF } from "jspdf";

export default function ReportDownload() {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(
      "Smart Healthcare Monitoring Report",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text("Heart Rate : 78 BPM", 20, 40);
    doc.text("Oxygen Level : 98%", 20, 50);
    doc.text("Temperature : 36.8°C", 20, 60);
    doc.text("Health Score : 92%", 20, 70);

    doc.text("Status : Stable", 20, 90);
    doc.text("Risk Level : Low", 20, 100);

    doc.save("Healthcare_Report.pdf");
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-green-400 mb-4">
        PDF Report
      </h2>

      <button
        onClick={generatePDF}
        className="bg-green-500 px-5 py-2 rounded"
      >
        📄 Download PDF Report
      </button>
    </div>
  );
}