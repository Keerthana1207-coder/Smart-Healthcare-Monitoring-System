export default function DashboardCards() {
  const cards = [
    {
      title: "Heart Rate",
      value: "78 BPM",
    },
    {
      title: "Oxygen",
      value: "98%",
    },
    {
      title: "Temperature",
      value: "36.8°C",
    },
    {
      title: "Blood Pressure",
      value: "120/80",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
        className="backdrop-blur-lg bg-white/10 border border-white/20"        >
          <h2 className="text-cyan-400 text-xl">
            {card.title}
          </h2>

          <h1 className="text-3xl font-bold mt-3">
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  );
}