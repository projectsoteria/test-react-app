import Post from './components/Post';
import React from 'react';
///import logo from './logo.svg';
///import './App.css';

function App() {
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
          img: ""
        },
      ];
      const posts = postData.map(post => {
        return <Post author={post.author} date={post.date} text={post.text} img={post.img}></Post>
      });
      return <div>{posts}</div>
}

export default App;
