import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { Grid } from "@material-ui/core";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

function formatXAxis(tickItem) {
  return moment(new Date(tickItem)).format("MMM D");
}

function formatTooltip(tickItem) {
  return moment(new Date(tickItem)).format("MMM D, YYYY");
}

const TimeSeriesChart = ({ data, graphName, width = 400 }) => {
  return (
    <ResponsiveContainer width={width} height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
      >
        <XAxis dataKey="date" tickFormatter={formatXAxis} fontSize={12} />
        <YAxis
          fontSize={12}
          tickFormatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          formatter={(value) => new Intl.NumberFormat("en").format(value)}
          labelFormatter={formatTooltip}
        />
        <Legend verticalAlign="top" />
        <Line
          name={graphName}
          type="monotone"
          dataKey="cases"
          stroke="#8884d8"
          strokeWidth={3}
          // dot={{ strokeWidth: 3 }}
          // activeDot={{ r: 3 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const GlobalSeries = () => {
  const [globalSeries, setGlobalSeries] = useState([]);

  // fetch global series
  useEffect(() => {
    const fetchGlobalSeries = () => {
      axios
        .get(`https://corona.lmao.ninja/v2/historical/all`)
        .then((response) => {
          // console.log(response.data);
          const caseData = response.data;

          let confirmedCases = Object.entries(caseData.cases).map((item) => {
            return { date: item[0], cases: item[1] };
          });

          let recoveredCases = Object.entries(caseData.recovered).map(
            (item) => {
              return { date: item[0], cases: item[1] };
            }
          );

          let deathCases = Object.entries(caseData.deaths).map((item) => {
            return { date: item[0], cases: item[1] };
          });

          const cases = {
            confirmed: confirmedCases,
            recovered: recoveredCases,
            deaths: deathCases,
          };
          setGlobalSeries(cases);
        })
        .catch((err) => {
          console.log("[Fetch global series]", err);
        });
    };

    fetchGlobalSeries();
  }, []);

  return (
    <Grid container>
      <Grid item lg={4}>
        <TimeSeriesChart
          data={globalSeries.confirmed}
          graphName="Total Confirmed Cases"
          width="100%"
        />
      </Grid>
      <Grid item lg={4}>
        <TimeSeriesChart
          data={globalSeries.recovered}
          graphName="Total Recovered"
          width="100%"
        />
      </Grid>
      <Grid item lg={4}>
        <TimeSeriesChart
          data={globalSeries.deaths}
          graphName="Total Deaths"
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

export default GlobalSeries;
