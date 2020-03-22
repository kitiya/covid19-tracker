import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 50,

    background: "#fafafa"
  }
}));

const SandboxPage = () => {
  const apiKey = process.env.REACT_APP_COVID19_KEY;
  const [countries, setCountries] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const targetCountries = [
      "China",
      "Italy",
      "USA",
      "Spain",
      "Germany",
      "Iran",
      "France",
      "S. Korea",
      "Switzerland",
      "UK"
    ];
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
        const countries = data.filter(item => {
          return targetCountries.includes(item.country_name);
        });

        setCountries(countries);
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
            {countries.map(c => (
              <div key={c.country_name}>
                <h1>{c.country_name}</h1>
                <span>
                  Cases: {c.cases}; Death: {c.deaths}; Total Recovered:{" "}
                  {c.total_recovered}
                </span>
              </div>
            ))}
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
