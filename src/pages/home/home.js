import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import MiniChart from "../../components/charts/minichart";

const useStyles = makeStyles(theme => {
  const pink = theme.palette.cases.confirmed;
  const blue = theme.palette.cases.active;
  const teal = theme.palette.cases.recovered;
  const blueGrey = theme.palette.cases.deceased;

  return {
    container: {
      marginTop: 50
    },
    gridContainer: {
      justifyContent: "center"
    },
    cardWrapper: {
      background: "#eaeaea"
    },
    confirmedCard: {
      color: pink[400]
    },
    activeCard: {
      color: blue[500]
    },
    recoveredCard: {
      color: teal[500]
    },
    deceasedCard: {
      color: blueGrey[500]
    },
    title: {
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
      fontWeight: "bold"
    },
    newCases: {
      textAlign: "center",
      fontSize: "0.85rem",
      fontWeight: "bold"
    },
    totalCases: {
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "0.5"
    }
  };
});

const HomePage = () => {
  const [countrySummary, setCountrySummary] = useState([]);
  const [countrySeries, setCountrySeries] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

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

  // fetch country
  useEffect(() => {
    // const provinces = [
    //   "British Columbia",
    //   "Alberta",
    //   "Nova Scotia",
    //   "Ontario",
    //   "Prince Edward Island",
    //   "Quebec",
    //   "Saskatchewan",
    //   "Manitoba"
    // ];

    // console.log(provinces);
    axios
      .get("https://api.covid19api.com/country/canada/status/confirmed")
      .then(response => {
        const data = response.data;
        // console.log("data", data);
      })
      .catch(err => {
        console.log("[Fetch province]", err);
      });
  }, []);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={1} className={classes.gridContainer}>
        <Grid item sm={3}>
          <Card className={`${classes.cardWrapper} ${classes.confirmedCard}`}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Confirmed
              </Typography>
              <Typography variant="body1" className={classes.newCases}>
                {`[+${countrySummary.todayCases}]`}
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {countrySummary.cases}
              </Typography>
              <Grid container justify="center">
                <Grid item>
                  <MiniChart
                    data={countrySeries.confirmed}
                    stroke={theme.palette.cases.confirmed[400]}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item sm={3}>
          <Card className={`${classes.cardWrapper} ${classes.activeCard}`}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Active
              </Typography>
              <Typography variant="body1" className={classes.newCases}>
                &nbsp;
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {countrySummary.active}
              </Typography>
              <Grid container justify="center">
                <Grid item>&nbsp;</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid> */}
        <Grid item sm={3}>
          <Card className={`${classes.cardWrapper} ${classes.recoveredCard}`}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Recovered
              </Typography>
              <Typography variant="body1" className={classes.newCases}>
                &nbsp;
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {countrySummary.recovered}
              </Typography>
              <Grid container justify="center">
                <Grid item>
                  <MiniChart
                    data={countrySeries.recovered}
                    stroke={theme.palette.cases.recovered[500]}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card className={`${classes.cardWrapper} ${classes.deceasedCard}`}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Deceased
              </Typography>
              <Typography variant="body1" className={classes.newCases}>
                {`[+${countrySummary.todayDeaths}]`}
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {countrySummary.deaths}
              </Typography>
              <Grid container justify="center">
                <Grid item>
                  <MiniChart
                    data={countrySeries.deaths}
                    stroke={theme.palette.cases.deceased[500]}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
