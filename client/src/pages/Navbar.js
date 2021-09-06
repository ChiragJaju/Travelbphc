import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Button from "@material-ui/core/Button";
import LogOutButton from "../components/LogOutBtn";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";

import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(2),
  },
  logOut: {
    textAlign: "right",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function BackToTop(props) {
  const { loggedIn } = useContext(AuthContext);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ background: "#424242" }}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Button color="#ffffff" variant="contained">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#424242" }}
                >
                  Home
                </Link>
              </Button>
            </Grid>
            {loggedIn === false && (
              <>
                <Grid item xs={6} className={classes.logOut}>
                  <Button
                    color="#ffffff"
                    variant="contained"
                    style={{ marginRight: "25px" }}
                  >
                    <Link
                      to="./login"
                      style={{ textDecoration: "none", color: "#424242" }}
                    >
                      Login
                    </Link>
                  </Button>

                  <Button color="#ffffff" variant="contained">
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", color: "#424242" }}
                    >
                      Signup
                    </Link>
                  </Button>
                </Grid>
              </>
            )}
            {loggedIn === true && (
              <>
                <Grid xs={6} className={classes.logOut}>
                  <Button
                    color="#ffffff"
                    variant="contained"
                    style={{ marginRight: "25px" }}
                  >
                    <Link
                      to="/filter"
                      style={{ textDecoration: "none", color: "#424242" }}
                    >
                      Filter
                    </Link>
                  </Button>
                  <Button
                    color="#ffffff"
                    variant="contained"
                    style={{ marginRight: "25px" }}
                  >
                    <Link
                      to="/posts"
                      style={{ textDecoration: "none", color: "#424242" }}
                    >
                      All Posts
                    </Link>
                  </Button>

                  <LogOutButton />
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
