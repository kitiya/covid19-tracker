import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { top10Countries, top20Countries, countryStore } from "../../store";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 50,
    background: "#fafafa"
  }
}));

function compare(a, b) {
  console.log(a, b);
  if (a.stat.cases > b.stat.cases) {
    return 1;
  }
  if (a.stat.cases < b.stat.cases) {
    return -1;
  }
  return 0;
}

const SandboxPage = () => {
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
          return top10Countries.includes(item.country_name);
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

  // console.log("merged: ", countries);
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
                <div key={c.id}>
                  <img alt={c.code} src={`${urlPath}/icons/${c.icon}`} />
                  <h1>{c.country_name}</h1>
                  <span>
                    Cases: {stat.cases} | Deaths: {stat.deaths} | Total
                    Recovered: {stat.total_recovered}
                  </span>
                </div>
              );
            })}
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper className={classes.paper}>Right</Paper>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default SandboxPage;
