import {
  FaHeartbeat,
  FaChartLine,
  FaUserInjured,
  FaCalendarCheck,
  FaFileMedical,
  FaCog,
  FaHome,
} from "react-icons/fa";

export default function Sidebar({ setPage }) {
return ( <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-cyan-500 p-5"> <h1 className="text-2xl font-bold text-cyan-400 mb-8">
Smart Healthcare </h1>

  <div className="flex flex-col gap-3">
    <button onClick={() => setPage("dashboard")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Dashboard
    </button>

    <button onClick={() => setPage("doctor")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Doctor Dashboard
    </button>

    <button onClick={() => setPage("patients")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Patient Manager
    </button>

    <button onClick={() => setPage("history")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Patient History
    </button>

    <button onClick={() => setPage("appointment")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Appointments
    </button>

    <button onClick={() => setPage("ai")}  className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg"
    >
     AI Prediction
    </button>

    <button onClick={() => setPage("alerts")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Health Alerts
    </button>

    <button onClick={() => setPage("reports")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Reports
    </button>

    <button onClick={() => setPage("medicalreport")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Medical Report PDF
    </button>

    <button onClick={() => setPage("sos")} className="bg-red-700 hover:bg-red-500 p-3 rounded-lg"
>    Emergency SOS
    </button>

    <button onClick={() => setPage("auth")} className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg">
      Login / Signup
    </button>
  </div>
</div>

);
}
