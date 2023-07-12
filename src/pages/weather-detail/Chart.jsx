import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    high: 4000,
    low: 2400,
    current: 2400,
  },
  {
    name: "Page B",
    high: 3000,
    low: 1398,
    current: 2210,
  },
  {
    name: "Page C",
    high: 2000,
    low: 9800,
    current: 2290,
  },
  {
    name: "Page D",
    high: 2780,
    low: 3908,
    current: 2000,
  },
  {
    name: "Page E",
    high: 1890,
    low: 4800,
    current: 2181,
  },
];

const Chart = () => (
  <BarChart
    width={1000}
    height={500}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="low" fill="#8884d8" />
    <Bar dataKey="high" fill="#82ca9d" />
  </BarChart>
);

export default Chart;
