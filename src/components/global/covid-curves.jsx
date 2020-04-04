import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid } from "@material-ui/core";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
  Label
} from "recharts";

const SeriesChart = ({ confirmCases }) => {
  console.log("confirmCases", confirmCases);

  function formatXAxis(tickItem) {
    return tickItem;
  }

  function formatTooltip(tickItem) {
    // If using moment.js
    return "Day " + tickItem;
  }
  return (
    <Grid container>
      <Grid item lg>
        <LineChart width={1200} height={600} data={confirmCases.slice(0, 40)}>
          <XAxis dataKey="day" tickFormatter={formatXAxis} fontSize={12}>
            <Label
              value="Days since 100th case"
              offset={0}
              position="insideBottom"
            />
          </XAxis>
          <YAxis
            fontSize={12}
            tickFormatter={value => new Intl.NumberFormat("en").format(value)}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            formatter={value => new Intl.NumberFormat("en").format(value)}
            labelFormatter={formatTooltip}
          />
          <Legend verticalAlign="top" />
          <Line
            name="Canada"
            type="monotone"
            dataKey="canada"
            stroke="#ff0000"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="USA"
            type="monotone"
            dataKey="usa"
            stroke="#3C3B6E"
            strokeWidth={3}
            dot={false}
          />

          <Line
            name="Italy"
            type="monotone"
            dataKey="italy"
            stroke="#008C45"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="Spain"
            type="monotone"
            dataKey="spain"
            stroke="#F1BF00"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="Germany"
            type="monotone"
            dataKey="germany"
            stroke="#FF6584"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="China"
            type="monotone"
            dataKey="china"
            stroke="#6C63FF"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="Singapore"
            type="monotone"
            dataKey="singapore"
            stroke="#456990"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="Thailand"
            type="monotone"
            dataKey="thailand"
            stroke="#00CED1"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </Grid>
    </Grid>
  );
};
const CovidCurves = () => {
  const [globalSeries, setGlobalSeries] = useState([]);

  // fetch global series
  useEffect(() => {
    const path = "https://corona.lmao.ninja/v2/historical";
    const canadaRequest = axios.get(`${path}/canada`);
    const usaRequest = axios.get(`${path}/usa`);
    const italyRequest = axios.get(`${path}/italy`);
    const spainRequest = axios.get(`${path}/spain`);
    const germanyRequest = axios.get(`${path}/germany`);
    const chinaRequest = axios.get(`${path}/china`);
    const thailandRequest = axios.get(`${path}/thailand`);
    const singaporeRequest = axios.get(`${path}/singapore`);

    const fetchCountriesSeries = () => {
      axios
        .all([
          canadaRequest,
          usaRequest,
          italyRequest,
          spainRequest,
          germanyRequest,
          chinaRequest,
          thailandRequest,
          singaporeRequest
        ])
        .then(
          axios.spread((...responses) => {
            const canadaResponse = responses[0].data;
            const usaResponse = responses[1].data;
            const italyResponse = responses[2].data;
            const spainResponse = responses[3].data;
            const germanyResponse = responses[4].data;
            const chinaResponse = responses[5].data;
            const thailandResponse = responses[6].data;
            const singaporeResponse = responses[7].data;

            const canadaCases100 = Object.entries(
              canadaResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const canadaCases100Formatted = canadaCases100.map(
              (item, index) => {
                return {
                  // country: "canada",
                  // date: item[0],
                  day: index + 1,
                  canada: item[1]
                };
              }
            );

            const usaCases100 = Object.entries(
              usaResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const usaCases100Formatted = usaCases100.map((item, index) => {
              return {
                day: index + 1,
                usa: item[1]
              };
            });

            const italyCases100 = Object.entries(
              italyResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const italyCases100Formatted = italyCases100.map((item, index) => {
              return {
                day: index + 1,
                italy: item[1]
              };
            });

            const spainCases100 = Object.entries(
              spainResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const spainCases100Formatted = spainCases100.map((item, index) => {
              return {
                day: index + 1,
                spain: item[1]
              };
            });

            const germanyCases100 = Object.entries(
              germanyResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const germanyCases100Formatted = germanyCases100.map(
              (item, index) => {
                return {
                  day: index + 1,
                  germany: item[1]
                };
              }
            );

            const chinaCases100 = Object.entries(
              chinaResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const chinaCases100Formatted = chinaCases100.map((item, index) => {
              return {
                day: index + 1,
                china: item[1]
              };
            });

            const thailandCases100 = Object.entries(
              thailandResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const thailandCases100Formatted = thailandCases100.map(
              (item, index) => {
                return {
                  day: index + 1,
                  thailand: item[1]
                };
              }
            );

            const singaporeCases100 = Object.entries(
              singaporeResponse.timeline.cases
            ).filter(item => {
              return item[1] >= 100;
            }, []);

            const singaporeCases100Formatted = singaporeCases100.map(
              (item, index) => {
                return {
                  day: index + 1,
                  singapore: item[1]
                };
              }
            );

            const totalCases = [
              ...canadaCases100Formatted,
              ...usaCases100Formatted,
              ...italyCases100Formatted,
              ...spainCases100Formatted,
              ...germanyCases100Formatted,
              ...chinaCases100Formatted,
              ...thailandCases100Formatted,
              ...singaporeCases100Formatted
            ];

            // console.log("total cases", totalCases);
            const mergedCases = totalCases.reduce((acc, item) => {
              if (!acc[item.day]) {
                acc[item.day] = { ...item };
              } else {
                acc[item.day] = { ...acc[item.day], ...item };
              }
              return acc;
            }, {});
            // console.log("merged", Object.entries(mergedCases));

            const series = Object.entries(mergedCases).map(item => {
              return item[1];
            });
            // console.log(series);
            setGlobalSeries(series);
          })
        )
        .catch(err => {
          console.log("[Fetch global series]", err);
        });
    };

    fetchCountriesSeries();
  }, []);

  return (
    <>
      <SeriesChart confirmCases={globalSeries} />
    </>
  );
};

export default CovidCurves;
