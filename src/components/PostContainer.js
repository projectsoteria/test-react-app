import React from "react";
import Post from "./Post";
import CardColumns from "react-bootstrap/CardColumns";

export default function ({ postData }) {
  const posts = postData.map((post) => {
    return (
      <Post
        author={post.author}
        date={post.date}
        text={post.text}
        img={post.img}
        key={post.author + post.text}
      ></Post>
    );
  });
  return (
    <div>
      <CardColumns>{posts}</CardColumns>
    </div>
  );
}
