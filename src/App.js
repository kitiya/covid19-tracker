import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import SandboxPage from "./pages/sandbox/sandbox";

import "./App.css";

// Covid19 - https://coolors.co/1e2023-c6315e-2dc698-ffffff-632d70
const theme = createMuiTheme({
  palette: {
    primary: { main: "#1e2023" }, // #673ab7
    secondary: { main: "#D76E8E" },
    info: { main: "#f50057" },
    success: { main: "#2DC698" }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SandboxPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/sandbox" component={HomePage} />
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
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
