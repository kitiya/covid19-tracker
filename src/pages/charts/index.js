import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header/header";
import ChartData from "./chart-data";

const ChartPage = () => {
  const countries = ["italy", "spain", "thailand", "france"];

  return (
    <>
      <Header />
      <Grid
        container
        style={{
          textAlign: "center",
          margin: "100px auto",
          justifyContent: "center"
        }}
      >
        {countries.map((country, index) => {
          console.log(country);
          return (
            <Grid key={index} item>
              <Paper>
                <ChartData country={country} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ChartPage;
