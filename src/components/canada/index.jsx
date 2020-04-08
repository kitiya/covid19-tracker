import React, { useState, useEffect } from "react";
import axios from "axios";

import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import CountrySummary from "./country-summary";
import ProvinceSummary from "./province-summary";
import ProvincesCurves from "./provinces-curves";
import { canadianProvinceDB, canadianProvincialCodeDB } from "../../store";

const Canada = () => {
  const [provinceTableData, setProvinceTableData] = useState([]);

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
      <Grid container>
        <Grid item xs={12}>
          <CountrySummary theme={theme} />
        </Grid>
        <Grid item xs={12}>
          <ProvinceSummary tableData={provinceTableData} theme={theme} />
        </Grid>
        <Grid item xs={12}>
          <ProvincesCurves theme={theme} />
        </Grid>
      </Grid>
    </>
  );
};

export default Canada;
