import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import '../css/Why.css'

ChartJS.register(...registerables);

const types = {
  creativity: 'creativity',
  language: 'language',
  IQ: 'IQ'
};

function Graph(props) {
  const chartRef = useRef(null);
  const [newChartData, setNewChartData] = useState({
    datasets: [],
  });

  const fillBorderColor = (type) => {
    switch (type) {
      case types.creativity: return "rgb(255,167,52)";
      case types.language: return "rgb(151,59,221)";
      case types.IQ: return "rgb(113,193,154)";
    }
  }

  const fillGradientColor = (type, gradient) => {
    switch (type) {
      case types.creativity:
        gradient.addColorStop(1, 'rgb(255,66,131)');
        gradient.addColorStop(0, 'rgb(255,155,23)');
        break;
      case types.language: {
        gradient.addColorStop(1, 'rgb(38,99,188)');
        gradient.addColorStop(0, 'rgb(151,59,221)');
        break;
      };
      case types.IQ: {
        gradient.addColorStop(1, 'rgb(65,185,184)');
        gradient.addColorStop(0, 'rgb(116,194,153)');
        break;
      };
    }
  }

  function createGradient(ctx, type) {
    const gradient = ctx.createLinearGradient(1, 100, 100, 300);
    fillGradientColor(type, gradient);

    return gradient;
  }

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      labels: props.chartData.labels,
      datasets: [
        {
          data: props.chartData.datasets[0].data,
          backgroundColor: createGradient(chart.ctx, props.type),
        },
      ],
    };

    setNewChartData(chartData);
  }, []);

  let delayed;

  return (
    <div className="chart" style={{ width: "20rem", height: "16rem" }}>
      <div className="chart-p"><p>{props.title}</p></div>
      <Bar
        ref={chartRef}
        data={newChartData}
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
                display: false,
                borderColor: fillBorderColor(props.type),
              },
            },
            y: {
              grid: {
                display: false,
                borderColor: fillBorderColor(props.type),
              },
            }
          },
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 1000 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
        }}
      />
    </div>
  );
}

export default Graph;
