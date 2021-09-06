import React, { useState, useContext } from "react";
import Copyright from "../components/Copyright";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import AuthContext from "../context/AuthContext";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  div: {
    height: "100vh",
  },
}));

export default function Login() {
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [correctInput, setCorrectInput] = useState(undefined);
  const classes = useStyles();
  const { getLoggedIn, setUserEmail } = useContext(AuthContext);
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = {
        email: emailInput,
        password: passwordInput,
      };

      const response = await axios.post("/api/login", loginData);
      const isWrong = response.data.value;
      setCorrectInput(isWrong);
      setEmailInput("");
      setPasswordInput("");
      getLoggedIn();
      // console.log(correctInput);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.div}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              value={passwordInput}
              onChange={handlePasswordChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2" color="textPrimary">
                  {"Don't have an account? Sign Up"}
                </Link>
                {correctInput === false && (
                  <Typography variant="h6" color="error">
                    Wrong Email or Password!
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Copyright />
    </div>
  );
}