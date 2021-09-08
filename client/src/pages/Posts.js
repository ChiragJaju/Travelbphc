import React, { useContext } from "react";
import CustomCard from "../components/CustomCard";
import Copyright from "../components/Copyright";
import AuthContext from "../context/AuthContext";

function Posts() {
  const { notes } = useContext(AuthContext);
  const currentDate = new Date();
  const postsToShow = notes.filter((post) => {
    const postDate = new Date(post.PdateAndTime.data);
    if (postDate.getTime() - currentDate.getTime() >= 0) return true;
    else return false;
  });

  return (
    <div>
      {postsToShow.map((post) => {
        return <CustomCard post={post}></CustomCard>;
      })}
      <Copyright />
    </div>
  );
}

export default Posts;
