import { useState } from "react";

export default function BedAvailability() {
  const [totalBeds] = useState(100);
  const [occupiedBeds] = useState(68);

  const availableBeds = totalBeds - occupiedBeds;

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-6">
        🏥 Hospital Bed Availability
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-slate-700 p-5 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-blue-400">
            {totalBeds}
          </h3>
          <p>Total Beds</p>
        </div>

        <div className="bg-slate-700 p-5 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-red-400">
            {occupiedBeds}
          </h3>
          <p>Occupied Beds</p>
        </div>

        <div className="bg-slate-700 p-5 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-green-400">
            {availableBeds}
          </h3>
          <p>Available Beds</p>
        </div>
      </div>
    </div>
  );
}