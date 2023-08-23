import React from "react";
import { Bar, Chart as ChartJS } from "react-chartjs-2";
import './css/Why.css'


function Chart(props) {
  return (
    <div className="chart" style={{ width: "20rem", height: "16rem" }}>
      <div className="chart-p"><p>{props.title}</p></div>
      <Bar
        data={props.chartData}
        options={{
          ticks: {
            stepSize: 25,
            max: 100,
          },
        plugins: {
            legend: {
                display: false,
            }
        },
          maintainAspectRatio: false,
          borderRadius: 5,
          scales: {
            x: {
              grid: {
                display: false
              },
            },
            y: {
              grid: {
                display: false
              },
            }
          },
        }}
      />
    </div>
  );
}

export default Chart;
