import React, { useState, useContext } from "react";
import axios from "axios";
import Copyright from "../components/Copyright";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const { getLoggedIn } = useContext(AuthContext);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [enteredValid, setEnteredValid] = useState(true);

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
    if (
      nameInput.trim().length !== 0 &&
      emailInput.trim().length !== 0 &&
      passwordInput.trim().length !== 0
    ) {
      setIsFormValid(true);
    }
  };

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
    if (
      nameInput.trim().length !== 0 &&
      emailInput.trim().length !== 0 &&
      passwordInput.trim().length !== 0
    ) {
      setIsFormValid(true);
    }
  };
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
    if (
      nameInput.trim().length !== 0 &&
      emailInput.trim().length !== 0 &&
      passwordInput.trim().length !== 0
    ) {
      setIsFormValid(true);
    }
  };

  // const checkInput = () => {
  //   if (
  //     nameInput.trim().length !== 0 &&
  //     emailInput.trim().length !== 0 &&
  //     passwordInput.trim().length !== 0
  //   ) {
  //     setIsFormValid(true);
  //   }
  // };

  // IF I CHECK IN HANDLECLICK, IT TAKES TIME TO UPDATE AND HENCE DOESNT GO AS CORRECT
  const handleClick = async (event) => {
    event.preventDefault();
    const newUser = {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    };

    // await checkInput();
    //NEEED TO DO SOMETHING ABOUT THIS-------------------------------------------

    if (isFormValid) {
      // console.log(newNote);
      await axios.post("/api/signup", newUser);
      setEmailInput("");
      setNameInput("");
      setPasswordInput("");
      setEnteredValid(true);
      getLoggedIn();
    } else {
      setEnteredValid(false);
      return;
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={handleNameChange}
                  value={nameInput}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  onChange={handleEmailChange}
                  value={emailInput}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  required
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                  value={passwordInput}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Sign Up
            </Button>
            {!enteredValid && (
              <Typography>Please Enter Valid Information!</Typography>
            )}
          </form>
        </div>
      </Container>
      <Copyright />
    </div>
  );
}
