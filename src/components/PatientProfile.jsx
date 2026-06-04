export default function PatientProfile() {
  const patient = {
    name: "Rahul Kumar",
    age: 24,
    bloodGroup: "O+",
    height: "175 cm",
    weight: "70 kg",
    allergies: "None",
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-cyan-400 mb-4">
        👤 Patient Profile
      </h2>

      <div className="space-y-2">
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
        <p><strong>Height:</strong> {patient.height}</p>
        <p><strong>Weight:</strong> {patient.weight}</p>
        <p><strong>Allergies:</strong> {patient.allergies}</p>
      </div>
    </div>
  );
}