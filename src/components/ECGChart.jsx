import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement
);

export default function ECGChart() {
const data = {
labels: ["1", "2", "3", "4", "5", "6", "7"],
datasets: [
{
label: "Heart Rate",
data: [72, 75, 70, 82, 78, 85, 80],
borderColor: "cyan",
},
],
};

return ( <div className="bg-slate-800 p-6 rounded-xl"> <h2 className="text-2xl text-cyan-400 mb-4">
ECG Monitoring </h2>

  <Line data={data} />
</div>

);
}
