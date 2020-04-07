import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import MiniChart from "../charts/minichart";
import { numberFormat } from "../../util/formatter";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: 25,
      justifyContent: "center",
    },
    confirmed: {
      "& *": {
        color: theme.palette.cases.confirmed,
      },
    },
    active: {
      "& *": {
        color: theme.palette.cases.active,
      },
    },
    recovered: {
      "& *": {
        color: theme.palette.cases.recovered,
      },
    },
    deaths: {
      "& *": {
        color: theme.palette.cases.deaths,
      },
    },
    title: {
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
      fontWeight: "bold",
    },
    newCases: {
      textAlign: "center",
      fontSize: "0.75rem",
    },
    totalCases: {
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "0.5",
    },
  };
});

const SummaryCard = ({
  todayCases,
  totalCases,
  chartData,
  title,
  classes,
  cardClass,
  stroke,
}) => {
  return (
    <Card className={cardClass}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.newCases}>
          {todayCases}
        </Typography>
        <Typography variant="h5" className={classes.totalCases}>
          {totalCases}
        </Typography>
        <Box justifyContent="center">
          <MiniChart data={chartData} stroke={stroke} />
        </Box>
      </CardContent>
    </Card>
  );
};

const SummaryCards = ({ countrySummary, countrySeries, theme, classes }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <SummaryCard
          todayCases={`[+${numberFormat(countrySummary.todayCases)}]`}
          totalCases={numberFormat(countrySummary.cases)}
          chartData={countrySeries.confirmed}
          title="Confirmed"
          classes={classes}
          cardClass={classes.confirmed}
          stroke={theme.palette.cases.confirmed}
        />
      </Grid>

      <Grid item xs={4}>
        <SummaryCard
          todayCases={"[NA]"}
          totalCases={numberFormat(countrySummary.recovered)}
          chartData={countrySeries.recovered}
          title="Recovered"
          classes={classes}
          cardClass={classes.recovered}
          stroke={theme.palette.cases.recovered}
        />
      </Grid>
      <Grid item xs={4}>
        <SummaryCard
          todayCases={`[+${numberFormat(countrySummary.todayDeaths)}]`}
          totalCases={numberFormat(countrySummary.deaths)}
          chartData={countrySeries.deaths}
          title="Deaths"
          classes={classes}
          cardClass={classes.deaths}
          stroke={theme.palette.cases.deaths}
        />
      </Grid>
    </Grid>
  );
};

const SummaryMessage = () => {
  return (
    <>
      {/* <Typography variant="h3">Tracking the coronavirus</Typography> */}
      <Typography variant="h6" gutterBottom>
        Stay informed with the latest data on the number of COVID-19 cases.
      </Typography>
      <Typography variant="body1" gutterBottom>
        While the numbers can tell you a lot about the coronavirus, the case
        numbers only tell part of the story.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Areas that test a high number of people will ultimately detect more
        cases than those that are not doing as much testing. There may also be
        surges in the number of cases when there are a high number of tests done
        in a short time frame.
      </Typography>
      <Typography variant="body1">
        The same is true for Canada's provinces and territories. Different rates
        in testing and changes in how regions are recording results can result
        in higher numbers for some regions over others.
      </Typography>
    </>
  );
};

const CountrySummary = ({ theme }) => {
  const [countrySummary, setCountrySummary] = useState([]);
  const [countrySeries, setCountrySeries] = useState([]);

  const classes = useStyles();

  // fetch country summary
  useEffect(() => {
    function fetchCountrySummary() {
      axios
        .get("https://corona.lmao.ninja/countries/")
        .then((response) => {
          const countries = response.data;
          const countryData = countries.filter((country) => {
            return country.country === "Canada";
          });

          setCountrySummary(countryData[0]);
        })
        .catch((err) => {
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
        .then((response) => {
          const caseData = response.data.timeline;

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
          setCountrySeries(cases);
        })
        .catch((err) => {
          console.log("[Fetch country series]", err);
        });
    };

    fetchCountrySeries();
  }, []);

  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item md lg={5} xl={4}>
        <SummaryCards
          countrySummary={countrySummary}
          countrySeries={countrySeries}
          theme={theme}
          classes={classes}
        />
      </Grid>
      <Grid item md lg={7} xl={8}>
        <SummaryMessage />
      </Grid>
    </Grid>
  );
};

export default CountrySummary;
