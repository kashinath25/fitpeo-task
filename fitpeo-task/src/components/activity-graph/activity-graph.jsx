import React from "react";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material/styles";

const ActivityGraph = () => {
  const theme = useTheme();
  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Activity",
        data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: theme.palette.primary.main,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: theme.palette.divider,
        },
      },
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityGraph;
