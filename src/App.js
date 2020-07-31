import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PostContainer from "./components/PostContainer";
import ArticleContainer from "./components/ArticleContainer";
import Navbar from "./components/Navbar";

function App() {
  const [eventKey, setEventKey] = useState("Home");
  let page = undefined;
  if (eventKey === "Home") {
    page = <Home></Home>;
  } else if (eventKey === "About") {
    page = <About></About>;
  } else if (eventKey === "Articles") {
    page = <ArticleContainer articleData={[]}></ArticleContainer>;
  } else if (eventKey === "Posts") {
    page = <PostContainer postData={[]}></PostContainer>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <Navbar
            title="Project Soteria"
            user="Shreya"
            onSelect={(eventKey) => setEventKey(eventKey)}
          ></Navbar>
        </Col>
      </Row>
      <Row>
        <Col>{page}</Col>
      </Row>
      <Row>
        <Col>
          <Footer title="Project Soteria"></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
