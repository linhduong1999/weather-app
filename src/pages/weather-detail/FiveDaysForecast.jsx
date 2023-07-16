import React, { useMemo, useCallback } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/system";
import WeatherIcon from "../../components/WeatherIcon";
import { capitalizeFirstLetter } from "../../utils/transformData";
import { isToday } from "../../utils/formatDate";

const tableHeaders = ["Day", "Date", "State", "Weather", "Low", "High"];

const FiveDaysForecast = ({ weatherData }) => {
  const renderWeatherRow = useCallback((data, index) => {
    return (
      <TableRow key={index}>
        <StyledTableCell>
          {isToday(data.dt) ? "Today" : data.date.dayOfWeek}
        </StyledTableCell>
        <StyledTableCell>{data.date.dateStr}</StyledTableCell>
        <StyledTableCell>
          <WeatherIcon code={data.weather.icon} />
        </StyledTableCell>
        <StyledTableCell>
          {capitalizeFirstLetter(data.weather.description)}
        </StyledTableCell>
        <StyledTableCell>{data.low}°</StyledTableCell>
        <StyledTableCell>{data.high}°</StyledTableCell>
      </TableRow>
    );
  }, []);

  const renderTableRows = useMemo(() => {
    return weatherData.map(renderWeatherRow);
  }, [weatherData, renderWeatherRow]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeaders.map((header, index) => (
            <StyledTableHeaderCell key={index}>{header}</StyledTableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{renderTableRows}</TableBody>
    </Table>
  );
};

const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: theme.typography.customFontSize.m,
  color: theme.palette.primary.main,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: (props) =>
    props.lastItem ? "none" : `1px solid ${theme.palette.secondary.main}`,
  fontSize: theme.typography.customFontSize.s,
  color: theme.palette.primary.main,
}));

export default React.memo(FiveDaysForecast);
