import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import RequestText from "./RequestText";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#E0E0E0",
    width: "95vw",
    padding: "20px",
  },
  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },
  gridItem: {
    marginBottom: "25px",
  },
}));

export default function YourCustomCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={5} className={classes.gridItem}>
          <Box fontSize="h4.fontSize" color="fontWeightBold" display="inline">
            {props.post.Parrival}
          </Box>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <Box
            className={classes.arrow}
            display="inline"
            fontSize="h4.fontSize"
          >
            <i class="fas fa-arrow-right"></i>
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          style={{ textAlign: "right" }}
          className={classes.gridItem}
        >
          <Box
            fontSize="h4.fontSize"
            color="fontWeightBold"
            display="inline"
            textAlign="right"
          >
            {props.post.Pdestination}
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <Box fontSize="h5.fontSize" color="fontWeightBold" display="inline">
            {`Date: `}
            {props.post.PdateAndTime.date}/{props.post.PdateAndTime.month}/
            {props.post.PdateAndTime.year}
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "right" }}
          className={classes.gridItem}
        >
          <Box
            fontSize="h5.fontSize"
            color="fontWeightBold"
            display="inline"
            textAlign="right"
          >
            {` Time: `}
            {props.post.PdateAndTime.hour < 12
              ? props.post.PdateAndTime.hour
              : props.post.PdateAndTime.hour - 12}
            :
            {props.post.PdateAndTime.min >= 10
              ? props.post.PdateAndTime.min
              : "0" + props.post.PdateAndTime.min}
            {props.post.PdateAndTime.hour < 12 ? " am" : " pm"}
          </Box>
        </Grid>
        {props.post.Preq.map((req) => {
          return (
            <Grid item xs={12}>
              <RequestText req={req}></RequestText>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
}
