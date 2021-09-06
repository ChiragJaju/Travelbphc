import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import AuthContext from "./context/AuthContext";
// import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Posts from "./pages/Posts";
import axios from "axios";
import YourPosts from "./pages/YourPosts";
import Navbar from "./pages/Navbar";
import Filter from "./pages/Filter";

axios.defaults.withCredentials = true;

function App() {
  // const logg = useContext(AuthContext);
  // console.log("---");
  // console.log(logg);
  // console.log("---");
  const { loggedIn } = useContext(AuthContext);
  // useEffect(() => {
  //   console.log(loggedIn);
  // }, [loggedIn]);
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <Navbar />
      <Route path="/login">
        {loggedIn !== true ? <Login /> : <Redirect to="/"></Redirect>}
        {/* <Login /> */}
      </Route>
      <Route path="/" exact>
        {loggedIn === true ? <Home /> : <Redirect to="/login"></Redirect>}
        {/* <Home /> */}
      </Route>
      <Route path="/signup">
        {loggedIn !== true ? <SignUp /> : <Redirect to="/"></Redirect>}
      </Route>
      <Route path="/posts">
        {loggedIn === true ? <Posts /> : <Redirect to="/login"></Redirect>}
        {/* <Posts /> */}
      </Route>
      <Route path="/yourposts">
        {loggedIn === true ? <YourPosts /> : <Redirect to="/login"></Redirect>}
        {/* <YourPosts /> */}
      </Route>
      <Route path="/filter">
        {loggedIn === true ? <Filter /> : <Redirect to="/login"></Redirect>}
        {/* <Filter /> */}
      </Route>
    </Router>
  );
}

export default App;
