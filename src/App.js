import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import HomePage from "./pages/home/home";
import ChartPage from "./pages/charts/";
import AboutPage from "./pages/about/about";
import SandboxPage from "./pages/sandbox/sandbox";

import "./App.css";

// Covid19 - https://coolors.co/1e2023-c6315e-2dc698-ffffff-632d70
const theme = createMuiTheme({
  palette: {
    primary: { main: "#1e2023" }, // #673ab7
    secondary: { main: "#FF6584" },
    info: { main: "#f50057" },
    success: { main: "#2DC698" }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={ChartPage} />
          <Route exact path="/chart" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/mui-sandbox" component={SandboxPage} />
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
