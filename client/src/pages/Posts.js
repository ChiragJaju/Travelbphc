import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import CustomCard from "../components/CustomCard";
import Copyright from "../components/Copyright";
import AuthContext from "../context/AuthContext";

function Posts() {
  const { notes } = useContext(AuthContext);

  return (
    <div>
      {/* <Typography variant="h3">All Posts:</Typography> */}
      {notes.map((post) => {
        return <CustomCard post={post}></CustomCard>;
      })}
      <Copyright />
    </div>
  );
}

export default Posts;
