import { useState } from "react";

import Sidebar from "./components/Sidebar";
import HospitalBanner from "./components/HospitalBanner";
import DoctorDashboard from "./components/DoctorDashboard";
import HealthTrends from "./components/HealthTrends";
import SystemStats from "./components/SystemStats";
import LiveVitals from "./components/LiveVitals";
import MedicineInventory from "./components/MedicineInventory";
import HealthAnalytics from "./components/HealthAnalytics";
import EmergencySOS from "./components/EmergencySOS";
import BedAvailability from "./components/BedAvailability";
import PatientSearch from "./components/PatientSearch";
import PatientManager from "./components/PatientManager";
import PatientHistory from "./components/PatientHistory";
import AdminDashboard from "./components/AdminDashboard";
import Appointment from "./components/Appointment";
import HealthAlerts from "./components/HealthAlerts";
import MedicineReminder from "./components/MedicineReminder";
import NotificationCenter from "./components/NotificationCenter";
import ReportDownload from "./components/ReportDownload";
import MedicalReport from "./components/MedicalReport";
import AIHealthPrediction from "./components/AIHealthPrediction";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
const [darkMode, setDarkMode] = useState(true);
const [page, setPage] = useState("dashboard");

return (
<div
className={`min-h-screen ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-black"
      }`}
> <Sidebar setPage={setPage} />

  <div className="ml-64 p-6">
    <div className="flex justify-end mb-6">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-cyan-500 px-4 py-2 rounded-lg"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </div>

    {page === "dashboard" && (
      <>
        <HospitalBanner />
        <SystemStats />
        <LiveVitals />
        <HealthAnalytics />
        <AdminDashboard />
        <PatientSearch />
        <MedicineInventory />
        <HealthTrends />
        <MedicineReminder />
        <NotificationCenter />
        <BedAvailability />
      </>
    )}

    {page === "doctor" && <DoctorDashboard />}

    {page === "patients" && <PatientManager />}

    {page === "history" && <PatientHistory />}

    {page === "appointment" && <Appointment />}

    {page === "alerts" && <HealthAlerts />}

    {page === "reports" && <ReportDownload />}

    {page === "ai" && <AIHealthPrediction />}

    {page === "sos" && <EmergencySOS />}

    {page === "medicalreport" && <MedicalReport />}

    {page === "auth" && (
      <>
        <Signup />
        <Login />
      </>
    )}
  </div>
</div>

);
}

export default App;
