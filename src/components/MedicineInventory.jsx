import { useState } from "react";

export default function MedicineInventory() {
  const [medicines, setMedicines] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addMedicine = () => {
    if (!name || !quantity) {
      alert("Fill all fields");
      return;
    }

    const newMedicine = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
    };

    setMedicines([...medicines, newMedicine]);

    setName("");
    setQuantity("");
  };

  const deleteMedicine = (id) => {
    setMedicines(
      medicines.filter((medicine) => medicine.id !== id)
    );
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        💊 Medicine Inventory
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-5">
        <input
          type="text"
          placeholder="Medicine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-white text-black"
        />

        <input
          type="number"
          placeholder="Stock Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="p-3 rounded bg-white text-black"
        />
      </div>

      <button
        onClick={addMedicine}
        className="bg-green-500 text-black font-bold px-5 py-3 rounded"
      >
        Add Medicine
      </button>

      <div className="mt-6 space-y-3">
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-slate-700 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                {medicine.name}
              </h3>

              <p>
                Stock:
                <span
                  className={
                    medicine.quantity < 20
                      ? " text-red-400 font-bold"
                      : " text-green-400 font-bold"
                  }
                >
                  {" "}
                  {medicine.quantity}
                </span>
              </p>

              {medicine.quantity < 20 && (
                <p className="text-red-400 text-sm">
                  ⚠ Low Stock Alert
                </p>
              )}
            </div>

            <button
              onClick={() =>
                deleteMedicine(medicine.id)
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