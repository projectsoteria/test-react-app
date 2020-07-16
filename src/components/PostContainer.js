import React from "react";
import Post from "./Post";
import CardColumns from "react-bootstrap/CardColumns";

export default function ({ author, text, imageUrl, date, comments }) {
  const postData = [
    {
      author: "hi",
      date: "today",
      text: "hello",
      img:
        "https://bakingamoment.com/wp-content/uploads/2020/01/IMG_7173-white-bread-2.jpg",
    },
    {
      author: "hello",
      date: "today",
      text: "hello",
      img: "",
    },
  ];
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
