import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function PatientManager() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");

  const patientsCollection = collection(db, "patients");

  // Load Patients from Firestore
  const fetchPatients = async () => {
    try {
      const data = await getDocs(patientsCollection);

      setPatients(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Save Patient
  const savePatient = async () => {
    if (!name || !age || !condition) {
      alert("Fill all fields");
      return;
    }

    try {
      await addDoc(patientsCollection, {
        name,
        age,
        condition,
        createdAt: new Date(),
      });

      setName("");
      setAge("");
      setCondition("");

      alert("Patient Saved Successfully ✅");

      fetchPatients();
    } catch (error) {
      console.error(error);
      alert("Error Saving Patient ❌");
    }
  };

  // Delete Patient
  const deletePatient = async (id) => {
    try {
      await deleteDoc(doc(db, "patients", id));

      alert("Patient Deleted ✅");

      fetchPatients();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        Patient Management
      </h2>

      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Patient Name"
          className="p-3 rounded text-black"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="p-3 rounded text-black"
        />

        <input
          value={condition}
          onChange={(e) =>
            setCondition(e.target.value)
          }
          placeholder="Condition"
          className="p-3 rounded text-black"
        />
      </div>

      <button
        onClick={savePatient}
        className="bg-green-500 px-5 py-2 rounded mb-4"
      >
        Add Patient
      </button>

      <div className="space-y-3">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="bg-slate-700 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                {patient.name}
              </h3>

              <p>Age: {patient.age}</p>

              <p>
                Condition: {patient.condition}
              </p>
            </div>

            <button
              onClick={() =>
                deletePatient(patient.id)
              }
              className="bg-red-500 px-3 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}