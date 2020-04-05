import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    cardHeader: {
      background: theme.palette.background.card
    },
    cardContent: {
      "& > div": {
        justifyContent: "center"
      }
    }
  };
});

export const SimpleCard = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title={title}
        align="left"
      ></CardHeader>
      <CardContent className={classes.cardContent}>{children}</CardContent>
    </Card>
  );
};
