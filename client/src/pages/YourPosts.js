import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import YourCustomCard from "../components/YourCustomCard";

export default function YourPosts() {
  const { userID, notes } = useContext(AuthContext);

  const yourPosts = notes.filter((post) => {
    if (post.Pid === userID) return true;
    else return false;
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
    </>
  );
}
