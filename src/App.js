import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/header/header";

import HomePage from "./pages/home/home";
import CanadaPage from "./pages/canada/canada";
import AboutPage from "./pages/about/about";
import MuiSandboxPage from "./pages/sandbox/mui/mui-sandbox";
import ReChartSandboxPage from "./pages/sandbox/rechart/rechart-sandbox";
import RapidApiPage from "./pages/sandbox/rapid-api/rapid-api";

import "./App.css";

// Covid19 - https://coolors.co/1e2023-c6315e-2dc698-ffffff-632d70
let theme = createMuiTheme({
  typography: {
    fontFamily: ["Overpass", "sans-serif"],
    h1: {
      color: "#343638",
    },
    h2: {
      color: "#343638",
    },
    h3: {
      color: "#343638",
    },
    h4: {
      color: "#343638",
    },
    h5: {
      color: "#343638",
    },
    h6: {
      color: "#343638",
    },
  },
  palette: {
    primary: { main: "#1e2023" },
    secondary: { main: "#EC407A" },
    info: { main: "#8884D8" },
    success: { main: "#009688" },
    text: {
      primary: "#5c5d5f",
      header: "#343638",
      activeNavLink: "#f58a97",
    },
    background: {
      dark: "#1E2023",
      card: "#eeeeef",
      tableHeader: "#2a2d31",
    },
    cases: {
      confirmed: "#EC407A",
      active: "#2196f3",
      recovered: "#009688",
      deaths: "#607d8b",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <HashRouter basename="/">
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/canada" component={CanadaPage} />
            <Route exact path="/chart" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/mui-sandbox" component={MuiSandboxPage} />
            <Route
              exact
              path="/rechart-sandbox"
              component={ReChartSandboxPage}
            />
            <Route exact path="/rapid-api" component={RapidApiPage} />
            <Route
              component={() => {
                return (
                  <h1 style={{ textAlign: "center", marginTop: "50px" }}>
                    Page not found
                  </h1>
                );
              }}
            />
          </Switch>
        </HashRouter>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
