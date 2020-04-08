import React from "react";

import TriangleBar from "../charts/shapes/triangle-bar";
import { compareValues } from "../../util/sort";
import { numberFormat } from "../../util/formatter";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // LabelList,
  Cell,
} from "recharts";

const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
      padding: 25,
      justifyContent: "center",
    },
    gridItem: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
    },
    table: {
      "& th": {
        textAlign: "center",
        background: theme.palette.background.tableHeader,
        color: "white",
        fontSize: 16,
      },
      "& td": {
        textAlign: "center",
      },
    },
    chartWrapper: {
      width: "100%",
    },
  };
});

const ProvinceTable = ({ data, classes }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Province</TableCell>
            <TableCell>Confirmed Cases</TableCell>
            <TableCell>Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Typography align="left">{item.province}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{numberFormat(item.confirmed)}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{numberFormat(item.deaths)}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ProvinceChart = ({ data, theme }) => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <ComposedChart
        data={data.slice(0, 5)}
        margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          angle={0}
          textAnchor="end"
          dataKey="provincialCode"
          style={{ fontSize: 10 }}
        />
        <YAxis
          yAxisId="left"
          fontSize={12}
          label={{
            value: "Confirmed Cases",
            angle: -90,
            position: "insideLeft",
            offset: 0,
            fill: theme.palette.text.primary,
          }}
          tickFormatter={(value) => numberFormat(value)}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          fontSize={12}
          label={{
            value: "Deaths",
            angle: 90,
            position: "insideRight",
            offset: 0,
            fill: theme.palette.text.primary,
          }}
          tickFormatter={(value) => numberFormat(value)}
        />
        <Tooltip formatter={(value) => numberFormat(value)} />
        <Legend verticalAlign="top" />
        <Bar
          yAxisId="left"
          dataKey="confirmed"
          fill={theme.palette.cases.confirmed}
          shape={<TriangleBar />}
          // label={{ position: "top" }}
        >
          {/* <LabelList
            position="top"
            formatter={(value) => numberFormat(value)}
            fill={theme.palette.text.primary}
          /> */}
          >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Bar>
        <Bar
          yAxisId="right"
          dataKey="deaths"
          fill={theme.palette.cases.deaths}
          shape={<TriangleBar />}
        >
          {/* <LabelList
            position="top"
            formatter={(value) => numberFormat(value)}
            fill={theme.palette.text.primary}
          /> */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const ProvinceSummary = ({ tableData, theme }) => {
  const classes = useStyles();

  const sortedData = tableData
    ? tableData.sort(compareValues("confirmed", "desc"))
    : [];

  return (
    <Grid
      container
      align="center"
      spacing={3}
      className={classes.gridContainer}
    >
      <Grid item xs={12}>
        <Typography variant="h4" align="left">
          COVID-19 cases in Canada by province and territory
        </Typography>
      </Grid>
      <Grid item lg={4} className={classes.gridItem}>
        <ProvinceTable
          data={sortedData}
          theme={theme}
          const
          classes={classes}
        />
      </Grid>
      <Grid item lg={8} className={classes.gridItem}>
        <Paper className={classes.chartWrapper}>
          <ProvinceChart data={sortedData} theme={theme} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProvinceSummary;
