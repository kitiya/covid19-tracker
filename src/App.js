import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import pink from "@material-ui/core/colors/pink";
import teal from "@material-ui/core/colors/teal";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";

import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import HomePage from "./pages/home/home";
import CanadaPage from "./pages/canada/canada";
import AboutPage from "./pages/about/about";
import MuiSandboxPage from "./pages/sandbox/mui/mui-sandbox";
import ReChartSandboxPage from "./pages/sandbox/rechart/rechart-sandbox";
import RapidApiPage from "./pages/sandbox/rapid-api/rapid-api";

import "./App.css";

// Covid19 - https://coolors.co/1e2023-c6315e-2dc698-ffffff-632d70
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Overpass", "sans-serif"]
  },
  palette: {
    primary: { main: "#1e2023" }, // #673ab7
    secondary: { main: "#FF6584" },
    info: { main: "#f50057" },
    success: { main: "#2DC698" },
    light: { main: "#ffffff" },
    primaryText: { main: "#777777", dark: "#666666", light: "#dddddd" },
    cases: {
      confirmed: pink,
      active: blue,
      recovered: teal,
      deceased: blueGrey
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Header />
        <Banner />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/canada" component={CanadaPage} />
          <Route exact path="/chart" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/mui-sandbox" component={MuiSandboxPage} />
          <Route exact path="/rechart-sandbox" component={ReChartSandboxPage} />
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
    </MuiThemeProvider>
  );
}

export default App;
