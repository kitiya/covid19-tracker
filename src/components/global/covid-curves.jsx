import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

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

const SeriesChart = ({ confirmCases }) => {
  // console.log("confirmCases", confirmCases);

  function formatXAxis(tickItem) {
    return moment(new Date(tickItem)).format("MMM D");
  }

  function formatTooltip(tickItem) {
    return moment(new Date(tickItem)).format("MMM D, YYYY");
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={confirmCases}
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
          name="Spain"
          type="monotone"
          dataKey="spain"
          stroke="#F1BF00"
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
          name="iran"
          type="monotone"
          dataKey="iran"
          stroke="#456990"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
const CovidCurves = () => {
  const [globalSeries, setGlobalSeries] = useState([]);

  // fetch global series
  useEffect(() => {
    const path = "https://corona.lmao.ninja/v2/historical";
    const canadaRequest = axios.get(`${path}/canada`);
    const usaRequest = axios.get(`${path}/usa`);
    const spainRequest = axios.get(`${path}/spain`);
    const italyRequest = axios.get(`${path}/italy`);
    const germanyRequest = axios.get(`${path}/germany`);
    const franceRequest = axios.get(`${path}/france`);
    const chinaRequest = axios.get(`${path}/china`);
    const iranRequest = axios.get(`${path}/iran`);

    const fetchCountriesSeries = () => {
      axios
        .all([
          canadaRequest,
          usaRequest,
          spainRequest,
          italyRequest,
          germanyRequest,
          franceRequest,
          chinaRequest,
          iranRequest,
        ])
        .then(
          axios.spread((...responses) => {
            const canadaResponse = responses[0].data;
            const usaResponse = responses[1].data;
            const spainResponse = responses[2].data;
            const italyResponse = responses[3].data;
            const germanyResponse = responses[4].data;
            const franceResponse = responses[5].data;
            const chinaResponse = responses[6].data;
            const iranResponse = responses[7].data;

            const canadaCases = Object.entries(
              canadaResponse.timeline.cases
            ).map((item) => {
              return {
                date: item[0],
                canada: item[1],
              };
            });

            const usaCases = Object.entries(usaResponse.timeline.cases).map(
              (item) => {
                return {
                  date: item[0],
                  usa: item[1],
                };
              }
            );

            const spainCases = Object.entries(spainResponse.timeline.cases).map(
              (item) => {
                return {
                  date: item[0],
                  spain: item[1],
                };
              }
            );

            const italyCases = Object.entries(italyResponse.timeline.cases).map(
              (item) => {
                return {
                  date: item[0],
                  italy: item[1],
                };
              }
            );

            const germanyCases = Object.entries(
              germanyResponse.timeline.cases
            ).map((item) => {
              return {
                date: item[0],
                germany: item[1],
              };
            });

            const franceCases = Object.entries(
              franceResponse.timeline.cases
            ).map((item) => {
              return {
                date: item[0],
                france: item[1],
              };
            });

            const chinaCases = Object.entries(chinaResponse.timeline.cases).map(
              (item) => {
                return {
                  date: item[0],
                  china: item[1],
                };
              }
            );

            const iranCases = Object.entries(iranResponse.timeline.cases).map(
              (item) => {
                return {
                  date: item[0],
                  iran: item[1],
                };
              }
            );

            const totalCases = [
              ...canadaCases,
              ...usaCases,
              ...spainCases,
              ...italyCases,
              ...germanyCases,
              ...franceCases,
              ...chinaCases,
              ...iranCases,
            ];

            // console.log("total cases", totalCases);
            const mergedCases = totalCases.reduce((acc, item) => {
              if (!acc[item.date]) {
                acc[item.date] = { ...item };
              } else {
                acc[item.date] = { ...acc[item.date], ...item };
              }
              return acc;
            }, {});
            // console.log("merged", Object.entries(mergedCases));

            const series = Object.entries(mergedCases).map((item) => {
              return item[1];
            });
            // console.log(series);
            setGlobalSeries(series);
          })
        )
        .catch((err) => {
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
