import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import MiniChart from "../../components/charts/minichart";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: "30px 50px",
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
          todayCases={`[+${countrySummary.todayCases}]`}
          totalCases={countrySummary.cases}
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
          totalCases={countrySummary.recovered}
          chartData={countrySeries.recovered}
          title="Recovered"
          classes={classes}
          cardClass={classes.recovered}
          stroke={theme.palette.cases.recovered}
        />
      </Grid>
      <Grid item xs={4}>
        <SummaryCard
          todayCases={`[+${countrySummary.todayDeaths}]`}
          totalCases={countrySummary.deaths}
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

const CountrySummary = ({ countrySummary, countrySeries, theme }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item md={4}>
        <SummaryCards
          countrySummary={countrySummary}
          countrySeries={countrySeries}
          theme={theme}
          classes={classes}
        />
      </Grid>
      <Grid item md={8}>
        <SummaryMessage />
      </Grid>
    </Grid>
  );
};

export default CountrySummary;
