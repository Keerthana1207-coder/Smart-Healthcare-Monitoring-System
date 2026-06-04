export default function AmbulanceTracker() {
  const ambulances = [
    {
      id: "AMB-101",
      location: "Madurai",
      status: "Available",
    },
    {
      id: "AMB-102",
      location: "Theni",
      status: "On Duty",
    },
    {
      id: "AMB-103",
      location: "Dindigul",
      status: "Available",
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8 shadow-lg">
      <h2 className="text-2xl text-cyan-400 mb-4">
        🚑 Ambulance Tracking
      </h2>

      {ambulances.map((ambulance) => (
        <div
          key={ambulance.id}
          className="bg-slate-700 p-4 rounded mb-3"
        >
          <h3 className="font-bold">
            {ambulance.id}
          </h3>

          <p>Location: {ambulance.location}</p>

          <p>
            Status:
            <span
              className={`ml-2 ${
                ambulance.status === "Available"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {ambulance.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}