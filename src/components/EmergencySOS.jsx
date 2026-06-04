import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function EmergencySOS() {
  const [patientName, setPatientName] = useState("");
  const [location, setLocation] = useState("");

  const sendSOS = async () => {
    if (!patientName || !location) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "emergency_alerts"), {
        patientName,
        location,
        status: "Emergency",
        createdAt: new Date(),
      });

      alert("🚨 SOS Alert Sent Successfully");

      setPatientName("");
      setLocation("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="bg-red-900 p-8 rounded-2xl mb-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        🚨 Emergency SOS
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        <button
          onClick={sendSOS}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-bold text-white"
        >
          Send SOS Alert
        </button>
      </div>
    </div>
  );
}