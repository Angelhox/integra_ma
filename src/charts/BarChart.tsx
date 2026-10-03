import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface BarChartProps {
  labels: string[];
  values: number[];
}

export const BarChart = ({ labels, values }: BarChartProps) => {
  const data = {
    labels,

    datasets: [
      {
        label: "Productos vendidos",
        data: values,
        borderRadius: 5,
        barThickness: 24,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,

    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        beginAtZero: true,
      },

      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  const chartHeight = Math.max(labels.length * 40, 300);
  return (
    // <div className="w-full h-full">
    //   <Bar data={data} options={options} />
    // </div>

    <div className="w-full h-full overflow-y-auto">
      <div className="w-full" style={{ height: `${chartHeight}px` }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
