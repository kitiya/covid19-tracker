import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/icons/Link";
import { faqDB } from "./faqDb";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    paddingBottom: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 30,
    },
  },
  gridImageItem: {
    textAlign: "center",
    // background: "yellow",
  },
  gridPanelItem: {
    // margin: "25px auto",
  },
  title: {
    marginBottom: 20,
  },
  imageItem: {
    width: "90%",
    maxWidth: "500px",
    [theme.breakpoints.down("md")]: {
      marginBottom: 25,
    },
  },
  panelDetails: {
    flexDirection: "column",
  },
  paragraphItem: {
    marginBottom: "0.5em",
  },
  link: {
    color: theme.palette.info.main,
  },
}));

const QAndAPanel = ({ question, answers, link, classes }) => {
  const handleOpenLinkClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">{question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        {answers
          ? answers.map((answer, index) => (
              <Typography
                gutterBottom
                variant="body1"
                key={index}
                className={classes.paragraphItem}
              >
                {console.log(answer)}
                {answer}
                <br />
              </Typography>
            ))
          : null}
        {link ? (
          <Link
            onClick={(event) => {
              handleOpenLinkClick(event, link.url);
            }}
            href={link.url}
            target="_blank"
            rel="noopener"
            className={classes.link}
          >
            {link.text}
          </Link>
        ) : null}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const Faq = () => {
  const classes = useStyles();
  const urlPath = process.env.PUBLIC_URL;
  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid container>
          <Grid item lg={5}></Grid>
          <Grid item md={12} lg={7}>
            <Typography variant="h3" className={classes.title}>
              Frequently asked questions
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={5} className={classes.gridImageItem}>
          <img
            alt=""
            src={`${urlPath}/images/svg/social_distancing.svg`}
            className={classes.imageItem}
          />
        </Grid>
        <Grid item lg={7} className={classes.gridPanelItem}>
          {faqDB.map((item, index) => (
            <QAndAPanel
              key={index}
              question={item.question}
              answers={item.answers}
              link={item.link}
              classes={classes}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Faq;
