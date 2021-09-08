import React, { useContext, useEffect } from "react";
import CustomCard from "../components/CustomCard";
import Copyright from "../components/Copyright";
import AuthContext from "../context/AuthContext";
import axios from "axios";

function Posts() {
  const { notes, setNotes } = useContext(AuthContext);
  const currentDate = new Date();
  const postsToShow = notes.filter((post) => {
    const postDate = new Date(post.PdateAndTime.data);
    if (postDate.getTime() - currentDate.getTime() >= 0) return true;
    else return false;
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/posts");
      setNotes(response.data);
    };
    fetchData();
  }, [setNotes, notes]);

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
