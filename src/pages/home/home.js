import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import CountrySummary from "../../components/country-summary/country-summary";
import ProvinceSummary from "../../components/province-summary/province-summary";
import Banner from "../../components/banner/banner";

const useStyles = makeStyles(theme => {
  // const confirmed = theme.palette.cases.confirmed[400]; //pink
  // const active = theme.palette.cases.active[500]; //blue
  // const recovered = theme.palette.cases.recovered[500]; // teal
  // const deceased = theme.palette.cases.deceased[500]; // blue grey

  return {};
});

const HomePage = () => {
  const [countrySummary, setCountrySummary] = useState([]);
  const [countrySeries, setCountrySeries] = useState([]);
  const [provinceTableData, setProvinceTableData] = useState([]);
  const [provinceChartData, setProvinceChartData] = useState([]);
  // const classes = useStyles();
  // const theme = useTheme();

  // fetch country summary
  useEffect(() => {
    function fetchCountrySummary() {
      axios
        .get("https://corona.lmao.ninja/countries/")
        .then(response => {
          const countries = response.data;
          const countryData = countries.filter(country => {
            return country.country === "Canada";
          });

          setCountrySummary(countryData[0]);
        })
        .catch(err => {
          console.log("[Fetch country summary]", err);
        });
    }
    fetchCountrySummary();
  }, []);

  // fetch country series
  useEffect(() => {
    const fetchCountrySeries = () => {
      axios
        .get(`https://corona.lmao.ninja/v2/historical/canada/`)
        .then(response => {
          const caseData = response.data.timeline;

          let confirmedCases = Object.entries(caseData.cases).map(item => {
            return { date: item[0], cases: item[1] };
          });

          let recoveredCases = Object.entries(caseData.recovered).map(item => {
            return { date: item[0], cases: item[1] };
          });

          let deathCases = Object.entries(caseData.deaths).map(item => {
            return { date: item[0], cases: item[1] };
          });

          const cases = {
            confirmed: confirmedCases,
            recovered: recoveredCases,
            deaths: deathCases
          };
          setCountrySeries(cases);
        })
        .catch(err => {
          console.log("[Fetch country series]", err);
        });
    };

    fetchCountrySeries();
  }, []);

  // fetch province summary
  useEffect(() => {
    const provinces = [
      "Alberta",
      "British Columbia",
      // "Diamond Princess",
      "Grand Princess",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Northwest Territories",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Yukon"
    ];

    const fetchProvinceSummary = () => {
      axios
        .get("https://corona.lmao.ninja/v2/jhucsse")
        .then(response => {
          // console.log("DATA", response.data);
          const data = response.data.filter(country => {
            return (
              country.country === "Canada" &&
              provinces.includes(country.province)
            );
          });

          // console.log("province summary", data);

          //provinceTableData
          const tableData = data.reduce((acc, item) => {
            acc = [
              ...acc,
              {
                province: item.province,
                confirmed: item.stats.confirmed,
                deaths: item.stats.deaths
              }
            ];
            return acc;
          }, []);
          setProvinceTableData(tableData);
          // console.log("Table Data", tableData);

          // province chart data
          const chartData = data.reduce(
            (acc, item) => {
              acc.confirmed = [
                ...acc.confirmed,
                { province: item.province, cases: item.stats.confirmed }
              ];
              acc.recovered = [
                ...acc.recovered,
                { province: item.province, cases: item.stats.recovered }
              ];
              acc.deaths = [
                ...acc.deaths,
                { province: item.province, cases: item.stats.deaths }
              ];
              return acc;
            },
            { confirmed: [], recovered: [], deaths: [] }
          );

          // console.log("chart data", chartData);
          setProvinceChartData(chartData);
        })
        .catch(err => {
          console.log("[Fetch province]", err);
        });
    };

    fetchProvinceSummary();
  }, []);

  return (
    <>
      <Banner />
      <CountrySummary
        countrySummary={countrySummary}
        countrySeries={countrySeries}
      />
      <ProvinceSummary
        tableData={provinceTableData}
        chartData={provinceChartData}
      />
    </>
  );
};

export default HomePage;
