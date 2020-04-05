import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { bannerDB } from "../../store";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      background: "#bbdefb",
      textAlign: "center",
      padding: 10,
    },
  };
});

const Banner = () => {
  const [snippets, setSnippets] = useState([]);
  const [snippet, setSnippet] = useState();

  const classes = useStyles();

  useEffect(() => {
    setSnippets(bannerDB || []);
    setSnippet(bannerDB[0] || "");
  }, []);

  const snippetChooser = useCallback(
    (min, max) => {
      const index = Math.random() * (max - min) + min;
      setSnippet(snippets[Math.floor(index)]);
    },
    [snippets]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      snippetChooser(0, snippets.length - 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [snippetChooser, snippets]);

  return (
    <>
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="subtitle1">
          {snippet ? snippet.banner : ""} &nbsp;
        </Typography>
      </Container>
    </>
  );
};
export default Banner;
