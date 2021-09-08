import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import YourCustomCard from "../components/YourCustomCard";
import Typography from "@material-ui/core/Typography";

export default function YourPosts() {
  const { userID, notes } = useContext(AuthContext);
  const currentDate = new Date();
  const pastPosts = [];
  const yourPosts = notes.filter((post) => {
    if (post.Pid === userID) {
      const postDate = new Date(post.PdateAndTime.data);
      if (postDate.getTime() - currentDate.getTime() >= 0) return true;
      else {
        pastPosts.push(post);
        return false;
      }
    } else return false;
  });

  return (
    <>
      {yourPosts.map((post) => {
        return (
          <>
            <YourCustomCard post={post}></YourCustomCard>
          </>
        );
      })}
      <hr color="red" />
      <Typography variant="h4" style={{ margin: "1vw 2.5vw 0" }}>
        Request History:
      </Typography>
      {pastPosts.map((post) => {
        return (
          <>
            <YourCustomCard post={post}></YourCustomCard>
          </>
        );
      })}
    </>
  );
}
