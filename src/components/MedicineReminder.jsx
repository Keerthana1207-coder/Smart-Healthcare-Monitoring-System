export default function MedicineReminder() {
  const medicines = [
    {
      name: "Paracetamol",
      time: "08:00 AM",
    },
    {
      name: "Vitamin D",
      time: "01:00 PM",
    },
    {
      name: "Antibiotic",
      time: "08:00 PM",
    },
  ];

  return (
    <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-6 mt-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        Medicine Reminder
      </h2>

      {medicines.map((medicine, index) => (
        <div
          key={index}
          className="bg-slate-800 p-4 rounded-lg mb-3"
        >
          <h3 className="font-bold">
            {medicine.name}
          </h3>

          <p className="text-cyan-300">
            {medicine.time}
          </p>
        </div>
      ))}
    </div>
  );
}