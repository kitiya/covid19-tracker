import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import moment from "moment";
import { numberFormat } from "../../util/formatter";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
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
    cardContainer: {
      minWidth: "200px",
    },
    title: {
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
      fontWeight: "bold",
    },
    newCases: {
      textAlign: "center",
      fontSize: "0.85rem",
    },
    totalCases: {
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "0.5",
    },
  };
});

const Message = () => {
  return (
    <Box px={2}>
      <Typography variant="h3">Tracking the coronavirus</Typography>
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
    </Box>
  );
};

const SummaryCard = ({ title, todayCases, totalCases, classes, cardClass }) => {
  return (
    <Card className={clsx(classes.cardContainer, cardClass)}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.newCases}>
          {todayCases}
        </Typography>
        <Typography variant="h4" className={classes.totalCases}>
          {totalCases}
        </Typography>
      </CardContent>
    </Card>
  );
};

const SummaryCards = ({ globalSummary: data, classes }) => {
  const cases = numberFormat(data.cases);
  const todayCases = numberFormat(data.todayCases);
  const active = numberFormat(data.active);
  const recovered = numberFormat(data.recovered);
  const deaths = numberFormat(data.deaths);
  const todayDeaths = numberFormat(data.todayDeaths);
  return (
    <>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <SummaryCard
            title="Confirmed"
            todayCases={`[+${todayCases}]`}
            totalCases={cases}
            classes={classes}
            cardClass={classes.confirmed}
          />
        </Grid>
        <Grid item xs>
          <SummaryCard
            title="Deaths"
            todayCases={`[+${todayDeaths}]`}
            totalCases={deaths}
            classes={classes}
            cardClass={classes.deaths}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs>
          <SummaryCard
            title="Active"
            totalCases={active}
            classes={classes}
            cardClass={classes.active}
          />
        </Grid>
        <Grid item xs>
          <SummaryCard
            title="Recovered"
            totalCases={recovered}
            classes={classes}
            cardClass={classes.recovered}
          />
        </Grid>
      </Grid>
    </>
  );
};
const GlobalSummary = ({ theme }) => {
  const [globalSummary, setGlobalSummary] = useState([]);
  const classes = useStyles();

  // fetch global summary
  useEffect(() => {
    const fetchGlobalSummary = () => {
      axios.get(`https://corona.lmao.ninja/all`).then((response) => {
        setGlobalSummary(response.data);
      });
      // console.log(globalSummary);
    };
    fetchGlobalSummary();
  }, []);

  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      <Grid item md={4}>
        <SummaryCards globalSummary={globalSummary} classes={classes} />
        <Box>
          <Typography variant="subtitle1" align="right">
            Last updated: {moment(new Date(globalSummary.updated)).fromNow()}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={8} align="left">
        <Message />
      </Grid>
    </Grid>
  );
};
export default GlobalSummary;
