import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function HealthTrends() {
  const data = [
    { month: "Jan", patients: 20 },
    { month: "Feb", patients: 35 },
    { month: "Mar", patients: 28 },
    { month: "Apr", patients: 45 },
    { month: "May", patients: 52 },
    { month: "Jun", patients: 60 },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        📈 Health Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="patients"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}