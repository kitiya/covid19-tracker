import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
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
      color: teal[400]
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
  const [summary, setSummary] = useState([]);
  const [confirmedSeries, setConfirmedSeries] = useState([]);
  const [recoveredSeries, setRecoveredSeries] = useState([]);
  const [deceasedSeries, setDeceasedSeries] = useState([]);
  // const [confirmedProvinces, setConfirmedProvinces] = useState([]);
  const classes = useStyles();

  // fetch summary
  useEffect(() => {
    function fetchSummary() {
      axios
        .get("https://api.covid19api.com/summary")
        .then(response => {
          const countries = response.data.Countries;
          const canadaData = countries.filter(country => {
            return country.Country === "Canada";
          });

          setSummary(canadaData[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
    fetchSummary();
  }, []);

  // useEffect(() => {
  //   function fetchSummary() {
  //     axios
  //       .get("https://corona.lmao.ninja/v2/jhucsse")
  //       .then(response => {
  //         console.log("ninja", response.data);

  //         const countries = response.data.Countries;
  //         const canadaData = countries.filter(country => {
  //           return country.Country === "Canada";
  //         });

  //         // setSummary(canadaData[0]);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  //   fetchSummary();
  // }, []);

  // fetch timeseries
  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     proxy: {
  //       host: "localhost",
  //       port: 3019
  //     }
  //   };

  //   const confirmedUrl =
  //     "https://api.covid19api.com/total/country/canada/status/confirmed";
  //   const recoveredUrl =
  //     "https://api.covid19api.com/total/country/canada/status/recovered";
  //   const deceasedUrl =
  //     "https://api.covid19api.com/total/country/canada/status/deaths";

  //   const confirmedRequest = axios.get(confirmedUrl);
  //   const recoveredRequest = axios.get(recoveredUrl, config);
  //   const deceasedRequest = axios.get(deceasedUrl, config);

  //   axios
  //     .all([confirmedRequest, recoveredRequest, deceasedRequest])
  //     .then(
  //       axios.spread((...responses) => {
  //         const confirmedResponse = responses[0];
  //         const recoveredResponse = responses[1];
  //         const deceasedResponse = responses[2];
  //       })
  //     )
  //     .catch(err => console.log(err));
  // }, []);

  useEffect(() => {
    const fetchConfirmedSeries = () => {
      axios
        .get(`https://api.covid19api.com/total/country/canada/status/confirmed`)
        .then(response => {
          const data = response.data;
          const series = data.reduce((acc, item) => {
            return [
              ...acc,
              { date: item.Date.slice(5, 10), cases: item.Cases }
            ];
          }, []);

          setConfirmedSeries(series);
        })
        .catch(err => {
          console.log("[Fetch confirmed Error]", err);
        });
    };

    const fetchRecoveredSeries = () => {
      axios
        .get(
          `https://api.covid19api.com/total/country/canada/status/recovered`,
          {
            headers: { "Access-Control-Allow-Origin": "*" },
            proxy: {
              host: "localhost",
              port: 3019
            }
          }
        )
        .then(response => {
          const data = response.data;
          const series = data.reduce((acc, item) => {
            return [
              ...acc,
              { date: item.Date.slice(5, 10), cases: item.Cases }
            ];
          }, []);

          setRecoveredSeries(series);
        })
        .catch(err => {
          console.log("[Fetch Recovered Error]", err);
        });
    };

    const fetchDeceasedSeries = () => {
      axios
        .get(`https://api.covid19api.com/total/country/canada/status/deaths`)
        .then(response => {
          const data = response.data;
          const series = data.reduce((acc, item) => {
            return [
              ...acc,
              { date: item.Date.slice(5, 10), cases: item.Cases }
            ];
          }, []);

          setDeceasedSeries(series);
        })
        .catch(err => {
          console.log("[Fetch Deceased Error]", err);
        });
    };

    fetchConfirmedSeries();
    fetchRecoveredSeries();
    fetchDeceasedSeries();
  }, []);

  // fetch country
  useEffect(() => {
    const provinces = [
      "British Columbia",
      "Alberta",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Manitoba"
    ];

    console.log(provinces);
    axios
      .get("https://api.covid19api.com/country/canada/status/confirmed")
      .then(response => {
        const data = response.data;
        console.log("data", data);
      })
      .catch(err => {
        console.log("[Fetch Province Error]", err);
      });
  }, []);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <Card className={`${classes.cardWrapper} ${classes.confirmedCard}`}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Confirmed
              </Typography>
              <Typography variant="body1" className={classes.newCases}>
                {`[+${summary.NewConfirmed}]`}
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {summary.TotalConfirmed}
              </Typography>
              <Grid container justify="center">
                <Grid item>
                  <MiniChart data={confirmedSeries} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card className={`${classes.cardWrapper} ${classes.activeCard}`}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Active
              </Typography>
              <Typography variant="body1" className={classes.newCases}>
                &nbsp;
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {summary.TotalConfirmed
                  ? summary.TotalConfirmed -
                    summary.TotalRecovered -
                    summary.TotalDeaths
                  : null}
              </Typography>
              <Grid container justify="center">
                <Grid item>
                  <MiniChart data={recoveredSeries} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card className={`${classes.cardWrapper} ${classes.recoveredCard}`}>
            <CardContent>
              <Typography variant="h6" className={classes.title}>
                Recovered
              </Typography>
              <Typography variant="body1" className={classes.newCases}>
                {`[+${summary.NewRecovered}]`}
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {summary.TotalRecovered}
              </Typography>
              <Grid container justify="center">
                <Grid item>
                  <MiniChart data={recoveredSeries} />
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
                {`[+${summary.NewDeaths}]`}
              </Typography>
              <Typography variant="h4" className={classes.totalCases}>
                {summary.TotalDeaths}
              </Typography>
              <Grid container justify="center">
                <Grid item>
                  <MiniChart data={deceasedSeries} />
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
