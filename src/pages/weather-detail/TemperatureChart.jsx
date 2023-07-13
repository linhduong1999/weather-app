import React from "react";
import useStore from "../../store/useStore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";

const TemperatureChart = ({ weatherData }) => {
  const tempUnit = useStore((state) => state.tempUnit);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={weatherData}
        style={{ textAnchor: "middle", fontFamily: "'Roboto', sans-serif" }}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date.dayOfWeek" />
        <YAxis>
          <Label
            value={`Temperature (°${tempUnit})`}
            position="left"
            angle={-90}
            offset={20}
            style={{ textAnchor: "middle", fontFamily: "'Roboto', sans-serif" }}
          />
        </YAxis>
        <Tooltip
          contentStyle={{ fontFamily: "'Roboto', sans-serif" }}
          labelStyle={{ fontFamily: "'Roboto', sans-serif" }}
        />
        <Legend />
        <Bar dataKey="high" fill="#ff6f00" name="High Temperature" />
        <Bar dataKey="low" fill="#50a1ff" name="Low Temperature" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
