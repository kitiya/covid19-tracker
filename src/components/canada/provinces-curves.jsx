import React, { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";

import { SimpleCard } from "../../components/cards/simple-card";
import {
  canadianProvincialCodeDB2 as pCode,
  excludedProvincesDB,
} from "../../store";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";

const useStyles = makeStyles((theme) => {
  return {
    // gridContainer: { padding: "0 25px" },
    gridContainerItem: {
      padding: "0 25px",
      justifyContent: "center",
      alignItems: "stretch",
    },
    gridItem: { paddingTop: 30, width: "100%" },
  };
});

const SeriesChart = ({ confirmCases }) => {
  // console.log("confirmCases", confirmCases);

  function formatXAxis(tickItem) {
    return moment(new Date(tickItem)).format("MMM D");
  }

  function formatTooltip(tickItem) {
    return moment(new Date(tickItem)).format("MMM D");
  }
  const provinceCode = [
    "QC",
    "ON",
    "BC",
    "AB",
    "NS",
    "SK",
    "NL",
    "MB",
    "NB",
    "PE",
    "YT",
    "NT",
  ];

  const colors = [
    "#ff0000",
    "#3C3B6E",
    "#F1BF00",
    "#008C45",
    "#FF6584",
    "#6C63FF",
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={confirmCases.slice(14)} // remove the first 2 weeks
        margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
      >
        <XAxis dataKey="date" tickFormatter={formatXAxis} fontSize={12}></XAxis>
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

        {provinceCode.slice(0, 5).map((item, index) => {
          return (
            <Line
              key={index}
              type="monotone"
              dataKey={item}
              stroke={colors[index]}
              strokeWidth={3}
              dot={false}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

const ProvincesCurves = ({ theme }) => {
  const [confirmedSeries, setConfirmedSeries] = useState([]);
  const [deathSeries, setDeathSeries] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchProvincesSeries = () => {
      Axios.get("https://corona.lmao.ninja/v2/historical").then((response) => {
        const canadianSeries = response.data.filter(
          (item) =>
            item.country === "Canada" &&
            !excludedProvincesDB.includes(item.province)
        );
        // console.log("canada response", canadianSeries);

        const initialConfirmedSeries = Object.entries(
          canadianSeries[0].timeline.cases
        ).reduce((acc, item) => {
          acc[item[0]] = {};
          return acc;
        }, {});

        const initialDeathSeries = Object.entries(
          canadianSeries[0].timeline.deaths
        ).reduce((acc, item) => {
          acc[item[0]] = {};
          return acc;
        }, {});
        // console.log("initialDeathSeries", initialDeathSeries);

        const objectConfirmedSeries = canadianSeries.reduce(
          (provinceAcc, item) => {
            return Object.entries(item.timeline.cases).reduce(
              (dateAcc, subItem) => {
                dateAcc[subItem[0]].date = subItem[0];
                dateAcc[subItem[0]][pCode[item.province]] = subItem[1];

                return dateAcc;
              },
              initialConfirmedSeries
            );
          },
          {}
        );

        const objectDeathSeries = canadianSeries.reduce((provinceAcc, item) => {
          return Object.entries(item.timeline.deaths).reduce(
            (dateAcc, subItem) => {
              dateAcc[subItem[0]].date = subItem[0];
              dateAcc[subItem[0]][pCode[item.province]] = subItem[1];

              return dateAcc;
            },
            initialDeathSeries
          );
        }, {});

        const confirmedChartSeries = Object.entries(
          objectConfirmedSeries
        ).reduce((acc, item) => {
          return [...acc, item[1]];
        }, []);

        const deathChartSeries = Object.entries(objectDeathSeries).reduce(
          (acc, item) => {
            return [...acc, item[1]];
          },
          []
        );

        // console.log("confirmedChartSeries", confirmedChartSeries);
        setConfirmedSeries(confirmedChartSeries);
        setDeathSeries(deathChartSeries);
      });
    };
    fetchProvincesSeries();
  }, []);

  return (
    <Grid container spacing={3} className={classes.gridContainerItem}>
      <Grid item md={6} className={classes.gridItem}>
        <SimpleCard title="Province by Province: Comparison by Total Cases">
          <SeriesChart confirmCases={confirmedSeries} />
        </SimpleCard>
      </Grid>
      <Grid item md={6} className={classes.gridItem}>
        <SimpleCard title="Province by Province: Comparison by Total Deaths">
          <SeriesChart confirmCases={deathSeries} />
        </SimpleCard>
      </Grid>
    </Grid>
  );
};

export default ProvincesCurves;
