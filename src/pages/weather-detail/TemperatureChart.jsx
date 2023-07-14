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
import { styled } from "@mui/system";
import { theme } from "../../theme";

const textStyle = {
  textAnchor: "middle",
  fontFamily: theme.typography.fontFamily,
};

const TemperatureChart = ({ weatherData }) => {
  const tempUnit = useStore((state) => state.tempUnit);

  return (
    <MaxWidthContainer>
      <ResponsiveContainer maxWidth="99%" height={400}>
        <BarChart
          data={weatherData}
          style={textStyle}
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
              style={textStyle}
            />
          </YAxis>
          <Tooltip contentStyle={textStyle} labelStyle={textStyle} />
          <Legend />
          <Bar
            dataKey="high"
            fill={theme.palette.secondary.dark}
            name="High Temperature"
          />
          <Bar
            dataKey="low"
            fill={theme.palette.secondary.light}
            name="Low Temperature"
          />
        </BarChart>
      </ResponsiveContainer>
    </MaxWidthContainer>
  );
};

const MaxWidthContainer = styled("div")({
  maxWidth: "99%",
});

export default TemperatureChart;
