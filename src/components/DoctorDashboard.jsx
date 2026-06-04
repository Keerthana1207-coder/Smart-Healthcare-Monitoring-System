import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function DoctorDashboard() {
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] =
    useState(0);
  const [sosCount, setSosCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const patients = await getDocs(
        collection(db, "patients")
      );

      const appointments = await getDocs(
        collection(db, "appointments")
      );

      const sos = await getDocs(
        collection(db, "emergency_alerts")
      );

      setPatientCount(patients.size);
      setAppointmentCount(appointments.size);
      setSosCount(sos.size);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-6">
        👨‍⚕️ Doctor Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-slate-700 p-5 rounded-xl">
          <h3 className="text-xl font-bold text-green-400">
            {patientCount}
          </h3>
          <p>Total Patients</p>
        </div>

        <div className="bg-slate-700 p-5 rounded-xl">
          <h3 className="text-xl font-bold text-cyan-400">
            {appointmentCount}
          </h3>
          <p>Appointments</p>
        </div>

        <div className="bg-slate-700 p-5 rounded-xl">
          <h3 className="text-xl font-bold text-red-400">
            {sosCount}
          </h3>
          <p>Emergency Alerts</p>
        </div>
      </div>
    </div>
  );
}