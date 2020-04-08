import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { SimpleCard } from "../../components/cards/simple-card";
import CountrySummary from "./country-summary";
import ProvinceSummary from "./province-summary";
import ProvincesSeries from "./provinces-series";
import { canadianProvinceDB, canadianProvincialCodeDB } from "../../store";

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

const Canada = () => {
  const [provinceTableData, setProvinceTableData] = useState([]);

  const classes = useStyles();
  const theme = useTheme();

  // fetch province summary
  useEffect(() => {
    const fetchProvinceSummary = () => {
      axios
        .get("https://corona.lmao.ninja/v2/jhucsse")
        .then((response) => {
          // console.log("DATA", response.data);
          const data = response.data.filter((country) => {
            return (
              country.country === "Canada" &&
              canadianProvinceDB.includes(country.province)
            );
          });

          // console.log("province summary", data);

          //provinceTableData
          const tableData = data.reduce((acc, item) => {
            acc = [
              ...acc,
              {
                province: item.province,
                provincialCode: canadianProvincialCodeDB[item.province],
                confirmed: item.stats.confirmed,
                deaths: item.stats.deaths,
              },
            ];
            return acc;
          }, []);
          setProvinceTableData(tableData);
          // console.log("Table Data", tableData);
        })
        .catch((err) => {
          console.log("[Fetch province]", err);
        });
    };

    fetchProvinceSummary();
  }, []);

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <CountrySummary theme={theme} />
        </Grid>
        <Grid item xs={12}>
          <ProvinceSummary tableData={provinceTableData} theme={theme} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} className={classes.gridContainerItem}>
            <Grid item md={6} className={classes.gridItem}>
              <SimpleCard title="Province by Province: Comparing coronavirus cases">
                <ProvincesSeries />
              </SimpleCard>
            </Grid>
            <Grid item md={6} className={classes.gridItem}>
              <SimpleCard title="Province by Province: Comparing coronavirus cases">
                <ProvincesSeries />
              </SimpleCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Canada;
