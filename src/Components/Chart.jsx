import React from 'react';
import Chart from 'react-apexcharts';

const Chart = ({ expenses }) => {
  // Prepare the data for the chart
  const categories = expenses.map(expense => expense.category);
  const amounts = expenses.map(expense => expense.itemAmount);

  const options = {
    chart: {
      type: 'pie',
    },
    labels: categories,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  const series = amounts;

  return (
    <div>
      <h2>Expenses by Category</h2>
      <Chart options={options} series={series} type="pie" width="500" />
    </div>
  );
};

export default Chart;