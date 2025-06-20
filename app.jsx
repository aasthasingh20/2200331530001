// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { StockPage } from './pages/StockPage';
import { CorrelationHeatmap } from './pages/CorrelationHeatmap';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/heatmap" element={<CorrelationHeatmap />} />
      </Routes>
    </Router>
  );
}

// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Stock Page</Link>
      <Link to="/heatmap">Correlation Heatmap</Link>
    </nav>
  );
}

// pages/StockPage.jsx
import React, { useState, useEffect } from 'react';

export function StockPage() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    setStocks([
      { symbol: 'AAPL', price: 187.23 },
      { symbol: 'GOOG', price: 2875.91 },
      { symbol: 'MSFT', price: 345.67 },
      { symbol: 'AMD', price: 286.98},
      { symbol: 'AMZN', price: 456.23},
      { symbol: 'NVDA', price: 3267.76},
      { symbol: 'META', price: 5623.63},
      { symbol: 'PYPL', price: 983.73},
      { symbol: 'LLY', price: 2330.87},
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Stock Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stocks.map(stock => (
          <div key={stock.symbol} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{stock.symbol}</h3>
            <p>Price: ${stock.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// pages/CorrelationHeatmap.jsx
import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const data = [
  {
    id: 'AAPL',
    data: [
      { x: 'AAPL', y: 1 },
      { x: 'GOOG', y: 0.87 },
      { x: 'MSFT', y: 0.75 },
      { x: 'AMD', y: 0.23},
      { x: 'AMZN', y: 0.89},
      { x: 'NVDA', y: 0.33},
      { x: 'META', y: 0.44},
      { x: 'PYPL', y: 0.97},
      { x: 'LLY', y: 0.1},
    ],
  },
  {
    id: 'GOOG',
    data: [
      { x: 'AAPL', y: 0.87 },
      { x: 'GOOG', y: 1 },
      { x: 'MSFT', y: 0.66 },
      { x: 'AMD', y: 0.3},
      { x: 'AMZN', y: 0.24},
      { x: 'NVDA', y: 0.23},
      { x: 'META', y: 0.42},
      { x: 'PYPL', y: 0.3},
      { x: 'LLY', y: 0.67},
    ],
  },
  {
    id: 'MSFT',
    data: [
      { x: 'AAPL', y: 0.75 },
      { x: 'GOOG', y: 0.66 },
      { x: 'MSFT', y: 1 },
      { x: 'AMD', y: 0.1},
      { x: 'AMZN', y: 0.67},
      { x: 'NVDA', y: 0.34},
      { x: 'META', y: 0.34},
      { x: 'PYPL', y: 0.76},
      { x: 'LLY', y: 0.46},
    ],
  },
  {
    id: 'AMD',
    data:[
      { x: 'AAPL', y: 0.95 },
      { x: 'GOOG', y: 0.64 },
      { x: 'MSFT', y: 0.34},
      { x: 'AMD', y: 1},
      { x: 'AMZN', y: 0.34},
      { x: 'NVDA', y: 0.63},
      { x: 'META', y: 0.51},
      { x: 'PYPL', y: 0.83},
      { x: 'LLY', y: 0.52},
    ],
  },
  {
   id: 'AMZN',
   data:[
      { x: 'AAPL', y: 0.72 },
      { x: 'GOOG', y: 0.48 },
      { x: 'MSFT', y: 0.74},
      { x: 'AMD', y: 0.35},
      { x: 'AMZN', y: 1},
      { x: 'NVDA', y: 0.66},
      { x: 'META', y: 0.54},
      { x: 'PYPL', y: 0.20},
      { x: 'LLY', y: 0.35},
   ],
  },
  {
    id:'NVDA',
    data:[
      { x: 'AAPL', y: 0.75},
      { x: 'GOOG', y: 0.41 },
      { x: 'MSFT', y: 0.87},
      { x: 'AMD', y: 0.95},
      { x: 'AMZN', y: 0.45},
      { x: 'NVDA', y: 1},
      { x: 'META', y: 0.62},
      { x: 'PYPL', y: 0.12},
      { x: 'LLY', y: 0.65},
    ],
  },
  {
    id: 'META',
    data:[
      { x: 'AAPL', y: 0.75},
      { x: 'GOOG', y: 0.41 },
      { x: 'MSFT', y: 0.87},
      { x: 'AMD', y: 0.95},
      { x: 'AMZN', y: 0.45},
      { x: 'NVDA', y: 0.88},
      { x: 'META', y: 1},
      { x: 'PYPL', y: 0.23},
      { x: 'LLY', y: 0.44},
    ],
  },
  {
    id: 'PYPL',
    data:[
      { x: 'AAPL', y: 0.75},
      { x: 'GOOG', y: 0.41 },
      { x: 'MSFT', y: 0.87},
      { x: 'AMD', y: 0.95},
      { x: 'AMZN', y: 0.45},
      { x: 'NVDA', y: 0.88},
      { x: 'META', y: 0.21},
      { x: 'PYPL', y: 1},
      { x: 'LLY', y: 0.12},
    ],
  },
  {
    id: 'LLY',
    data:[
      { x: 'AAPL', y: 0.75},
      { x: 'GOOG', y: 0.41 },
      { x: 'MSFT', y: 0.87},
      { x: 'AMD', y: 0.95},
      { x: 'AMZN', y: 0.45},
      { x: 'NVDA', y: 0.88},
      { x: 'META', y: 0.21},
      { x: 'PYPL', y: 0.45},
      { x: 'LLY', y: 1}, 
    ],
      
  },

];

export function CorrelationHeatmap() {
  return (
    <div className="h-[500px] p-6">
      <h2 className="text-2xl font-bold mb-4">Correlation Heatmap</h2>
      <ResponsiveHeatMap
        data={data}
        keys={["AAPL", "GOOG", "MSFT"]}
        indexBy="id"
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        forceSquare={true}
        axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5 }}
        axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5 }}
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
        colors={{ scheme: 'reds' }}
        animate={true}
      />
    </div>
  );
}
