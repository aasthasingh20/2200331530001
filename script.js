// Static data - You can replace this with live API calls
const stockData = [
  { symbol: 'AAPL', price: 187.23 },
  { symbol: 'GOOG', price: 2875.91 },
  { symbol: 'MSFT', price: 345.67 },
  { symbol: 'AMD', price: 286.98},
  { symbol: 'AMZN', price: 456.23},
  { symbol: 'NVDA', price: 3267.76},
  { symbol: 'META', price: 5623.63},
  { symbol: 'PYPL', price: 983.73},
  { symbol: 'LLY', price: 2330.87},
];

// Load stock prices
window.onload = () => {
  const container = document.getElementById('stock-list');
  stockData.forEach(stock => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${stock.symbol}</h3><p>Price: $${stock.price.toFixed(2)}</p>`;
    container.appendChild(div);
  });

  // Draw correlation heatmap
  const ctx = document.getElementById('heatmapChart').getContext('2d');
  new Chart(ctx, {
    type: 'matrix',
    data: {
      datasets: [{
        label: 'Correlation',
        data: [
          { x: 0, y: 0, v: 1 },
          { x: 0, y: 1, v: 0.87 },
          { x: 0, y: 2, v: 0.75 },
          { x: 1, y: 0, v: 0.87 },
          { x: 1, y: 1, v: 1 },
          { x: 1, y: 2, v: 0.66 },
          { x: 2, y: 0, v: 0.75 },
          { x: 2, y: 1, v: 0.66 },
          { x: 2, y: 2, v: 1 },
        ],
        backgroundColor(ctx) {
          const value = ctx.dataset.data[ctx.dataIndex].v;
          const alpha = value;
          return `rgba(255, 99, 132, ${alpha})`;
        },
        width: ({chart}) => (chart.chartArea || {}).width / 3 - 1,
        height: ({chart}) => (chart.chartArea || {}).height / 3 - 1,
        xAxisID: 'x',
        yAxisID: 'y',
      }]
    },
    options: {
      scales: {
        x: {
          type: 'category',
          labels: ['AAPL', 'GOOG', 'MSFT'],
          position: 'top',
          grid: { display: false }
        },
        y: {
          type: 'category',
          labels: ['AAPL', 'GOOG', 'MSFT'],
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `Correlation: ${ctx.raw.v}`
          }
        }
      }
    },
    plugins: [{
      id: 'matrix',
      beforeInit: chart => {
        chart.data.datasets.forEach(dataset => {
          dataset.type = 'matrix';
        });
      }
    }]
  });
};
