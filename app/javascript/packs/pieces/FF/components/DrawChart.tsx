import * as React from 'react';
import { Line } from 'react-chartjs-2';

const drawChart = ({ steps }) => {
  const data = steps === undefined ?
    [] :
    steps.reduce((result, step) => (
      [...result, ...Array(step.time).fill(step.power)]
    ), [0]); // tslint:disable-line:align
  return (
    <Line
      data={{
        labels: [...Array.from(Array(data.length).keys())],
        datasets: [{
          data,
          label: 'FF',
          pointBackgroundColor: '#FF1200',
          pointBorderColor: '#FF1200',
          steppedLine: 'after',
          borderWidth: 1,
          pointRadius: 3,
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          borderColor: '#FF1200',
        }],
      }}
      options={{
        animation: {
          duration: 0,
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'time',
            },
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 6,
            },
            scaleLabel: {
              display: true,
              labelString: 'power',
            },
          }],
        },
      }}
    />
  );
};

export default drawChart;
