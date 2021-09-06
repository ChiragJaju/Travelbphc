import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Copyright from "../components/Copyright";
import Card from "@material-ui/core/Card";
import "date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AuthContext from "../context/AuthContext";
import DateFnsUtils from "@date-io/date-fns";
import CardContent from "@material-ui/core/CardContent";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import CustomCard from "../components/CustomCard";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#DEE3E3",
    width: "95vw",
    padding: "20px",
  },
  root: {
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(0),
    width: "200px",
  },
  submitButton: {
    marginTop: "20px",
  },
  text: {
    color: "#33AB3E",
  },
}));

export default function Filter() {
  const classes = useStyles();
  const { notes } = useContext(AuthContext);
  const [arrival, setArrival] = useState("Airport");
  const [destination, setDestination] = useState("Campus");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [postsToShow, setPostsToShow] = useState([]);
  const [pastDate, setPastDate] = useState();

  const handleArrivalChange = (event) => {
    setArrival(event.target.value);
  };
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) =>
    firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) < 0;

  const handlePlaceSubmit = () => {
    let filteredPosts = notes.filter((post) => {
      if (post.Parrival === arrival && post.Pdestination === destination)
        return true;
      else return false;
    });

    setPostsToShow(filteredPosts);
  };
  const handleDateSubmit = async () => {
    const response = await notes.filter((post) => {
      const goodDate = new Date(post.PdateAndTime.data);
      if (
        Math.abs(
          goodDate.setHours(0, 0, 0, 0) - selectedDate.setHours(0, 0, 0, 0)
        ) <= 8640000
      )
        return true;
      else return false;
    });
    setPostsToShow(response);
  };

  useEffect(() => {
    const currentDate = new Date();
    const goodDate = new Date(selectedDate);
    setPastDate(firstDateIsPastDayComparedToSecond(goodDate, currentDate));
  }, [selectedDate]);

  return (
    <>
      <Card variant="outlined" className={classes.card}>
        <Typography variant="h4">Filter</Typography>
        <form className={classes.form} noValidate>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel id="demo-simple-select-required-label">
                    Arrival
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={arrival}
                    onChange={handleArrivalChange}
                    className={classes.selectEmpty}
                  >
                    <MenuItem value={"Campus"}>Campus</MenuItem>
                    <MenuItem value={"Airport"}>Airport</MenuItem>
                    <MenuItem value={"Bustop"}>Bustop</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel id="demo-simple-select-required-label">
                    Destination
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={destination}
                    onChange={handleDestinationChange}
                    className={classes.selectEmpty}
                  >
                    <MenuItem value={"Campus"}>Campus</MenuItem>
                    <MenuItem value={"Airport"}>Airport</MenuItem>
                    <MenuItem value={"Bustop"}>Bustop</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </Grid>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={4}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Arrival Date"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid xs={4}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#FF1268",
                    color: "#FFFFFF",
                    marginTop: "50px",
                  }}
                  className={classes.submitButton}
                  onClick={handlePlaceSubmit}
                >
                  By Place
                </Button>
              </Grid>
              <Grid xs={4}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#FF1268",
                    color: "#FFFFFF",
                    marginTop: "50px",
                  }}
                  className={classes.submitButton}
                  onClick={handleDateSubmit}
                >
                  By Date
                </Button>
              </Grid>
            </Grid>

            {pastDate === true && (
              <Typography variant="h6" color="error">
                Please Enter a Valid Date!
              </Typography>
            )}
          </CardContent>
        </form>
      </Card>
      <hr />
      {postsToShow.length !== 0 && (
        <Typography variant="h3" style={{ margin: "1vw 2.5vw 0" }}>
          Results:
        </Typography>
      )}
      {postsToShow.map((post) => {
        return (
          <>
            <CustomCard post={post}></CustomCard>
          </>
        );
      })}
    </>
  );
}