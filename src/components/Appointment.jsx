import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const appointmentCollection = collection(
    db,
    "appointments"
  );

  const fetchAppointments = async () => {
    const data = await getDocs(
      appointmentCollection
    );

    setAppointments(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const bookAppointment = async () => {
    if (!patientName || !date || !time) {
      alert("Fill all fields");
      return;
    }

    try {
      await addDoc(appointmentCollection, {
        patientName,
        date,
        time,
        status: "Booked",
      });

      alert("Appointment Booked ✅");

      setPatientName("");
      setDate("");
      setTime("");

      fetchAppointments();
    } catch (error) {
      alert(error.message);
    }
  };

  const cancelAppointment = async (id) => {
    await deleteDoc(
      doc(db, "appointments", id)
    );

    fetchAppointments();
  };

  return (
    <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-6 mt-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        Doctor Appointment
      </h2>

      <div className="grid gap-4 mb-5">
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) =>
            setPatientName(e.target.value)
          }
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          className="p-3 rounded-lg bg-white text-black"
        />

        <input
          type="time"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
          className="p-3 rounded-lg bg-white text-black"
        />

        <button
          onClick={bookAppointment}
          className="bg-cyan-500 text-black p-3 rounded-lg font-bold"
        >
          Book Appointment
        </button>
      </div>

      <div className="space-y-3">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-slate-800 p-4 rounded flex justify-between"
          >
            <div>
              <h3 className="font-bold">
                {appt.patientName}
              </h3>

              <p>Date: {appt.date}</p>

              <p>Time: {appt.time}</p>

              <p className="text-green-400">
                {appt.status}
              </p>
            </div>

            <button
              onClick={() =>
                cancelAppointment(appt.id)
              }
              className="bg-red-500 px-3 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}