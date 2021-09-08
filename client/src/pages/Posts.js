import React, { useContext } from "react";
import CustomCard from "../components/CustomCard";
import Copyright from "../components/Copyright";
import AuthContext from "../context/AuthContext";

function Posts() {
  const { notes } = useContext(AuthContext);

  return (
    <div>
      {notes.map((post) => {
        return <CustomCard post={post}></CustomCard>;
      })}
      <Copyright />
    </div>
  );
}

export default Posts;
