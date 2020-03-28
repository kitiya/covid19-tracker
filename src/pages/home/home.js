import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { top20Countries, countryStore } from "../../store";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexFlow: "row wrap",
    padding: 50,
    background: "#fafafa",
    justifyContent: "center"
  },
  cardRoot: {
    margin: 3,
    flex: "1 1 400px"
  },
  flagIcon: {
    height: 50
  },
  totalCaseGrid: {
    textAlign: "center"
  },
  totalCaseGridRow: {
    marginTop: 10,
    color: "#504E65"
  }
}));

// function compare(a, b) {
//   console.log(a, b);
//   if (a.stat.cases > b.stat.cases) {
//     return 1;
//   }
//   if (a.stat.cases < b.stat.cases) {
//     return -1;
//   }
//   return 0;
// }

const HomePage = () => {
  const apiKey = process.env.REACT_APP_COVID19_KEY;
  const [countries, setCountries] = useState([]);
  const classes = useStyles();
  const urlPath = process.env.PUBLIC_URL;

  useEffect(() => {
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        }
      )
      .then(response => {
        const data = response.data.countries_stat;
        const fetchCountries = data.filter(item => {
          return top20Countries.includes(item.country_name);
        });

        const concatCountries = [...fetchCountries, ...countryStore];

        const mergeCountries = concatCountries.reduce((countries, c) => {
          if (c.cases) {
            countries[c.country_name] = {};
            countries[c.country_name]["stat"] = {
              ...c
            };
          } else {
            countries[c.country_name] = { ...countries[c.country_name], ...c };
          }
          return countries;
        }, []);

        setCountries(Object.entries(mergeCountries));
      })
      .catch(err => {
        console.log(err);
      });
  }, [apiKey]);

  console.log(countries);
  return (
    <>
      <Header />
      <Grid container>
        <Grid item sm>
          <Paper className={classes.paper}>
            {countries.map(cItem => {
              const c = cItem[1];
              const { stat } = c;
              return (
                <Card className={classes.cardRoot} key={c.stat.country_name}>
                  <CardHeader
                    className={classes.totalCaseGrid}
                    title={
                      <>
                        <img
                          alt=""
                          src={`${urlPath}/icons/${c.icon}`}
                          className={classes.flagIcon}
                        />
                        <Typography variant="h5" component="h2">
                          {c.stat.country_name}
                        </Typography>
                      </>
                    }
                  />
                  <CardContent>
                    <Grid container>
                      <Grid item xs className={classes.totalCaseGrid}>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          Cases: {stat.cases}
                        </Typography>
                      </Grid>
                      <Grid item xs className={classes.totalCaseGrid}>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          Deaths: {stat.deaths}
                        </Typography>
                      </Grid>
                      <Grid item xs className={classes.totalCaseGrid}>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          Recovered: {stat.total_recovered}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        className={`${classes.totalCaseGrid} ${classes.totalCaseGridRow}`}
                      >
                        <Typography variant="body1" component="p">
                          Total cases per 1m population:
                          {stat.total_cases_per_1m_population}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              );
            })}
          </Paper>
        </Grid>
        {/* <Grid item sm>
          <Paper className={classes.paper}>Right</Paper>
        </Grid> */}
      </Grid>

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
