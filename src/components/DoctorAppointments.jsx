export default function DoctorAppointments() {
  const appointments = [
    {
      patient: "Rahul",
      doctor: "Dr. Kumar",
      time: "10:00 AM",
    },
    {
      patient: "Priya",
      doctor: "Dr. Arun",
      time: "11:30 AM",
    },
    {
      patient: "Vignesh",
      doctor: "Dr. Priya",
      time: "02:00 PM",
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        📅 Today's Appointments
      </h2>

      {appointments.map((item, index) => (
        <div
          key={index}
          className="bg-slate-700 p-4 rounded mb-3"
        >
          <h3 className="font-bold">
            {item.patient}
          </h3>

          <p>Doctor: {item.doctor}</p>

          <p>Time: {item.time}</p>
        </div>
      ))}
    </div>
  );
}