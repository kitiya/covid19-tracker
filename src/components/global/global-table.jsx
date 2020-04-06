import React from "react";
import {
  TableContainer,
  Paper,
  TableCell,
  Table,
  TableHead,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { numberFormat } from "../../util/formatter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    flagIcon: {
      maxWidth: 30,
      marginRight: 10,
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
        // color: theme.palette.primaryText.main,
      },
    },
    imgWrapperCell: {
      display: "flex",
      alignItems: "center",
    },
  };
});

const GlobalTable = ({ global }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="medium" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Country</TableCell>
            <TableCell>Total Cases</TableCell>
            <TableCell>Today Cases</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Total Recovered</TableCell>
            <TableCell>Total Deaths</TableCell>
            <TableCell>Today Deaths</TableCell>
            <TableCell>Critical</TableCell>
            <TableCell>Case per 1M</TableCell>
            <TableCell>Death per 1M</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {global.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="right">{index + 1}.</TableCell>
                <TableCell align="left" className={classes.imgWrapperCell}>
                  <img
                    alt=""
                    src={item.countryInfo.flag}
                    className={classes.flagIcon}
                  />
                  {item.country}
                </TableCell>
                <TableCell>{numberFormat(item.cases)}</TableCell>
                <TableCell>{numberFormat(item.todayCases)}</TableCell>
                <TableCell>{numberFormat(item.active)}</TableCell>
                <TableCell>{numberFormat(item.recovered)}</TableCell>
                <TableCell>{numberFormat(item.deaths)}</TableCell>
                <TableCell>{numberFormat(item.todayDeaths)}</TableCell>
                <TableCell>{numberFormat(item.critical)}</TableCell>
                <TableCell>{numberFormat(item.casesPerOneMillion)}</TableCell>
                <TableCell>{numberFormat(item.deathsPerOneMillion)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GlobalTable;
