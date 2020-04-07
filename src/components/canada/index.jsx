import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "@material-ui/core/styles";

import CountrySummary from "./country-summary";
import ProvinceSummary from "./province-summary";
// import ProvincesSeries from "./provinces-series";
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
          console.log("DATA", response.data);
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
          console.log("Table Data", tableData);
        })
        .catch((err) => {
          console.log("[Fetch province]", err);
        });
    };

    fetchProvinceSummary();
  }, []);

  return (
    <>
      <CountrySummary theme={theme} />
      <ProvinceSummary tableData={provinceTableData} theme={theme} />
      {/* <ProvincesSeries /> */}
    </>
  );
};

export default Canada;
