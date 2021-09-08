import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AuthContext from "../context/AuthContext";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "1vw 1vw",
    backgroundColor: "#E0E0E0",
    width: "47vw",
    padding: "2vw",
  },
  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },
  gridItem: {
    marginBottom: "25px",
  },
  text: {
    color: "#33AB3E",
  },
  textFalse: {
    color: "#FF0000",
  },
}));
export default function CustomCard(props) {
  const classes = useStyles();
  const [isReqSent, setIsReqSent] = useState(undefined);
  const { userInfo } = useContext(AuthContext);
  const handleClick = async (event) => {
    // console.log(props.post._id);
    const sendDetails = {
      Rname: userInfo.name,
      Remail: userInfo.email,
    };
    const response = await axios.post(
      "/api/posts/request/" + props.post._id,
      sendDetails
    );
    setIsReqSent(response.data);
  };

  return (
    <Box display="inline-block">
      <Card variant="outlined" className={classes.card}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={5} className={classes.gridItem}>
            <Box fontSize="h3.fontSize" color="fontWeightBold" display="inline">
              {props.post.Parrival}
            </Box>
            <hr />
          </Grid>
          <Grid item xs={2} className={classes.gridItem}>
            <Box
              className={classes.arrow}
              display="inline"
              fontSize="h3.fontSize"
            >{`->`}</Box>
            <hr />
          </Grid>
          <Grid
            item
            xs={5}
            style={{ textAlign: "right" }}
            className={classes.gridItem}
          >
            <Box
              fontSize="h3.fontSize"
              color="fontWeightBold"
              display="inline"
              textAlign="right"
            >
              {props.post.Pdestination}
            </Box>
            <hr />
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
              :{props.post.PdateAndTime.min}
              {props.post.PdateAndTime.hour < 12 ? " am" : " pm"}
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <Box fontSize="h5.fontSize" color="fontWeightBold" display="inline">
              {props.post.Pname}
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
              {props.post.Pemail}
            </Box>
          </Grid>

          <Button
            variant="contained"
            style={{ backgroundColor: "#FF005D", color: "#FFFFFF" }}
            className={classes.submitButton}
            onClick={handleClick}
          >
            Request
          </Button>

          {isReqSent === true && (
            <Typography variant="h6" className={classes.text}>
              {"Request Successfully Submitted!"}
            </Typography>
          )}
          {isReqSent === false && (
            <Typography variant="h6" className={classes.textFalse}>
              {"Request was already sent."}
            </Typography>
          )}
        </Grid>
      </Card>
    </Box>
  );
}
