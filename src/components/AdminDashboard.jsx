import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function AdminDashboard() {
  const [patients, setPatients] = useState(0);
  const [appointments, setAppointments] = useState(0);
  const [alerts, setAlerts] = useState(0);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const patientData = await getDocs(
        collection(db, "patients")
      );

      const appointmentData = await getDocs(
        collection(db, "appointments")
      );

      const alertData = await getDocs(
        collection(db, "emergency_alerts")
      );

      setPatients(patientData.size);
      setAppointments(appointmentData.size);
      setAlerts(alertData.size);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-6">
        📊 Admin Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-slate-700 p-5 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-green-400">
            {patients}
          </h3>
          <p>Total Patients</p>
        </div>

        <div className="bg-slate-700 p-5 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-cyan-400">
            {appointments}
          </h3>
          <p>Appointments</p>
        </div>

        <div className="bg-slate-700 p-5 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-red-400">
            {alerts}
          </h3>
          <p>Emergency Alerts</p>
        </div>
      </div>
    </div>
  );
}