import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import MiniChart from "../../components/charts/minichart";

const useStyles = makeStyles(theme => {
  const confirmed = theme.palette.cases.confirmed[400]; //pink
  const active = theme.palette.cases.active[500]; //blue
  const recovered = theme.palette.cases.recovered[500]; // teal
  const deceased = theme.palette.cases.deceased[500]; // blue grey
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
      color: confirmed
    },
    activeCard: {
      color: active
    },
    recoveredCard: {
      color: recovered
    },
    deceasedCard: {
      color: deceased
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

const CountrySummary = ({ countrySummary, countrySeries }) => {
  const classes = useStyles();
  const theme = useTheme();
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

export default CountrySummary;
