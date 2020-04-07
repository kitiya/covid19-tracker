import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Banner from "../../components/banner/banner";

const AboutPage = () => {
  const urlPath = process.env.PUBLIC_URL;
  return (
    <>
      <Banner />
      <Grid container style={{ textAlign: "center" }}>
        <Grid item xs>
          <Typography
            variant="h2"
            color="secondary"
            style={{ marginTop: 60, textTransform: "uppercase" }}
          >
            Social Distancing
          </Typography>
          <img
            alt=""
            src={`${urlPath}/images/svg/social_distancing.svg`}
            style={{ maxHeight: "50vh", margin: 20 }}
          />
        </Grid>
        <Grid item xs>
          <List
            aria-label="social-distancing"
            style={{ marginTop: 50, width: "80%" }}
          >
            <ListItem color="textSecondary">
              <Typography variant="h6" style={{ color: "#616074" }}>
                Social distancing involves taking steps to limit the number of
                people you come into close contact with. It can help you reduce
                the risk of getting sick.
              </Typography>
            </ListItem>
            <ListItem color="textSecondary">
              <Typography variant="body1" style={{ color: "#616074" }}>
                This is not the same as self-isolation. You do not need to
                remain indoors, but you do need to avoid being in close contact
                with people.
              </Typography>
            </ListItem>
            <ListItem color="textSecondary">
              <Typography variant="body1" style={{ color: "#616074" }}>
                To protect yourself and others:
              </Typography>
              <ul>
                <li>
                  keep at least 6 feet (the length of a bicycle) from others
                  when going out for groceries, medical trips and other
                  essential needs
                </li>
                <li>
                  limit the number of times you leave your home for errands
                </li>
                <li>try to shop at less busy times</li>
                <li>
                  order online to have groceries or other items delivered if
                  possible
                </li>
                <li>
                  go for a walk in your neighbourhood or park while maintaining
                  distance from others
                </li>
                <li>
                  avoid overcrowding in elevators or other enclosed spaces
                </li>
                <li>follow Alberta’s recommendations on mass gatherings</li>
                <li>
                  wash or sanitize your hands after touching communal surfaces
                </li>
              </ul>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
